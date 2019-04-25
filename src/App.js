import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './components/Library'
import {Route} from 'react-router-dom'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
   books: []
   
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

  render() {     
    return (
      <div className="app">

      <Route exact path =  '/' render = {() => (
        <Library />
      )} />

      <Route path = '/search' render = {() => (
              <SearchBooks books={this.state.books} />
            )} />
      

      </div>
    )
  }
}

export default BooksApp
