import React from 'react'
import { Link } from 'react-router-dom'


const AddButton = () => {
    return (
        <div className="open-search">
        <Link to = '/search'>
        <button>to search</button>
        </Link>
        </div>

    )
}

export default AddButton