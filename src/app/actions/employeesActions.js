
const fetchEmployeesPending = (data) => ({
  type: 'FETCH_EMPLOYEES',
  payload: data,
});

const fetchEmployeesResolve = (data) => ({
  type: 'FETCH_EMPLOYEES_FULFILLED',
  payload: data,
});


export const fetchEmployees = (emplsData) => (dispatch) => {
  dispatch(fetchEmployeesPending);
  dispatch(fetchEmployeesResolve(emplsData));
};

export const addEmployee = (data) => ({
  type: 'ADD_EMPLOYEE',
  payload: data,
});

export const updateEmployee = (data) => ({
  type: 'UPDATE_EMPLOYEE',
  payload: data,
});


export const deleteEmployee = (employeeId) => ({
  type: 'DELETE_EMPLOYEE',
  payload: employeeId,
});
