export const updateAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem('auth');
  return {
    type: 'SET_AUTH',
    payload: isAuth,
  };
};

export const setAuth = (isAuth) => {
  localStorage.setItem('auth', isAuth);
  return {
    type: 'SET_AUTH',
    payload: isAuth,
  };
};

export const toggleValidation = (isValid) => ({
  type: 'TOGGLE_VALIDATION',
  payload: isValid,

});

export const toggleRedirection = () => ({
  type: 'TOGGLE_REDIRECTION',
});
