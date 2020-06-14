const initialState = {
    currentUser: false,
}

const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                currentUser: !state.currentUser
            }
        default:
            return state
    }
}

export default currentUserReducer;