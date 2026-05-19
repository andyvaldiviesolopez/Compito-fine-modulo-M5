import React from 'react'
import HorrorBooks from "../../books/horror.json"
import SingleBook from "../SingleBook/SingleBook.jsx"

const AllTheBooks = () => {

    return (
        <div>
            <div className="row">
                {HorrorBooks.map((book) => (
                    <div
                        key={book.asin}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5"
                    >
                        <SingleBook book={book} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllTheBooks
