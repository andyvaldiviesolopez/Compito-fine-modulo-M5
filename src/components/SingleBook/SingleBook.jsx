import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom"

const SingleBook = ({ book }) => {

    const navigate = useNavigate()

    return (
        <Card>

            <Card.Img src={book.img} />

            <Card.Body>

                <Card.Title>{book.title}</Card.Title>

                <Card.Text>
                    Category: {book.category}
                    <br />
                    Price: {book.price}€
                </Card.Text>

                <Button
                    variant="primary"
                    onClick={() => navigate(`/books/${book.asin}`)}
                >
                    Dettagli
                </Button>

            </Card.Body>

        </Card>
    )
}

export default SingleBook