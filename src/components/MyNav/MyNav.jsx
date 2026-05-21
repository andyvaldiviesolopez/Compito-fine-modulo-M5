import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from "react-router-dom"

const MyNav = ({ search, setSearch }) => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>

        {/* LOGO */}
        <Navbar.Brand as={Link} to="/">
          EpiBooks
        </Navbar.Brand>

        {/* NAV LINKS */}
        <Nav className="me-auto">

          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>

          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>

          <Nav.Link as={NavLink} to="/browse">
            Browse
          </Nav.Link>

        </Nav>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Cerca un libro"
          className="input input-form"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </Container>
    </Navbar>
  )
}

export default MyNav