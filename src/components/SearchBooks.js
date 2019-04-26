import React, {Component} from 'react'
import SearchBar from './SearchBar'
import Book from './Book'

class SearchBooks extends React.Component{

  

    render(){
    const  { books, changeShelf } = this.props;

        return(
          <div>
            <div className="search-books">
              <SearchBar />
            <div className="search-books-results">
              <ol className="books-grid">
              {books.map((book)=>  (
                  <Book book = {book}  changeShelf = {changeShelf}/>
              ))}
              </ol>
            </div>
          </div>   
     </div>
        )
    }
}



export default SearchBooks