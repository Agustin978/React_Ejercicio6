import { Card } from "react-bootstrap";

const CardsColores = ({color, codigoColor}) => {
    return (
        <div>
            <Card>
                <Card.Title className="p-2 display-4 text-center">{color}</Card.Title>
                <Card.Body className="text-center">
                    <Card.Img style={{backgroundColor: codigoColor, width: '150px', height:'150px'}}></Card.Img>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardsColores;