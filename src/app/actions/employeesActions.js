
/*  Fetch Employees action start  */

const fetchEmployeesPending = () => {
    return {
        type: 'FETCH_EMPLOYEES',

    };
};

const fetchEmployeesResolve = (data) => {
    return {
        type: 'FETCH_EMPLOYEES_FULFILLED',
        payload: data
    };
};


export const fetchEmployees = () => {
    return (dispatch) => {
        dispatch(fetchEmployeesPending);
        dispatch(fetchEmployeesResolve(emplData));
    };
};

/*  Fetch Employees action end  */

/*  Fetch Employee action start  */

const fetchEmployeePending = () => {
    return {
        type: 'FETCH_EMPLOYEE',

    };
};

const fetchEmployeeResolve = (data) => {
    return {
        type: 'FETCH_EMPLOYEE_FULFILLED',
        payload: data
    };
};


export const fetchEmployee = (dep) => {
    return (dispatch) => {
        dispatch(fetchEmployeePending);
        const departmentData = depsData.find(depItem => {
            return depItem.id === dep.id;
        });
        dispatch(fetchEmployeeResolve(departmentData));
    };
};

/*  Fetch Employee action end  */

/*  Add Employee action start  */

export const addEmployee = (data) => {
    return {
        type: 'ADD_EMPLOYEE',
        payload: data
    };
};

/*  Add Employee action end  */

/*  Delete Employee action start  */

export const deleteEmployee = (employeeId) => {
    return {
        type: 'DELETE_EMPLOYEE',
        payload: employeeId
    };
};

/*  Add Delete action end  */