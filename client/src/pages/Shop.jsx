import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BrandBar, ShopDeviceList } from '../components'

export const Shop = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <BrandBar />
                </Col>
                <Col md={9}>
                    <ShopDeviceList />
                </Col>
            </Row>
        </Container>
    )
}
