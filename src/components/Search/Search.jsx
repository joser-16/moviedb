import React, { useState, useEffect } from 'react'
import "./style.css"
import SearchItem from './SearchItem'
import Axios from 'axios'

const Search = () => {

    const [searches, setSearches] = useState([])
    
    const setDynamicSearches = e => {

        Axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=44c563a8&s=${e.target.value}`)
        .then( response => {
            if(response.data.Response) {
                setSearches(response.data.Search)
            }
        })
    }

    useEffect( () => {
        const searchInput = document.getElementById("search-input")
        const searches = document.getElementById("searches")
        
        searchInput.addEventListener("click", e => {
            e.stopPropagation();
            searches.classList.add("active")    
        })
        
        document.addEventListener("click", e => {
            if(searches.classList.contains("active")) {
                searches.classList.remove("active")
            }
        })
    }, [])

    return (
        <div className="search">
            <form action="#" method="post">
                <input
                    onChange={setDynamicSearches.bind(this)}
                    id="search-input"
                    className="search-input" 
                    type="text" 
                    placeholder="Buscar pelicula..."    
                />
            </form>

            <div className="searches" id="searches">
                <ul className="searches-list">
                    
                    {
                        searches === undefined
                        
                        ? <li className="searches-item">
                            Sin resultados
                        </li>
                        : searches.map( (search, key) => (
                            <SearchItem 
                                key={key}
                                imdbId={search.imdbID}
                                title={search.Title}
                                year={search.Year}
                            />
                        )
                        )
                    }
                </ul>
            </div>
        </div>
    )

}

export default Search