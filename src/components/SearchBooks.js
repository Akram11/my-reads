import React from 'react'
import SearchBar from './SearchBar'
import Book from './Book'

class SearchBooks extends React.Component{

  
  state = {
    query : '',
  }
  

  handleInputChange =  (e) => {
    this.setState({query : e.target.value})
  }

  // I'm using the method represented in the Contacts example of the course to search books by title
  // I think it's better than using pre-defined seach terms - hopefully it's accepted 
  

    render(){
    const  { books, changeShelf } = this.props;
    const  {query} = this.state;


  // if there's not query entered by the user show all the books,
  // otherwise filter only the books whose title [or part of it] match the query 

    const showingBooks = (query === '')
    ? books
    : books.filter((book) => (
        book.title.toLowerCase().includes(query.toLowerCase())
      ))

        return(
          <div>
            <div className="search-books">
              <SearchBar query={query} handleInputChange = {this.handleInputChange}/>
            <div className="search-books-results">
            {showingBooks.length === books.length ? (
              <span>Showing all The books in the Library</span>
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