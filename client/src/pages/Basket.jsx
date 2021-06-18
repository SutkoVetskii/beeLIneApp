import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { Col, Container, Row } from 'react-bootstrap'
import { OrderForm, BasketDeviceList } from '../components'

export const Basket = observer(() => {
    const { devices } = useContext(Context)
    return (
        <Container className="mt-5">
            <OrderForm />
            <div className="mt-5">
                <BasketDeviceList />
            </div>
        </Container>
    )
})
