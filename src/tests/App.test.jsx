import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import App from '../App'
import { BrowserRouter } from 'react-router-dom'
import HorrorBooks from '../books/horror.json'

beforeEach(() => {

    global.fetch = vi.fn(() =>
        Promise.resolve({
            ok: true,
            json: () =>
                Promise.resolve([
                    {
                        _id: '1',
                        comment: 'Bellissimo libro',
                        rate: 5
                    }
                ])
        })
    )
})

afterEach(() => {
    vi.clearAllMocks()
})

const renderApp = () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

describe('EpiBooks tests', () => {

    test('1) Welcome viene montato correttamente', () => {

        renderApp()

        const welcomeElement = screen.getByText(/Benvenuto da Epibooks/i)

        expect(welcomeElement).toBeInTheDocument()
    })

    test('2) vengono renderizzate tante cards quanti sono i libri', () => {

        renderApp()

        const cards = screen.getAllByTestId('book-card')

        expect(cards.length).toBe(HorrorBooks.length)
    })

    test('3) CommentArea viene renderizzata correttamente', () => {

        renderApp()

        const commentAreaText = screen.getByText(/Seleziona un libro/i)

        expect(commentAreaText).toBeInTheDocument()
    })

    test('4) il filtraggio funziona correttamente', () => {

        renderApp()

        const input = screen.getByPlaceholderText(/Cerca un libro/i)

        const firstBookTitle = HorrorBooks[0].title.toLowerCase()

        fireEvent.change(input, {
            target: { value: firstBookTitle }
        })

        const filteredBooks = HorrorBooks.filter((book) =>
            book.title.toLowerCase().includes(firstBookTitle)
        )

        const cards = screen.getAllByTestId('book-card')

        expect(cards.length).toBe(filteredBooks.length)
    })


    test('5) cliccando un libro il bordo cambia colore', () => {

        renderApp()

        const cards = screen.getAllByTestId('book-card')

        fireEvent.click(cards[0])

        expect(cards[0]).toHaveClass('selected-book')
    })

    test('6) cliccando un secondo libro il primo torna normale', () => {

        renderApp()

        const cards = screen.getAllByTestId('book-card')

        fireEvent.click(cards[0])

        fireEvent.click(cards[1])

        expect(cards[0]).not.toHaveClass('selected-book')

        expect(cards[1]).toHaveClass('selected-book')
    })

    test('7) all avvio non ci sono commenti nel DOM', () => {

        renderApp()

        const comments = screen.queryAllByTestId('single-comment')

        expect(comments.length).toBe(0)
    })

    test('8) cliccando un libro vengono caricati i commenti', async () => {

        renderApp()

        const cards = screen.getAllByTestId('book-card')

        fireEvent.click(cards[0])

        const comment = await screen.findByText(/Bellissimo libro/i)

        expect(comment).toBeInTheDocument()
    })
})
