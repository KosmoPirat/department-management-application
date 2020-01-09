
export const fetchEmployeesOfDepartment = (data) => ({
  type: 'FETCH_EMPLOYEE_OF_DEPARTMENT',
  payload: data,
});

export const fetchRestEmployees = (data) => ({
  type: 'FETCH_REST_EMPLOYEES',
  payload: data,
});

export const addEmployeesOfDepartment = (data) => ({
  type: 'ADD_EMPLOYEES_OF_DEPARTMENT',
  payload: data,
});

export const addRestEmployees = (data) => ({
  type: 'ADD_REST_EMPLOYEES',
  payload: data,
});

export const deleteEmployeesOfDepartment = (employeeId) => ({
  type: 'DELETE_EMPLOYEES_OF_DEPARTMENT',
  payload: employeeId,
});

export const deleteRestEmployees = (employeeId) => ({
  type: 'DELETE_REST_EMPLOYEES',
  payload: employeeId,
});

export const toggleUpdateFormVisibility = (dep) => ({
  type: 'TOGGLE_UPDATE_FORM_VISIBILITY',
  payload: dep,
});

export const toggleUpdateFormValidation = (isValid) => ({
  type: 'TOGGLE_UPDATE_FORM_VALIDATION',
  payload: isValid,

});
