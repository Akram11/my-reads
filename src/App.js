import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './components/Library'
import {Route} from 'react-router-dom'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
   Books: []
   
  }


  // componentDidMount(){
  //   getAll().then(()=>{
  //     setState( {books:  })
  //   })
  // }
  
 

  render() {  
    return (
      <div className="app">

      <Route exact path =  '/' render = {() => (
        <Library />
      )} />

      <Route path = '/search' render = {() => (
              <SearchBooks />
            )} />
      

      </div>
    )
  }
}

export default BooksApp
