import React, {Component} from 'react'
import Book from './Book'

class Shelf extends React.Component {

    render(){

        const {content , title} = this.props
        console.log(content)
        return(

            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                 <ol className="books-grid">
                    {content.map((book)=>  (
                    <Book book = {book}/>
              ))}
                </ol>
              </div>
          </div>

        )
    }
}


export default Shelf