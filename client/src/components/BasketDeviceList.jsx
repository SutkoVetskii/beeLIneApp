import React, { useCallback, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { Row } from 'react-bootstrap'
import { DeviceItem } from './DeviceItem'
import { getItemIndexes } from '../utils/helpers'

export const BasketDeviceList = observer(() => {
    const { device } = useContext(Context)

    const dropFromBasket = useCallback(item => {
        const { itemIndexBasket, itemIndexDevice } = getItemIndexes(device, item)
        if (device.basket[itemIndexBasket].amount === 1) {
            device.basket.splice(itemIndexBasket, 1)
        } else {
            device.basket[itemIndexBasket].amount -= 1
        }
        device.devices[itemIndexDevice].amount += 1
    }, [])

    return (
        <Row className="d-flex">
            {device.basket.map(device => (
                <DeviceItem key={device.id} device={device} setAmount={() => dropFromBasket(device)} />
            ))}
        </Row>
    )
})
