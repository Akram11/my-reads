import React, {Component} from 'react'
import SearchBar from './SearchBar'

class SearchBooks extends React.Component{

  

    render(){
        console.log(this.props.toggle);
        return(
          <div>
            <div className="search-books">
              <SearchBar />
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>   
     </div>
        )
    }
}



export default SearchBooks