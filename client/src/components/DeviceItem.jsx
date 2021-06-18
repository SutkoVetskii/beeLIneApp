import React from 'react'
import { Col, Card, Image } from 'react-bootstrap'
import addBasket from '../icons/addBasket.svg'
import { observer } from 'mobx-react-lite'

export const DeviceItem = observer(({ device, setAmount }) => {
    return (
        <Col md={3}>
            <Card style={{ width: 150 }} className="mt-3">
                <div className="d-flex justify-content-center">
                    <div>{device.name}</div>
                </div>
                <div style={{ height: 150, width: 150 }} className="d-flex justify-content-center">
                    <Image height={150} src={device.img} />
                </div>
                <div className="d-flex justify-content-between">
                    {device.price}
                    <div>
                        <Image height={20} width={20} src={addBasket} onClick={setAmount} />
                        {device.amount}
                    </div>
                </div>
            </Card>
        </Col>
    )
})
