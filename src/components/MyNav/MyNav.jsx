import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MyNav = ({ search, setSearch }) => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">EpiBooks   </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <input
            type="text"
            placeholder="Cerca un libro"
            className="input input-form"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Container>
      </Navbar>
    </>
  )
}

export default MyNav

