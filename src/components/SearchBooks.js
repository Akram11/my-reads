import React from 'react'
import SearchBar from './SearchBar'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends React.Component {


  state = {
    query: '',
    resultBooks : []
  }


  handleInputChange = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
    if (query !== '') {
      this.search(query)
    }
  }

  // I'm using the method represented in the Contacts example of the course to search books by title
  // I think it's better than using pre-defined seach terms - hopefully it's accepted 

  search = query => {
    BooksAPI.search(query)
      .then((books) => {
        this.setState(() => ({
          resultBooks: books
        }))
      }
      )
  }




  render() {
    const { books, changeShelf } = this.props;
    const { query, resultBooks } = this.state;
    

    //console.log(query)
    //this.search(query)
    //console.log(this.state.resultBooks)


    // if there's not query entered by the user show all the books,
    // otherwise filter only the books whose title [or part of it] match the query 



    // (query === '')
    //   ? books
    //   : books.filter((book) => (
    //     book.title.toLowerCase().includes(query.toLowerCase())
    //   ))

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