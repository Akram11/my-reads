import React from 'react'
import Book from './Book'

class Shelf extends React.Component {

    render(){

        const {content , title, changeShelf} = this.props
        return(

            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                 <ol className="books-grid">
                    {content.map((book)=>  (
                    <Book key = {book.id} book = {book}  changeShelf = {changeShelf}/>
              ))}
                </ol>
              </div>
          </div>

        )
    }
}


export default Shelf