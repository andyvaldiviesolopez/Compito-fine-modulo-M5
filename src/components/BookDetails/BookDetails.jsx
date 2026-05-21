import { useParams } from "react-router-dom"
import HorrorBooks from "../../books/horror.json"
import CommentArea from "../CommentArea/CommentArea"

const BookDetails = () => {

    const { asin } = useParams()

    const book = HorrorBooks.find(b => b.asin === asin)

    if (!book) {
        return <h3>Libro non trovato</h3>
    }

    return (
        <div>

            <h2>{book.title}</h2>
            <img src={book.img} alt={book.title} />
            <p>{book.category}</p>
            <p>{book.price}€</p>

            <hr />

            <CommentArea asin={asin} />

        </div>
    )
}

export default BookDetails