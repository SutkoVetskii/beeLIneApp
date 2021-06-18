import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Context } from '../index'
import { Navbar, Nav, Button, Image } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import basketIcon from '../icons/basket.svg'
import { ADMIN_ROUTE, ORDERS_ROUTE } from '../utils/constants'

export const NavBar = observer(() => {
    const { user, device } = useContext(Context)
    const history = useHistory()

    const adminLogOut = () => {
        user.setIsAuth(false)
        history.push('/')
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Link to="/">
                <Navbar.Brand>BeeApp</Navbar.Brand>
            </Link>

            {user.isAuth ? (
                <>
                    <Nav className="ml-auto">
                        <Link to={ADMIN_ROUTE}>
                            <Button variant={'outline-light'}>Товары</Button>
                        </Link>
                        <Link to={ORDERS_ROUTE}>
                            <Button variant={'outline-light'}>Заказы</Button>
                        </Link>
                    </Nav>

                    <Nav className="ml-auto">
                        <Button variant={'outline-light'} onClick={adminLogOut}>
                            Выйти
                        </Button>
                    </Nav>
                </>
            ) : (
                <>
                    <Nav className="ml-auto">
                        <Link to="/basket">
                            <Button variant={'outline-light'} className="d-flex flex-row align-items-lg-end">
                                <Image src={basketIcon} width={50} />
                                {device.basket.length > 0 && device.basket.reduce((sum, el) => sum + el.amount, 0)}
                            </Button>
                        </Link>
                    </Nav>

                    <Nav className="ml-auto">
                        <Link to="/login">
                            <Button variant={'outline-light'}>Я Админ!</Button>
                        </Link>
                    </Nav>
                </>
            )}
        </Navbar>
    )
})
