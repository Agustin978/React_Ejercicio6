import {Container} from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from './Components/Formulario'

function App() {

  return (
    <>
    <Container className='my-5 mainPage'>
      <h1 className='display-4 text-center'>Paleta de Colores :)</h1>
      <hr /> 
      {/*Aqui debo ingresar el formulario de los colores*/}
      <Formulario />
    </Container>
    <footer className='bg-dark text-center text-secondary py-4'>
      <p className='display-6'>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
