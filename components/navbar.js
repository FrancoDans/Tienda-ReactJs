import { blue } from "@mui/material/colors";


function App() {


return(
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Tienda</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Espumantes</Nav.Link>
        <Nav.Link href="#link">Vinos</Nav.Link>
        <NavDropdown title="Gaseosas" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Coca-Cola</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Sprite</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Otros</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

)
}

export default Navbar;