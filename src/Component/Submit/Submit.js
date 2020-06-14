import React from 'react'
import classes from './Submit.module.css'
const Submit = (props) => (
    <div>
        <input className={classes.button} type={props.type} name={props.name} value= {props.value} />
    </div>
)
export default Submit;