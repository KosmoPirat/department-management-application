const initialState = {
    isAuth: localStorage.getItem('auth'),
    isValid: true,
    isRedirect: false

};
export default function reducer(state = initialState, action) {
    switch (action.type) {

        case 'SET_AUTH': {
            return {...state, isAuth: localStorage.getItem('auth')}
        }

        case 'TOGGLE_VALIDATION': {
            return {...state, isValid: action.payload}
        }

        case 'TOGGLE_REDIRECTION': {
            return {...state, isRedirect: !state.isRedirect}
        }
    }
    return state;
};