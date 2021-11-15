import React from 'react'
import './title.scss'
const Title = (props) => {
    return (
        <div>
            <span className="title">
            {props.title}
            </span>
        </div>
    )
}

export default Title
