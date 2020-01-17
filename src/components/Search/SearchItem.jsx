import React from 'react'

const SearchItem = ({imdbId, title, year}) => (
    <a href={`http://www.omdbapi.com/?apikey=44c563a8&i=${imdbId}&plot=full`}
        target="_blank"
    >
        <li className="searches-item">
            {title} 
            <span className="searches-year">
                ({year})
            </span> 
        </li>
    </a>
)

export default SearchItem