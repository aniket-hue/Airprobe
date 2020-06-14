import { combineReducers } from 'redux';
import loginReducer from './Login/loginReducer';
import signupReducer from './Signup/signupReducer'
import currentUserReducer from './User/currentUserReducer'
export default combineReducers(
    {
        login: loginReducer,
        signup: signupReducer,
        user: currentUserReducer
    }
);