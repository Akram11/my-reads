import React from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends React.Component {

  render() {

    const { query, handleInputChange } = this.props

    return (
      <div className="search-books-bar">
        <Link to='/'>
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input autoFocus type="text" placeholder="Search by title or author" value={query} onChange={(event) => { handleInputChange(event.target.value) }} />
        </div>
      </div>
    )
  }
}

export default SearchBar 