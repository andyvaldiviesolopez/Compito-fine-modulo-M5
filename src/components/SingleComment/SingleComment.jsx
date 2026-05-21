import React from 'react'

const SingleComment = ({ comment }) => {

    return (
        <div className="border p-2 mb-2 rounded" data-testid="single-comment">

            <p>{comment.comment}</p>

            <p>Voto: {comment.rate}</p>

        </div>
    )
}

export default SingleComment