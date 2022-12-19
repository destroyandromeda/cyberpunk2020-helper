import { Link, useParams } from "react-router-dom"
import { programs } from "data"
import { Card } from "react-bootstrap"

export const Program = () => {
    const { id } = useParams()
    const program = programs.filter((prog => prog.id === Number(id)))[0]
    return <Card key={program.id} style={{ width: 'auto' }}>
        <Card.Body>
            <Card.Title>{program.name} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
                Сила: {program.power} /
                Единицы Памяти: {program.memoryUnits} /
                Цена:  {program.price} евробаксов
            </Card.Subtitle>
            <Card.Text>
                <strong>Описание:</strong>
                <br />
                {program.description}
            </Card.Text>
            <Card.Text>
                <strong>ИКОНКА</strong> - {program.icon}
            </Card.Text>
        </Card.Body>
    </Card>
}