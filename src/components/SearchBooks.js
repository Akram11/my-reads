import React from 'react'
import SearchBar from './SearchBar'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends React.Component {


  state = {
    query: '',
    resultBooks: [],
    lineShow: false
  }


  handleInputChange = (query) => {
    this.setState(() => ({
      query: query
    }))
    if (query !== '') {
      this.search(query)
    } else {
      this.setState(() => ({
        resultBooks: [],
        lineShow: false,
        query: ''
      }))
    }

  }

  search = query => {
    const libraryBooks = this.props.books
    BooksAPI.search(query)
      .then(books => {
        if (books.length > 1 && this.state.query === query) {
          this.setState(() => ({
            lineShow: false,
            resultBooks: books.map(b => {
              libraryBooks.forEach(elm =>
                (elm.id === b.id) && (b.shelf = elm.shelf)
              );
              return b
            })
          }))
        } else {
          this.setState(() => ({
            lineShow: true,
            resultBooks: []
          }))
        }
      })
  }


  render() {
    const { changeShelf } = this.props;
    const { query, resultBooks } = this.state;
    const line = (this.state.lineShow && this.state.resultBooks.length === 0 && query !== '') ? 'no results' : ''


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