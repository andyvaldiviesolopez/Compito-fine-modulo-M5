import Card from 'react-bootstrap/Card'

const SingleBook = ({ book, setSelected, isSelected }) => {

    return (
        <Card
            onClick={() => setSelected(book.asin)}
            style={{
                border: isSelected ? "3px solid red" : "none",
                cursor: "pointer"
            }}
        >

            <Card.Img src={book.img} />

            <Card.Body>
                <Card.Title>{book.title}</Card.Title>

                <Card.Text>
                    <p>Category: {book.category}</p>
                    <p>Price: {book.price}€</p>
                </Card.Text>

            </Card.Body>

        </Card>
    )
}

export default SingleBook