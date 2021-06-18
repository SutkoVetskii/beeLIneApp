import React, { useContext, useState } from 'react'
import { Container, Form, Card, Button } from 'react-bootstrap'
import { isAdmin } from '../api/userApi'
import { Context } from '../index'
import { useHistory } from 'react-router-dom'

export const Auth = () => {
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const { user } = useContext(Context)
    let history = useHistory()
    const signIn = async () => {
        const response = await isAdmin(password)
        if (response.status === 200) {
            user.setIsAuth(true)
            history.push('/')
        } else {
            setIsError(true)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card className="p-5" style={{ width: 600 }}>
                <h2 className="m-auto">Авторизуйтесь</h2>

                <Form className="d-flex flex-column">
                    <Form.Control
                        value={password}
                        className="mt-3"
                        placeholder="Введите пароль"
                        type="password"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                    <Button onClick={signIn} className="mt-3 align-self-center" variant="outline-success">
                        Войти
                    </Button>
                    {isError && <span style={{ color: 'red' }}>неверный пароль</span>}
                </Form>
            </Card>
        </Container>
    )
}
