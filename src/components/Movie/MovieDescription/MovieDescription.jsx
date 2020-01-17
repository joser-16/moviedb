import React from 'react'
import "./style.css"

const MovieDescription = ({title, description}) => (
    <div className="movie-general">
        <h4 className="general-title">
            {title}
        </h4>

        <p className="general">
            {description}
        </p>
    </div>
)

export default MovieDescription