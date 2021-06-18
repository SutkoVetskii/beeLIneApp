import React, { useCallback, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { Row } from 'react-bootstrap'
import { DeviceItem } from './DeviceItem'
import { getItemIndexes } from '../utils/helpers'

export const ShopDeviceList = observer(() => {
    const { device } = useContext(Context)

    const putToBasket = useCallback(item => {
        const { itemIndexBasket, itemIndexDevice } = getItemIndexes(device, item)

        if (itemIndexBasket === -1) {
            device.basket.push({ ...item, amount: 1 })
        } else {
            device.basket[itemIndexBasket].amount += 1
        }

        device.devices[itemIndexDevice].amount -= 1
    }, [])

    let availableDevices = device.devices.filter(item => item.amount > 0)

    return (
        <Row className="d-flex">
            {availableDevices.map(device => (
                <DeviceItem key={device.id} device={device} setAmount={() => putToBasket(device)} />
            ))}
        </Row>
    )
})
