import React from 'react'
import Input from '../../Component/Input/Input';
import Submit from '../../Component/Submit/Submit';
import classes from './Signup.module.css';
import { setSEmail, setSPassword, setConfirmPassword, setName } from '../../Redux/Reducer/Signup/signupAction';
import { connect } from 'react-redux';
import { min_length, email_validate } from '../../auth_utility';
import Heading from '../../Component/Heading/Heading'

const Signup = (props) => {
    console.log(props)

    const onSignupChangeHandle = (e) => {
        switch (e.target.name) {
            case 'name':
                props.setName(e.target.value)
                break
            case 'semail':
                props.setEmail(e.target.value)
                break
            case 'spassword':
                props.setPassword(e.target.value)
                break
            case 'confirm_password':
                props.setConfirmPassword(e.target.value)
                break
            default:
                break
        }
    }

    const onSubmitHandle = (event) => {
        console.log(props)
        event.preventDefault();
        if (!email_validate(props.email) ||
            !min_length(props.password) ||
            !(props.password === props.confirmPassword))
            alert("Password must consists of atleast 8 characters and must contain at least 1 numeric");
        else if (localStorage.getItem(props.email))
            alert("Email Exists");
        else {
            localStorage.setItem(props.email, props.password)
            alert('You may now Log-In')
            props.setEmail('')
            props.setConfirmPassword('')
            props.setPassword('')
            props.setName('')
            props.history.push('/')
        }
    }

    return (
        <div className={classes.container}>
            <Heading title='Signup' />
            <form className={classes.form} onSubmit={onSubmitHandle}>
                <Input
                    label='Name:'
                    name='name'
                    type='text'
                    onChangeHandle={onSignupChangeHandle}
                />
                <Input
                    label='Email:'
                    name='semail'
                    type='email'
                    onChangeHandle={onSignupChangeHandle}
                />
                <Input
                    label='Password:'
                    name='spassword'
                    type='password'
                    onChangeHandle={onSignupChangeHandle}
                />
                <Input
                    label='Confirm Password:'
                    name='confirm_password'
                    type='password'
                    onChangeHandle={onSignupChangeHandle}
                />
                <Submit
                    value='SIGN UP'
                    type='submit'
                    name='submit' />
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setEmail: value => (dispatch(setSEmail(value))),
    setName: value => (dispatch(setName(value))),
    setPassword: value => (dispatch(setSPassword(value))),
    setConfirmPassword: value => (dispatch(setConfirmPassword(value))),
}
)
const mapStateToProps = (state) => ({
    name: state.signup.name,
    email: state.signup.signUpemail,
    password: state.signup.signUppassword,
    confirmPassword: state.signup.confirmPassword,
})
export default connect(mapStateToProps, mapDispatchToProps)(Signup);