export default function reducer(state = {
    isAuth: false,

}, action) {
    switch (action.type) {

        case 'SET_AUTH': {
            return {...state, isAuth: action.payload}
        }
    }
    return state;
};