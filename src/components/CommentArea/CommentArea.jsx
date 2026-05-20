import { useEffect, useState } from "react"
import CommentsList from "../CommentsList/CommentsList"
import AddComment from "../AddComment/AddComment"

const CommentArea = ({ asin }) => {

    const [comments, setComments] = useState([])

    const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBjYWMyNjc0MDQxZjAwMTUwYmZiYjIiLCJpYXQiOjE3NzkyMTUzOTgsImV4cCI6MTc4MDQyNDk5OH0.-CY3lJbyxakDzk6wTo0qnEvY1WOoX34OcW51HDOUYYQ"

    useEffect(() => {

        if (!asin) return

        const fetchComments = async () => {

            try {
                const response = await fetch(
                    `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
                    {
                        headers: {
                            Authorization: `Bearer ${apiKey}`
                        }
                    }
                )

                if (response.ok) {
                    const data = await response.json()
                    setComments(data)
                }

            } catch (error) {
                console.log(error)
            }
        }

        fetchComments()

    }, [asin])

    if (!asin) {
        return <h5>Seleziona un libro</h5>
    }

    return (
        <div>

            <h5>Recensioni</h5>

            <CommentsList comments={comments} />

            <AddComment asin={asin} />

        </div>
    )
}

export default CommentArea