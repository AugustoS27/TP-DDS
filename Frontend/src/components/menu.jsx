import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
    <div className='mt-5'>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand  href="#home">Area</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/categorias">Categoria</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Clientes</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Empleados</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Localidad</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Sucursales</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Tipo Clientes</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

export default Menu;