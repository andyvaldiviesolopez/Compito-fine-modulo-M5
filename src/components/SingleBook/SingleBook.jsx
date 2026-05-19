import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const SingleBook = ({ book }) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={book.img}/>
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        <p>Category: {book.category}</p>
                        <p>Price: {book.price}€</p>
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default SingleBook
