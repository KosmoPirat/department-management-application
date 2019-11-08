export default function reducer(state = {
    employeesList: [
        {
            "id": 1,
            "e_name": "Vasya",
            "e_departments": [1,2]
        },
        {
            "id": 2,
            "e_name": "Petya",
            "e_departments": [3,2]
        },
        {
            "id": 3,
            "e_name": "Kolya",
            "e_departments": [1,3]
        }
    ],
    fetching: false,
    error: null,

}, action) {
    switch (action.type) {
        case 'FETCH_EMPLOYEES': {
            return {...state, fetching: true}
        }
        case 'FETCH_EMPLOYEES_FULFILLED': {
            return {...state, fetching: false, employeesList: action.payload}
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