const initialState = {
    employeesList: [
        {
            id: 1,
            e_name: "Vasya",
            e_departments: ["Dep1","Dep2"],

        },
        {
            id: 2,
            e_name: "Petya",
            e_departments: ["Dep3", "Dep2"],

        },
        {
            id: 3,
            e_name: "Kolya",
            e_departments: ["Dep1","Dep3"],

        },
        {
            id: 4,
            e_name: "Grisha",
            e_departments: [],

        }
    ],
    fetching: false,
    error: null,

};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_EMPLOYEES': {
            return {...state, fetching: true}
        }
        case 'FETCH_EMPLOYEES_FULFILLED': {
            return {...state, fetching: false, employeesList: action.payload}
        }
        case 'FETCH_EMPLOYEE_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }


        case 'UPDATE_EMPLOYEE': {
            const {id} = action.payload;
            const newEmployeesList = [...state.employeesList];
            const employeesIdxToUpdate = newEmployeesList.findIndex(employee => employee.id === id);
            newEmployeesList[employeesIdxToUpdate] = action.payload;

            return {...state, employeesList: newEmployeesList}
        }

        case 'ADD_EMPLOYEE': {
            return {...state, employeesList: [...state.employeesList, action.payload]}
        }

        case 'DELETE_EMPLOYEE': {
            return {
                ...state,
                employeesList: state.employeesList.filter(employee => employee.id !== action.payload),

            }
        }

    }
    return state;
};