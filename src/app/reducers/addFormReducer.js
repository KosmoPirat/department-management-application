export default function reducer(state = {
    isAddFormVisible: false,
    isAddFormValid: true,
    data: {},
    displayData: {},

}, action) {
    switch (action.type) {

        case 'TOGGLE_ADD_FORM_VISIBILITY': {
            return {
                ...state,
                isAddFormVisible: !state.isAddFormVisible,
                displayData: action.payload,
            }
        }

        case 'ADD_EMPLOYEES': {
            return {...state, data: action.payload}
        }

        case 'TOGGLE_ADD_FORM_VALIDATION': {
            return {...state, isAddFormValid: action.payload}
        }


    }
    return state;
};