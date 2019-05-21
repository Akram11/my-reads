import React from 'react'
import Shelf from './Shelf'


class Shelves extends React.Component {

  render() {

    const { CurrentlyReadingBooks, readBooks, wantToReadBooks, changeShelf } = this.props

    return (
      // create a shelf instance for each group of books passed from the props [currently reading, want to read, read]
      <div className="list-books-content">
        <Shelf content={this.props.books.filter(book => book.shelf === 'currentlyReading')} title="Currently Reading" changeShelf={changeShelf} />
        <Shelf content={wantToReadBooks} title="Want to read" changeShelf={changeShelf} />
        <Shelf content={readBooks} title="Read" changeShelf={changeShelf} />
      </div>
    )
  }
}

export default Shelves 