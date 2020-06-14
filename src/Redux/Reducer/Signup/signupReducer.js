const initialState = {
    name: '',
    signUppassword: '',
    confirmPassword: '',
    signUpemail: ''
}

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'SET_EMAIL':
            return {
                ...state,
                signUpemail: action.payload
            }
        case 'SET_PASSWORD':
            return {
                ...state,
                signUppassword: action.payload
            }
        case 'SET_CONFIRM_PASSWORD':
            return {
                ...state,
                confirmPassword: action.payload
            }
        default:
            return state
    }
}

export default signUpReducer;