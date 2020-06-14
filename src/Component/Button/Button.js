import React from 'react'
import classes from './Button.module.css';

//Custom button component 

const Button = (props) => {
    return (
        <div>
            <button className={classes.button} onClick={props.onClickHandle}>{props.name}</button>
        </div>
    )
}

export default Button;