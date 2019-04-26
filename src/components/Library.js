import React, {Component} from 'react'
import Header from './Header'
import Shelves from './Shelves'
import AddButton from './AddButton';

class Library extends React.Component{
  
    
    render(){

        const  { books } = this.props;
        const read = books.filter((book)=> book.shelf ==='read')
        const CurrentlyReading = books.filter((book)=> book.shelf ==='currentlyReading')
        const WantToRead = books.filter((book)=> book.shelf ==='wantToRead')


        return(
            <div className="list-books">
            <Header />
            {/* header */}
            <Shelves readBooks = {read} wantToReadBooks = {WantToRead} CurrentlyReadingBooks = {CurrentlyReading} />    
            <AddButton/>
          </div>
        )
    }
}

export default Library