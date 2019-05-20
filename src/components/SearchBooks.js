import React from 'react'
import SearchBar from './SearchBar'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends React.Component {


  state = {
    query: '',
    resultBooks: []
  }


  handleInputChange = (query) => {
    this.setState(() => ({
      query: query  //.trim()
    }))
    if (query !== '') {
      this.search(query)
    } else {
      this.setState(() => ({
        resultBooks: [],
        //   query: ''
      }))
    }


  }

  search = query => {
    const libraryBooks = this.props.books
    //console.log(this.props.books)
    console.log(libraryBooks)

    BooksAPI.search(query)
      .then(books => {
        if (books.length > 1) {
          this.setState(() => ({
            ...this.state,
            resultBooks: books
          }))
        } else {
          this.setState(() => ({
            resultBooks: []
          }))
        }
      })
  }




  render() {
    const { changeShelf } = this.props;
    const { query, resultBooks } = this.state;
    console.log(query)
    console.log(resultBooks)
    const line = (this.state.resultBooks.length === 0 && query !== '') ? 'Books not found' : ''


    return (
      <div>
        <div className="search-books">
          <SearchBar query={query} handleInputChange={this.handleInputChange} />
          <div className="search-books-results">
            <h4>{line}</h4>
            <ol className="books-grid">
              {resultBooks.map((book) => (
                <Book key={book.id} book={book} changeShelf={changeShelf} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBooks