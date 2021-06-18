import React from 'react'
import { Card, Col } from 'react-bootstrap'

export const OrderItem = ({ item }) => {
    const sum = item.order.reduce((sum, { amount, price }) => sum + amount * price, 0)

    const models = item.order.map(el => (
        <div>
            {el.name} : {el.amount}
        </div>
    ))

    return (
        <Col md={3} className="m-2">
            <Card style={{ width: 200 }} className="mt-3 p-2">
                <div>
                    <div>тел: {item.phone}</div>
                    <div>модели: {models}</div>
                    <div>сумма: {sum}</div>
                </div>
            </Card>
        </Col>
    )
}
