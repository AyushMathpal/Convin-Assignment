import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const style={color:"white",
    textDecoration:"none",
    fontSize:"1.3rem",
    marginRight:"1.2rem",
    
}
  return (
    <Navbar expand="lg" style={{background:"transparent",boxShadow:"0 2px 20px 4px rgba(0,0,0,.2)",height:"4rem",}}>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"  >
            <NavLink to="/"style={style}>Home</NavLink>
            <NavLink to="/history"style={style}>History</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;