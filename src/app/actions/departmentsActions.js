
const fetchDepartmentsPending = () => {
        return {
            type: 'FETCH_DEPARTMENTS',

        };
    };

const fetchDepartmentsResolve = (data) => {
    return {
        type: 'FETCH_DEPARTMENTS_FULFILLED',
        payload: data
    };
};


export const fetchDepartments = (depsData) => {
    return (dispatch) => {
        dispatch(fetchDepartmentsPending);
        dispatch(fetchDepartmentsResolve(depsData));
    };
};

export const addDepartment = (data) => {
    return {
        type: 'ADD_DEPARTMENT',
        payload: data
    };
};


export const updateDepartment = (data) => {
    return {
        type: 'UPDATE_DEPARTMENT',
        payload: data
    };
};


export const deleteDepartment = (depId) => {
    return {
        type: 'DELETE_DEPARTMENT',
        payload: depId
    };
};

export const fetchD_Employees = (data) => {
    return {
        type: 'FETCH_D_EMPLOYEES',
        payload: data
    };
};




