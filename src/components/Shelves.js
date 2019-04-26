import React, {Component} from 'react'
import Shelf from './Shelf'


class Shelves extends React.Component{

    render() {

          const {readBooks,wantToReadBooks, CurrentlyReadingBooks} = this.props
          
        return (
            <div className="list-books-content">
              <Shelf content = {this.props.CurrentlyReadingBooks} title = "Currently Reading" />
              <Shelf content = {wantToReadBooks} title = "Want to read" />
              <Shelf content = {readBooks} title = "Read" />
          </div>
        )
    }
}

export default Shelves 