import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState("")
  const [rate, setRate] = useState("1")
  const [show, setShow] = useState(false)

  const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBjYWMyNjc0MDQxZjAwMTUwYmZiYjIiLCJpYXQiOjE3NzkyMTUzOTgsImV4cCI6MTc4MDQyNDk5OH0.-CY3lJbyxakDzk6wTo0qnEvY1WOoX34OcW51HDOUYYQ"

  const handleSubmit = async () => {
    const newComment = {
      comment,
      rate,
      elementId: asin
    }

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(newComment),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`
          }
        }
      )

      if (response.ok) {
        setShow(true) // 👈 apri modal

        setComment("")
        setRate("1")
      } else {
        throw new Error("Errore invio commento")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>

      <textarea
        placeholder="Scrivi recensione"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <select value={rate} onChange={(e) => setRate(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <Button className="btn btn-primary" onClick={handleSubmit}>Invia</Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Recensione inviata</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Il tuo commento è stato inviato con successo!
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={() => setShow(false)}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default AddComment