export default function reducer(state = {
    isEditFormVisible: false,
    employeesOfDepartment: [],
    restEmployees: [],

}, action) {
    switch (action.type) {

        case 'FETCH_EMPLOYEE_OF_DEPARTMENT': {
            console.log(action.payload);
            const { employeesList, employeesOfDepIds } = action.payload;
            const employeesOfDepartment = employeesList.filter(empl => {
                return employeesOfDepIds.includes(empl.id);
            });
            return {...state, employeesOfDepartment}
        }

        case 'FETCH_REST_EMPLOYEES': {
            const { employeesList, restEmployeesIds } = action.payload;
            const restEmployees = employeesList.filter(empl => {
                return !restEmployeesIds.includes(empl.id);
            });
            return {...state, restEmployees}
        }

        case 'ADD_EMPLOYEES_OF_DEPARTMENT': {
            return {...state, employeesOfDepartment: [action.payload, ...state.employeesOfDepartment]}
        }

        case 'ADD_REST_EMPLOYEES': {
            return {...state, restEmployees: [action.payload, ...state.restEmployees]}
        }


        case 'DELETE_EMPLOYEES_OF_DEPARTMENT': {
            return {
                ...state,
                employeesOfDepartment: state.employeesOfDepartment.filter(department => department.id !== action.payload),

            }
        }

        case 'DELETE_REST_EMPLOYEES': {
            return {
                ...state,
                restEmployees: state.restEmployees.filter(department => department.id !== action.payload),

            }
        }


        case 'TOGGLE_EDIT_FORM_SHOW': {
            return {
                ...state,
                isEditFormVisible: !state.isEditFormVisible,
            }
        }

    }
    return state;
};