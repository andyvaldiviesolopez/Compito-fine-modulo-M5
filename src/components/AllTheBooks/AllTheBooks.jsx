import { useState } from "react"
import HorrorBooks from "../../books/horror.json"
import SingleBook from "../SingleBook/SingleBook.jsx"
import CommentArea from "../CommentArea/CommentArea.jsx"
import Alert from 'react-bootstrap/Alert'

const AllTheBooks = ({ search }) => {

    const [selectedBook, setSelectedBook] = useState(null)

    const filteredBooks = HorrorBooks.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>

            {filteredBooks.length === 0 && (
                <Alert variant="warning">
                    Nessun libro trovato
                </Alert>
            )}

            <div className="row">

                {filteredBooks.map((book) => (
                    <div
                        key={book.asin}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
                    >
                        <SingleBook
                            book={book}
                            selectedBook={selectedBook}
                            setSelectedBook={setSelectedBook}
                        />
                    </div>
                ))}

            </div>

            <CommentArea asin={selectedBook} />

        </div>
    )
}

export default AllTheBooks