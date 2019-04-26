import React, {Component} from 'react'
import Shelf from './Shelf'


class Shelves extends React.Component{

    render() {

          const {readBooks,wantToReadBooks, changeShelf} = this.props
          
        return (
            <div className="list-books-content">
              <Shelf content = {this.props.CurrentlyReadingBooks} title = "Currently Reading"  changeShelf = {changeShelf} />
              <Shelf content = {wantToReadBooks} title = "Want to read"  changeShelf = {changeShelf} />
              <Shelf content = {readBooks} title = "Read"  changeShelf = {changeShelf} />
          </div>
        )
    }
}

export default Shelves 