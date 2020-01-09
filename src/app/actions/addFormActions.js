
export const toggleAddFormValidation = (isValid) => ({
  type: 'TOGGLE_ADD_FORM_VALIDATION',
  payload: isValid,

});

export const toggleAddFormVisibility = (dep) => ({
  type: 'TOGGLE_ADD_FORM_VISIBILITY',
  payload: dep,
});
