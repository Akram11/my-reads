import React from 'react'
import './App.css'
import Library from './components/Library'
import { Route } from 'react-router-dom'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {


  constructor() {
    super()

    this.state = {
      books: []

    }
  }


  //Get all the books from the API and update the state.books using setState

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      }
      )
  }


  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .then(() => {
        if (book.shelf === undefined) {
          book.shelf = newShelf
          this.setState({
            ...this.state,
            books: this.state.books.concat(book)
          })

        } else if (newShelf === 'none') {
          this.setState({
            ...this.state,
            books: this.state.books.filter(b => (b.id !== book.id))
          })
        }
        else {
          this.setState({
            ...this.state,
            books: this.state.books.map(b => ({
              ...b,
              shelf: b.id === book.id ? newShelf : b.shelf
            }))
          })
        }
      })
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Library books={this.state.books} changeShelf={this.changeShelf} />
        )} />

        <Route path='/search' render={() => (
          <SearchBooks changeShelf={this.changeShelf} />
        )} />


      </div>
    )
  }
}

export default BooksApp
