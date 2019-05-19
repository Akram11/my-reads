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
      query: query.trim()
    }))
    if (query !== '') {
      this.search(query)
    }
  }

  search = query => {

    BooksAPI.search(query)
      .then(books => {
        if (books.length > 1) {
          this.setState(() => ({
            resultBooks: books
          }))
        } else {
          this.setState(() => ({
            resultBooks: []
          }))
        }
      })
    query === "" &&
      this.setState(currentState => ({
        resultBooks: []
      }))
  }




  render() {
    const { changeShelf } = this.props;
    const { query, resultBooks } = this.state;

    return (
      <div>
        <div className="search-books">
          <SearchBar query={query} handleInputChange={this.handleInputChange} />
          <div className="search-books-results">
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