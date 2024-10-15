import React, { useState } from 'react'
import './style.css'

function Accordion({ title }) {
    const [collapse, setCollapse] = useState(true)

    return (
        <div className='accordion'>
            <div className="main-block">
                <div>{title}</div>
                <div className="control">+</div>
            </div>

        </div>
    )
}

export default Accordion