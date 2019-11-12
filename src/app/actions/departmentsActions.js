
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


const fetchDepartmentPending = (data) => {
    return {
        type: 'FETCH_DEPARTMENTS',
        payload: data
    };
};

const fetchDepartmentResolve = (data) => {
    return {
        type: 'FETCH_DEPARTMENTS_FULFILLED',
        payload: data
    };
};


export const fetchDepartment = (dep) => {
    return (dispatch) => {
        dispatch(fetchDepartmentPending);
        const departmentData = depsData.find(depItem => {
            return depItem.id === dep.id;
        });
        dispatch(fetchDepartmentResolve(departmentData));
    };
};


export const addDepartment = (data) => {
    return {
        type: 'ADD_DEPARTMENTS',
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
        type: 'DELETE_DEPARTMENTS',
        payload: depId
    };
};




