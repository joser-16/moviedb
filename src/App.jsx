import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'

const App = () => (
    <Router>
        <Header />
        <Switch>
            <Route 
                path="/movies/:id"
            />
        </Switch>
    </Router>
)

export default App
