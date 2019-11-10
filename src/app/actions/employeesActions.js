
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


export const fetchEmployees = (emplsData) => {
    return (dispatch) => {
        dispatch(fetchEmployeesPending);
        dispatch(fetchEmployeesResolve(emplsData));
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


export const fetchEmployee = (emplId, emplsData) => {
    return (dispatch) => {
        dispatch(fetchEmployeePending);
        const emplData = emplsData.find(emplItem => {
            return emplItem.id === emplId;
        });
        dispatch(fetchEmployeeResolve(emplData));
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