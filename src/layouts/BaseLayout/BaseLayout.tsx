import React from "react"
import { NavbarComponent } from "components"
import { Container, Row, Col, Card } from "react-bootstrap"

interface Props {
    children: React.ReactNode
}

export const BaseLayout = ({ children }: Props) => {
    return <>
        <NavbarComponent />
        <Container style={{ minHeight: 'calc(100vh - 56px)' }}>
            <Row>
                <Col md={3} xs={12}></Col>

                <Col md={9} xs={12}>
                    <Card>
                        {children}
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
}