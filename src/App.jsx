import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import MyNav from "./components/MyNav/MyNav.jsx"
import MyFooter from "./components/MyFooter/MyFooter.jsx"
import Welcome from "./components/Welcome/Welcome.jsx"
import AllTheBooks from "./components/AllTheBooks/AllTheBooks.jsx"
import BookDetails from "./components/BookDetails/BookDetails.jsx"
import NotFound from "./components/NotFound/NotFound.jsx"

import Container from "react-bootstrap/Container"

const App = () => {
  const [search, setSearch] = useState("")

  return (
    <div>

      <MyNav search={search} setSearch={setSearch} />

      <Container>

        <Routes>

          <Route
            path="/"
            element={
              <>
                <Welcome />
                <AllTheBooks search={search} />
              </>
            }
          />

          <Route path="/books/:asin" element={<BookDetails />} />

          <Route path="*" element={<NotFound />} />

        </Routes>

      </Container>

      <MyFooter />

    </div>
  )
}

export default App

/**/