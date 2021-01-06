import React from 'react'
import "./Sidebaroption.css"
function Sidebaroption({active,Icon,text}) {
    return (
        <div className={`sidebaroption ${active && "sidebar_active"}`}>
            <Icon/>
            <h3>{text}</h3>
        </div>
    )
}

export default Sidebaroption
