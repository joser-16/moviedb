import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import MovieInfo from './components/Pages/MovieInfo/MovieInfo'

const App = () => (
    <Router>
        <Header />
        <Switch>
            <Route 
                path="/movies/:id"
                component={ MovieInfo }
            />
        </Switch>
    </Router>
)

export default App
