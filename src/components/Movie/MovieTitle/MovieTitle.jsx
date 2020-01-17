import React from 'react'
import "./style.css"

const MovieTitle = ({title}) => (
    <h2 className="movie-title fw-light">
        {title}
    </h2>
)

export default MovieTitle