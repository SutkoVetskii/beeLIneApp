import React, { useContext } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { OrderItem } from '../components'

export const Orders = observer(() => {
    const { device } = useContext(Context)
    return (
        <Container className="d-flex justify-content-center">
            <Row style={{ width: 600 }}>
                {device.orders.map(item => (
                    <OrderItem item={item} />
                ))}
            </Row>
        </Container>
    )
})
