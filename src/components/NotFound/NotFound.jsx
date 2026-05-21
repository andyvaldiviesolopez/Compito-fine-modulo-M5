import { useNavigate } from "react-router-dom"

const NotFound = () => {

  const navigate = useNavigate()

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>404</h1>
      <h2>Pagina non trovata</h2>

      <button className="btn btn-info mb-5" onClick={() => navigate("/")}>
        Torna alla Home
      </button>
    </div>
  )
}

export default NotFound