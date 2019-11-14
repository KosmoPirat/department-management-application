const initialState = {
    isAddFormVisible: false,
    isAddFormValid: true,
    data: {},
    displayData: {},

};
export default function reducer(state = initialState, action) {
    switch (action.type) {

        case 'TOGGLE_ADD_FORM_VISIBILITY': {
            return {
                ...state,
                isAddFormVisible: !state.isAddFormVisible,
                displayData: action.payload,
            }
        }

        case 'TOGGLE_ADD_FORM_VALIDATION': {
            return {...state, isAddFormValid: action.payload}
        }


    }
    return state;
};