import React, { useContext } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'

export const Orders = observer(() => {
    const { device } = useContext(Context)
    return (
        <Container className="d-flex justify-content-center">
            <Row style={{ width: 600 }}>
                {device.orders.map(el => (
                    <Col md={3} className="m-2">
                        <Card style={{ width: 150 }} className="mt-3">
                            <div>
                                <div>тел: {el.phone}</div>
                                <div>
                                    модели:{' '}
                                    {el.order.map(el => (
                                        <div>
                                            {el.name} : {el.amount}
                                        </div>
                                    ))}{' '}
                                </div>
                                <div>сумма: {el.order.reduce((sum, { amount, price }) => sum + amount * price, 0)}</div>
                            </div>
                            <div className="d-flex justify-content-between">{device.price}</div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
})
