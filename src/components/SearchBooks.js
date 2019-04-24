import React, {Component} from 'react'
import SearchBar from './SearchBar'

class SearchBooks extends React.Component{

  

    render(){
    const  { books } = this.props;

        return(
          <div>
            <div className="search-books">
              <SearchBar />
            <div className="search-books-results">
              <ol className="books-grid"></ol>
              {books.map((book)=>  (<li>{book.title}</li>))}
            </div>
          </div>   
     </div>
        )
    }
}



export default SearchBooks