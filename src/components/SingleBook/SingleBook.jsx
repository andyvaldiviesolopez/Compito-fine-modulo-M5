import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CommentArea from '../CommentArea/CommentArea'

const SingleBook = ({ book }) => {

    const [selected, setSelected] = useState(false)

    return (
        <>
            <Card
                onClick={() => setSelected(!selected)}
                style={{
                    border: selected ? "3px solid red" : "none",
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

                    <Button variant="primary">
                        Add to cart
                    </Button>
                </Card.Body>
            </Card>

            {selected && (
                <div className="mt-3">
                    <CommentArea asin={book.asin} />
                </div>
            )}
        </>
    )
}

export default SingleBook