import React from 'react'
import { connect } from 'react-redux'
import classes from './Login.module.css';
import { min_length, email_validate } from '../../auth_utility';
import { setEmail, setPassword } from '../../Redux/Reducer/Login/loginAction';
import { setCurrentUser } from '../../Redux/Reducer/User/currentUserAction'
import Input from '../../Component/Input/Input';
import Submit from '../../Component/Submit/Submit'
import Button from '../../Component/Button/Button';
import Heading from '../../Component/Heading/Heading'
import sha256 from 'crypto-js/sha256';


const Login = (props) => {

    const onChangeHandle = (e) => {
        /** 
            * onChangeHandle will trigger whenever the input value of form changes.
            * As soon as value is typed the value is stored in the redux state instantly/
        **/
        e.preventDefault();

        switch (e.target.name) {
            case 'email':
                props.setEmail(e.target.value)
                break
            case 'password':
                props.setPassword(e.target.value)
                break
            default:
                break
        }
    }

    const onSubmitHandle = (event) => {
        event.preventDefault();

        /**
         * This will get triggered when submit button of the form is clicked 
         * In this function the password(value) and email(key) entered will be checked whether
         * they are correctly mapped in the local storage
         */

        if (!min_length(props.password) || !email_validate(props.email))
            // Email and password validation case
            alert("Password must consists of atleast 8 characters and must contain at least 1 special character");
        else {
            /** 
             * In the local storage the data is stored as key value pairs
             * same as HashMap. So in local storage to store the user credentials
             * email is used as a key and their password as value.
             * So whenever user enters email(key) and password(value) 
             * his/her we retrieve the password(value) of email(key) from local storage if it exists,
             * and validate.
             */
            if (localStorage.getItem(sha256(props.email))) {
                const local_password = localStorage.getItem(sha256(props.email));
             
                if (sha256(props.password).toString() === local_password) {
                    props.setEmail('')
                    props.setPassword('')
                    props.setUser()
                    props.history.push('/dashboard')
                }
                else
                    alert("Wrong password or email")
            }
            else
                alert("Email Not Found")
        }
    }

    return (
        <div>
            <Heading title='Login' />
            <form onSubmit={onSubmitHandle} className={classes.form}>
                <div className={classes.container}>

                    <Input
                        label='Email:'
                        onChangeHandle={onChangeHandle}
                        type='email'
                        name='email'
                    />

                    <Input
                        label='Password:'
                        onChangeHandle={onChangeHandle}
                        type='password'
                        name='password'
                    />

                    <Submit
                        value='LOG IN'
                        type='submit'
                        name='submit'
                    />

                    <Button
                        name='REGISTER'
                        onClickHandle={() => props.history.push('/signup')}
                    />

                </div>
            </form >
        </div>
    )
}

const mapStateToProps = state => ({
    email: state.login.email,
    password: state.login.password
})

const mapDispatchToProps = dispatch => ({
    setEmail: value => (dispatch(setEmail(value))),
    setPassword: value => (dispatch(setPassword(value))),
    setUser: () => (dispatch(setCurrentUser()))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);