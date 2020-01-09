
const fetchDepartmentsPending = () => ({
  type: 'FETCH_DEPARTMENTS',

});

const fetchDepartmentsResolve = (data) => ({
  type: 'FETCH_DEPARTMENTS_FULFILLED',
  payload: data,
});


export const fetchDepartments = (depsData) => (dispatch) => {
  dispatch(fetchDepartmentsPending);
  dispatch(fetchDepartmentsResolve(depsData));
};

export const addDepartment = (data) => ({
  type: 'ADD_DEPARTMENT',
  payload: data,
});


export const updateDepartment = (data) => ({
  type: 'UPDATE_DEPARTMENT',
  payload: data,
});


export const deleteDepartment = (depId) => ({
  type: 'DELETE_DEPARTMENT',
  payload: depId,
});

export const fetchD_Employees = (data) => ({
  type: 'FETCH_D_EMPLOYEES',
  payload: data,
});
