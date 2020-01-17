import React from 'react'
import "./style.css"
import Logo from '../Logo/Logo'
import Search from '../Search/Search'

const Header = () => (
    <header className="header">
        <div className="header-container">
            <Logo 
                span="vmr"
                text="Movies"
            />
            <Search
            />
        </div>
    </header>
)

export default Header