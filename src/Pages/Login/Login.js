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

const Login = (props) => {


    const onChangeHandle = (e) => {
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
        if (!min_length(props.password) || !email_validate(props.email))
            alert("Password must consists of atleast 8 characters and must contain at least 1 numeric");
        else {
            if (localStorage.getItem(props.email)) {
                const local_password = localStorage.getItem(props.email);
                if (props.password === local_password) {
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