
export const toggleAddFormValidation = (isValid) => {
    return {
        type: 'TOGGLE_ADD_FORM_VALIDATION',
        payload: isValid,

    };
};

export const toggleAddFormVisibility = (dep) => {
    return {
        type: 'TOGGLE_ADD_FORM_VISIBILITY',
        payload: dep
    };
};


