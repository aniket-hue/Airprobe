import React from 'react'
import classes from './Input.module.css'
const Input = (props) => {
    return (
        <div className={classes.wrapper}>
            <label className={classes.label}>{props.label}</label>
            <input onChange={props.onChangeHandle} className={classes.input} type={props.type} name={props.name} />
        </div>
    )
}
export default Input