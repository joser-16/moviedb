import React from 'react'
import "./style.css"

const MoviePoster = ({image, title}) => (
    <div className="movie-poster">
        <img 
            src={image} 
            alt={title}
        />
    </div>
)

export default MoviePoster