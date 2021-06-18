import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import { Context } from '../index'

export const OrderForm = observer(() => {
    const [phone, setPhone] = useState('')
    const [isSubmit, setSubmit] = useState(false)
    const { device } = useContext(Context)
    const sum = device.basket.reduce((sum, { amount, price }) => sum + amount * price, 0)

    const formSubmit = () => {
        if (device.basket.length > 0 && phone) {
            device.setOrders({ phone, order: device.basket })
            device.setBasket([])
            setPhone('')
            setSubmit(true)
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Card className="p-3" style={{ width: 500 }}>
                {isSubmit ? (
                    <>
                        <h3>Заказ отправлен!</h3>
                        <Link to="/">в магазин</Link>
                    </>
                ) : (
                    <Form className="d-flex flex-column">
                        <div>заказ на сумму {sum} р</div>
                        <Form.Control
                            value={phone}
                            className="mt-3"
                            placeholder="Введите номер телефона"
                            onChange={({ target }) => setPhone(target.value)}
                            type="tel"
                        />
                        <Button onClick={formSubmit} className="mt-3 align-self-center" variant="outline-success">
                            Сделать заказ
                        </Button>
                    </Form>
                )}
            </Card>
        </Container>
    )
})
