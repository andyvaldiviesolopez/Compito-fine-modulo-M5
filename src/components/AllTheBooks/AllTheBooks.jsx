import React, { useState } from 'react'
import HorrorBooks from "../../books/horror.json"
import SingleBook from "../SingleBook/SingleBook.jsx"
import Alert from 'react-bootstrap/Alert';

const AllTheBooks = () => {
    const [search, setSearch] = useState("")
    const filteredBooks = HorrorBooks.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div>
            <input
                type="text"
                placeholder="Cerca un libro"
                className="input input-text mb-5"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {filteredBooks.length === 0 && (
                <Alert variant="warning">
                    Nessun libro trovato
                </Alert>
            )}

            <div className="row">
                {filteredBooks.map((book) => (
                    <div
                        key={book.asin}
                        className="col-12 col-sm-6 col-md-4 col-lg-3"
                    >
                        <SingleBook book={book} />
                    </div>
                ))}
            </div>
        </div>
    )
}

/*<Alert variant="primary" className="mt-5">
                <Alert.Heading>Hey, this is an Alert!</Alert.Heading>
            </Alert> */

export default AllTheBooks
