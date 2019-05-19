import React from 'react'
// import * as BooksAPI from './BooksAPI'
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

  //Change a book's shelf : loop over state.books and when the id of the passed book matches,
  // set the book shelf to the passed value

  // changeShelf = (book, newShelf) => {
  //   BooksAPI.update(book, newShelf)
  //     .then(() => {
  //       book.shelf = newShelf
  //       this.setState(() => {
  //         this.state.books.map(b => {
  //           if (b.id === book.id) b.shelf = newShelf;
  //         });
  //         return this.state.books;
  //       })
  //     })
  // }

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .then(() => {
        if (book.shelf === undefined) {
          book.shelf = newShelf
          this.setState({
            ...this.state,           
            books: this.state.books.concat(book)
          })
          console.log('concat')

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
