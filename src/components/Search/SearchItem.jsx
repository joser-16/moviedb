import React from 'react'
import { Link } from 'react-router-dom'

const SearchItem = ({imdbId, title, year}) => (
    <Link to={`/movies/${imdbId}`}
    >
        <li className="searches-item">
            {title} 
            <span className="searches-year">
                ({year})
            </span> 
        </li>
    </Link>
)

export default SearchItem