import React from 'react'
import "./style.css"

const Logo = ({span, text}) => (
    <div className="logo">
        <h1 className="text-logo fw-thin">
            <span className="vmr-text fw-bold">
                {span}
            </span>
            {text}
        </h1>
    </div>
)

export default Logo