import React from 'react'
import Header from './Header'
import Shelves from './Shelves'
import AddButton from './AddButton';

class Library extends React.Component {


    render() {

        /* assign the books that are assigned to a certain shelf to variables to be passed 
           to the corresponding Shelf component  */

        const { books, changeShelf } = this.props;
        return (
            <div className="list-books">
                <Header />
                <Shelves books={books} changeShelf={changeShelf} />
                <AddButton />
            </div>
        )
    }
}

export default Library