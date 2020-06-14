import React from 'react'
import { setCurrentUser } from '../../Redux/Reducer/User/currentUserAction'
import { connect } from 'react-redux'
import Button from '../../Component/Button/Button'
import classes from './Dashboard.module.css'

const Dashboard = (props) => {
    console.log(props)
    const logoutHandle = () => {
        props.setUser();
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



const mapDispatchToProps = (dispatch) => ({
    setUser: () => (dispatch(setCurrentUser()))
})
export default connect(null, mapDispatchToProps)(Dashboard);