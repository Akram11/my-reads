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
    update(book, newShelf)
      .then(() => {
        book.shelf = newShelf
        this.setState(() => {
          this.state.books.forEach(e => {
            if (e.id==book.id) e.shelf = newShelf;
          });

          return this.state.books;
        })
      })
  }



  render() {

    return (
      <div className="app">

        <Route exact path='/' render={() => (
          <Library books={this.state.books} changeShelf = {this.changeShelf}  />
        )} />

        <Route path='/search' render={() => (
          <SearchBooks books={this.state.books} changeShelf = {this.changeShelf} />
        )} />


      </div>
    )
  }
}

export default BooksApp
