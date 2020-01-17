import React from 'react'
import PropTypes from 'prop-types';
import "./style.css"

const MovieIcon = ({icon, info, rate}) => (
    <div className="movie-icon">
        <i className={`${icon} icon ${rate}`}></i>
        <span className="info">
            {info}
        </span>
    </div>

)

MovieIcon.propTypes = {
    icon: PropTypes.string,
    info: PropTypes.string,
    rate: PropTypes.string
}

MovieIcon.defaultProps = {
    rate: ""
}

export default MovieIcon