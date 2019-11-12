

const fetchEmployeesPending = (data) => {
    return {
        type: 'FETCH_EMPLOYEES',
        payload: data
    };
};

const fetchEmployeesResolve = (data) => {
    return {
        type: 'FETCH_EMPLOYEES_FULFILLED',
        payload: data
    };
};


export const fetchEmployees = (emplsData) => {
    return (dispatch) => {
        dispatch(fetchEmployeesPending);
        dispatch(fetchEmployeesResolve(emplsData));
    };
};


export const updateEmployee = (data) => {
    return {
        type: 'UPDATE_EMPLOYEE',
        payload: data
    };
};


export const deleteEmployee = (employeeId) => {
    return {
        type: 'DELETE_EMPLOYEE',
        payload: employeeId
    };
};
