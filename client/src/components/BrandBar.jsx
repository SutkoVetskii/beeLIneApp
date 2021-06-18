import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { ListGroup } from 'react-bootstrap'

export const BrandBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <ListGroup as="ul">
            <ListGroup.Item active={!device.selectedBrand.id} onClick={() => device.setSelectedBrand({})}>
                Все
            </ListGroup.Item>
            {device.brands.map(brand => (
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    as="li"
                    active={brand.id === device.selectedBrand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
})
