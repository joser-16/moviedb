import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import "./style.css"
import MoviePoster from '../../Movie/MoviePoster/MoviePoster'
import MovieTitle from '../../Movie/MovieTitle/MovieTitle'
import MovieIcon from '../../Movie/MovieIcon/MovieIcon'
import MovieDescription from '../../Movie/MovieDescription/MovieDescription'

const MovieInfo = ({match}) => {

    const [movie, setMovie] = useState( {} )

    useEffect( () => {
        const id = match.params.id

        Axios.get(`http://www.omdbapi.com/?apikey=44c563a8&i=${id}&plot=full`)
        .then( response => setMovie( response.data ) )
        
    }, [match.params.id]) 


    return (
        <div className="movie-container">
            <div className="container">
                <div className="movie">

                    <MoviePoster 
                        image={movie.Poster}
                        title={movie.Title}
                    />

                    <div className="movie-description">
                        <MovieTitle 
                            title={movie.Title}
                        />

                        <div className="movie-data-icons">
                            <MovieIcon 
                                icon="fas fa-star"
                                info={movie.imdbRating}
                                rate="icon-rate"
                            />
                            <MovieIcon 
                                icon="fas fa-calendar-alt"
                                info={movie.Year}
                            />
                            <MovieIcon 
                                icon="fas fa-clock"
                                info={movie.Runtime}
                            />
                        </div>

                        <MovieDescription 
                            title="Resumen"
                            description={movie.Plot}
                        />

                        <MovieDescription 
                            title="Equipo"
                            description={movie.Writer}
                        />

                        <MovieDescription 
                            title="Reparto"
                            description={movie.Actors}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo