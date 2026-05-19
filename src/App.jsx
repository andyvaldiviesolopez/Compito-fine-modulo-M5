import MyNav from "./components/MyNav/MyNav.jsx"
import MyFooter from "./components/MyFooter/MyFooter.jsx"
import Welcome from "./components/Welcome/Welcome.jsx"
import AllTheBooks from "./components/AllTheBooks/AllTheBooks.jsx"
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <div>
      <MyNav />
      <Container>
        <Welcome />
        <AllTheBooks />
      </Container>
      <MyFooter />
    </div>
  )
}

export default App
