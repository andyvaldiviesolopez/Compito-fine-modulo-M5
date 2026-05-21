import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom"

const SingleBook = ({
    book,
    selectedBook,
    setSelectedBook
}) => {

    const navigate = useNavigate()
    const isSelected = String(selectedBook) === String(book.asin)
    console.log('selected:', selectedBook, 'book:', book.asin)
    return (
        <Card
            data-testid="book-card"
            onClick={() => setSelectedBook(book.asin)}
            className={isSelected ? 'selected-book' : ''}
        >

            <Card.Img
                src={book.img}
                alt={book.title}
            />

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