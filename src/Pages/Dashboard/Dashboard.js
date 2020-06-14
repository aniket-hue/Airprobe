import React from 'react'
import { setCurrentUser } from '../../Redux/Reducer/User/currentUserAction'
import { connect } from 'react-redux'
import Button from '../../Component/Button/Button'
import classes from './Dashboard.module.css'

const Dashboard = (props) => {
    //Logout Handler
    const logoutHandle = () => {
        /**
         * To set current user to be false an action is dispatched.
         * Current user = false actually means that there is no user currently
         * logged in  
        **/

        props.setUser();

        /**
         * To Redirect to login page after logout 
         * We can also use 'Redirect' from react-router package
         * by importing, 
         * import {Redirect} from react-router
         */

        props.history.push('/');

    }
    return (
        <div className={classes.container}>
            <h1>Hey! Look you're logged in</h1>
            <Button
                name='LOGOUT'
                onClickHandle={logoutHandle} />
        </div>
    )
}


// Dispatcher function to set the state of current user in store.

const mapDispatchToProps = (dispatch) => ({
    setUser: () => (dispatch(setCurrentUser()))
})



export default connect(null, mapDispatchToProps)(Dashboard);