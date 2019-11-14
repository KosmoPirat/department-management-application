
export const fetchEmployeesOfDepartment = (data) => {
    return {
        type: 'FETCH_EMPLOYEE_OF_DEPARTMENT',
        payload: data
    };
};

export const fetchRestEmployees = (data) => {
    return {
        type: 'FETCH_REST_EMPLOYEES',
        payload: data
    };
};

export const addEmployeesOfDepartment = (data) => {
    return {
        type: 'ADD_EMPLOYEES_OF_DEPARTMENT',
        payload: data
    };
};

export const addRestEmployees = (data) => {
    return {
        type: 'ADD_REST_EMPLOYEES',
        payload: data
    };
};

export const deleteEmployeesOfDepartment = (employeeId) => {
    return {
        type: 'DELETE_EMPLOYEES_OF_DEPARTMENT',
        payload: employeeId
    };
};

export const deleteRestEmployees = (employeeId) => {
    return {
        type: 'DELETE_REST_EMPLOYEES',
        payload: employeeId
    };
};

export const toggleUpdateFormVisibility = (dep) => {
    return {
        type: 'TOGGLE_UPDATE_FORM_VISIBILITY',
        payload: dep
    };
};


