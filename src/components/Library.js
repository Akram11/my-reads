import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Shelves from './Shelves'
import AddButton from './AddButton';

class Library extends React.Component{

    onToggle = this.props.toggle;
    render(){
        return(
            <div className="list-books">
            <Header />
            {/* header */}
            <Shelves />    
            <AddButton/>
          </div>
        )
    }
}

export default Library