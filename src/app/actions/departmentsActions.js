const depsData = [
    {
        "id": 1,
        "d_name": "Dep1",
        "d_employees": [1,3]
    },
    {
        "id": 2,
        "d_name": "Dep2",
        "d_employees": [2,1]
    },
    {
        "id": 3,
        "d_name": "Dep3",
        "d_employees": [2,3]
    }
];
/*  Fetch Departments action start  */
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


export const fetchDepartments = () => {
    return (dispatch) => {
        dispatch(fetchDepartmentsPending);
        dispatch(fetchDepartmentsResolve(depsData));
    };
};

/*  Fetch Departments action end  */

/*  Fetch Department action start  */

const fetchDepartmentPending = () => {
    return {
        type: 'FETCH_DEPARTMENTS',

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
        dispatch(fetchDepartmentsPending);
        const departmentData = depsData.find(depItem => {
            return depItem.id === dep.id;
        });
        dispatch(fetchDepartmentResolve(departmentData));
    };
};

/*  Fetch Department action end  */

/*  Add Department action start  */

const addDepartment = (data) => {
    return {
        type: 'ADD_DEPARTMENTS',
        payload: data
    };
};

/*  Add Department action end  */

/*  Update Department action start  */

const updateDepartment = (data) => {
    return {
        type: 'UPDATE_DEPARTMENTS',
        payload: data
    };
};

/*  Update Department action end  */

/*  Delete Department action start  */

const deleteDepartment = (depId) => {
    return {
        type: 'DELETE_DEPARTMENTS',
        payload: depId
    };
};

/*  Delete Department action end  */



