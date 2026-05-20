import { useState } from "react"

import MyNav from "./components/MyNav/MyNav.jsx"
import MyFooter from "./components/MyFooter/MyFooter.jsx"
import Welcome from "./components/Welcome/Welcome.jsx"
import AllTheBooks from "./components/AllTheBooks/AllTheBooks.jsx"
import CommentArea from "./components/CommentArea/CommentArea.jsx"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const App = () => {

  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState(null)

  return (
    <div>

      <MyNav
        search={search}
        setSearch={setSearch}
      />

      <Container>
        <Welcome />

        <Row>

          {/* SINISTRA: LIBRI */}
          <Col md={8}>
            <AllTheBooks
              search={search}
              setSelected={setSelected}
              selected={selected}
            />
          </Col>

          {/* DESTRA: COMMENTI */}
          <Col md={4}>
            <CommentArea asin={selected} />
          </Col>

        </Row>
      </Container>

      <MyFooter />

    </div>
  )
}

export default App