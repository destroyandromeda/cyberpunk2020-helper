import { ProgramClassNames, ProgramClassOptions } from "data"
import { useFilter } from "hooks";
import { useState } from "react";
import { Card, Row, Col, Form, Button, Offcanvas, Accordion } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Programs = () => {

    const {
        types, selectTypes,
        power, selectPower,
        memoryUnits, selectMemoryUnits,
        prog
    } = useFilter()

    const [show, setShow] = useState(false);


    return <Row>
        <Col md={3} xs={12}>
            <div className="d-grid">
                <Button variant="primary" className="d-lg-none" onClick={() => setShow(true)}>
                    Фильтр
                </Button>
            </div>
            <Offcanvas show={show} onHide={() => setShow(false)} responsive="lg">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Фильтр программ</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Тип</Accordion.Header>
                                <Accordion.Body style={{ padding: 0 }}>
                                    <Form.Select multiple value={types} onChange={selectTypes} style={{ borderRadius: 0 }}>
                                        {ProgramClassOptions.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                                    </Form.Select>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Сила</Accordion.Header>
                                <Accordion.Body style={{ padding: 0 }}>
                                    <Form.Select multiple value={power} onChange={selectPower} style={{ borderRadius: 0 }}>
                                        {Array.from(Array(7).keys()).map((opt) => <option key={opt} value={opt + 2}>{opt + 2}</option>)}
                                    </Form.Select>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Единицы Памяти</Accordion.Header>
                                <Accordion.Body style={{ padding: 0 }}>
                                    <Form.Select multiple value={memoryUnits} onChange={selectMemoryUnits} style={{ borderRadius: 0 }}>
                                        {Array.from(Array(6).keys()).map((opt) => <option key={opt} value={opt + 1}>{opt + 1}</option>)}
                                    </Form.Select>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div style={{ padding: "5px" }}>
                            <small>
                                <p><strong> Программы </strong> — рабочие лошадки нетраннера.</p>
                                <p>Они сражаются, защищают, взламывают и прокрадываются в разные места.</p>
                                <p>Если хакер — это волшебник, то программы — это заклинания, возникающие на кончиках его виртуальных пальцев.</p>
                            </small>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </Col>
        <Col md={9} xs={12}>
            <Row style={{ maxHeight: "calc(100vh - 70px)", overflowY: 'auto' }}>
                {prog.map((program) =>
                    <Col md={4} key={program.id} style={{ paddingTop: "5px" }}>
                        <Card style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title>
                                    <Card.Link as={Link} to={`/programs/${program.id}`}>
                                        {program.name}
                                    </Card.Link>
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Сила: {program.power}
                                    <br />
                                    Единицы Памяти: {program.memoryUnits}
                                    <br />
                                    Цена:  {program.price} евробаксов
                                    <br />
                                    Тип: {ProgramClassNames[program.class]}
                                </Card.Subtitle>
                                <Card.Text>
                                    {program.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </Col>
    </Row >
}