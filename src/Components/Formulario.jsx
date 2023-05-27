import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import ContenedorColores from "./contenedorColores";

const Formulario = () => {
    const [color, setColor] = useState('');
    const [nombreColor, setNombreColor] = useState('');
    const [coloresGuardados, setColoresGuardados] = useState(
        JSON.parse(localStorage.getItem('colores')) || []);
    
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

    /*
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
    }*/


    const handleColorName = (e) =>
    {
        const valorColor = e.target.value.toLowerCase();
        setNombreColor(valorColor);
        const codigoColor = colores[valorColor];
        if(codigoColor)
        {
            setColor(codigoColor);
        }else
        {
            setColor('');
        }
    }

    useEffect(() => {
        localStorage.setItem('colores', JSON.stringify(coloresGuardados));
    }, [coloresGuardados]);

    function validaColor(colorIngresado)
    {
        //const colorIngresado = e.target.value.toLowerCase();
        if(colores[colorIngresado])
        {
            return true;
        }else
        {
            alert('El color que se intenta ingresar no esta almacendao.\n Intente nuevamente :(');
            return false;
        }
    }

    /*
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        const colorValue = nombreColor.toLowerCase();
        const codigoColor = colores[colorValue];
        if(codigoColor)
        {
            setColor(codigoColor);
        }else
        {
            setColor('');
        }
    }*/

    return (
        <div>
            <Card>
                <Card.Title className="p-4 display-6">Administrar Colores</Card.Title>
                <Card.Body className="d-flex">
                    <section>
                        <Card.Img style={{backgroundColor: color, width: '150px', height:'150px'}}></Card.Img>
                    </section>
                    <section className="mx-auto w-100 p-4">
                        <Form onSubmit={(e) => {
                            e.preventDefault();
                            
                            if(validaColor(nombreColor))
                            {
                                setColoresGuardados([...coloresGuardados, nombreColor]);
                                setNombreColor[''];
                            }
                        }}>
                            <Form.Group controlId="color" className="d-flex justify-content-between">
                                <Form.Control type="text" placeholder="Ingrese el nombre del color"
                                value={nombreColor}
                                onChange={handleColorName} />
                                <Button type="submit" variant="primary" className="mt-2 mx-3">Guardar</Button>
                            </Form.Group>
                        </Form>
                    </section>
                </Card.Body>
            </Card>
            <ContenedorColores arregloColores={colores} coloresGuardados={coloresGuardados}/>
        </div>
    );
};

export default Formulario;