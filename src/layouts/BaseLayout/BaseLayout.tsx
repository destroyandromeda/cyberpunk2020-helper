import React from "react"
import { NavbarComponent } from "components"
import { Container, Row, Col, Card } from "react-bootstrap"

interface Props {
    children: React.ReactNode
}

export const BaseLayout = ({ children }: Props) => {
    return <>
        <NavbarComponent />
        <Container style={{ minHeight: 'calc(100vh - 56px)', paddingTop: "10px" }}>
            {children}
        </Container>
    </>
}