import React from 'react'
import classes from './Heading.module.css'


//Custom heading component 

const heading = (props) => {
    return (
        <div>
            <h1 className={classes.Heading}>{props.title}</h1>
        </div>
    )
}

export default heading;