import React, {Component} from 'react'
import SearchBar from './SearchBar'
import Book from './Book'

class SearchBooks extends React.Component{

  
  state = {
    query : '',
  }
  

  handleInputChange =  (e) => {
    this.setState({query : e.target.value})
  }
  
  

    render(){
    const  { books, changeShelf } = this.props;
  const {query} = this.state;

    const showingBooks = (query === '')
    ? books
    : books.filter((book) => (
        book.title.toLowerCase().includes(query.toLowerCase())
      ))

        return(
          <div>
            <div className="search-books">
              <SearchBar query={this.state.query} handleInputChange = {this.handleInputChange}/>
            <div className="search-books-results">
            {showingBooks.length === books.length ? (
              <span>Showing all The books in the Library!</span>
            ):( <span>Showing {showingBooks.length} of {books.length}</span>)}
              <ol className="books-grid">
              {showingBooks.map((book)=>  (
                  <Book key= {book.id} book = {book}  changeShelf = {changeShelf}/>
              ))}
              </ol>
            </div>
          </div>   
     </div>
        )
    }
}



export default SearchBooks