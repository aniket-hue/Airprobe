import React, { Component } from 'react'
import { Route } from 'react-router'
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Dashboard from './Pages/Dashboard/Dashboard'
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div style={{ display: "inline-block" }}>
                {!this.props.currentUser && <Route exact path='/' component={Login} />}
                {!this.props.currentUser && <Route exact path='/signup' component={Signup} />}
                {this.props.currentUser && <Route exact path='/dashboard' component={Dashboard} />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(App);