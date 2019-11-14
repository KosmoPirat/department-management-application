
export const setAuth = (isAuth) => {
    localStorage.setItem('auth', isAuth);
    return {
        type: 'SET_AUTH',

    };
};

export const toggleValidation = (isValid) => {
    return {
        type: 'TOGGLE_VALIDATION',
        payload: isValid,

    };
};

export const toggleRedirection = () => {
    return {
        type: 'TOGGLE_REDIRECTION',
    };
};

