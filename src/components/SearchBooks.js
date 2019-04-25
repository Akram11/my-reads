import React, {Component} from 'react'
import SearchBar from './SearchBar'
import Book from './Book'

class SearchBooks extends React.Component{

  

    render(){
    const  { books } = this.props;

        return(
          <div>
            <div className="search-books">
              <SearchBar />
            <div className="search-books-results">
              <ol className="books-grid">
              {books.map((book)=>  (
                  <Book book = {book}/>
              ))}
              </ol>
            </div>
          </div>   
     </div>
        )
    }
}



export default SearchBooks