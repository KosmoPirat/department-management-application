const initialState = {
    isUpdateFormVisible: false,
    isUpdateFormValid: true,
    employeesOfDepartment: [],
    restEmployees: [],
    departmentData: {},

};
export default function reducer(state = initialState, action) {
    switch (action.type) {

        case 'FETCH_EMPLOYEE_OF_DEPARTMENT': {
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
            const { id } = action.payload;
            return {
                ...state,
                employeesOfDepartment: state.employeesOfDepartment.filter(department => department.id !== id),

            }
        }

        case 'DELETE_REST_EMPLOYEES': {
            const { id } = action.payload;
            return {
                ...state,
                restEmployees: state.restEmployees.filter(department => department.id !== id),

            }
        }


        case 'TOGGLE_UPDATE_FORM_VISIBILITY': {
            return {
                ...state,
                isUpdateFormVisible: !state.isUpdateFormVisible,
                departmentData: action.payload,
            }
        }

        case 'TOGGLE_UPDATE_FORM_VALIDATION': {
            return {...state, isUpdateFormValid: action.payload}
        }

    }
    return state;
};