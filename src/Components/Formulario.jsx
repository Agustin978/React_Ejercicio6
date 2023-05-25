import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
const Formulario = () => {
    const [color, setColor] = useState('');
    const [nombeColor, setNombreColor] = useState('');
    
    const colores = {
        red: '#FF0000',
        green: '#00FF00',
        blue: '#0000FF',
        yellow: '#FFFF00',
        magenta: '#FF00FF',
        cyan: '#00FFFF',
        orange: '#FFA500',
        purple: '#800080',
        pink: '#FFC0CB',
        brown: '#800000'
    }

    function cambiaColor()
    {
        setColor(generaColor());
    }

    function generaColor()
    {
        const letras = '0123456789ABCDEF';
        let colorAleatorio = '#';
        for(let i = 0; i < 6; i++)
        {
            colorAleatorio += letras[Math.floor(Math.random()*16)];
        }
        return colorAleatorio;
    }

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        const colorValue = nombeColor.toLowerCase();
        const codigoColor = colores[colorValue];
        if(codigoColor)
        {
            setColor(codigoColor);
        }else
        {
            setColor('');
        }
    }

    return (
        <div>
            <Card>
                <Card.Title className="p-4 display-6">Administrar Colores</Card.Title>
                <Card.Body className="d-flex">
                    <section>
                        <Card.Img style={{backgroundColor: color, width: '150px', height:'150px'}}></Card.Img>
                    </section>
                    <section className="mx-auto w-100 p-4">
                        <Form>
                            <Form.Group controlId="color" className="d-flex justify-content-between">
                                <Form.Control type="text" placeholder="Ingrese el nombre del color"
                                onChange={(e)=>setColor(e.target.value)} />
                                <Button type="submit" variant="primary" className="mt-2 mx-3">Guardar</Button>
                            </Form.Group>
                        </Form>
                    </section>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Formulario;