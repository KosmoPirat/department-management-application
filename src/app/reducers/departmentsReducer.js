export default function reducer(state = {
    departmentsList: [
        {
            id: 1,
            d_name: "Dep1",
            d_employees: [1,3]
        },
        {
            id: 2,
            d_name: "Dep2",
            d_employees: [2,1]
        },
        {
            id: 3,
            d_name: "Dep3",
            d_employees: [2,3]
        }
    ],

    fetching: false,
    error: null,

}, action) {
    switch (action.type) {
        case 'FETCH_DEPARTMENTS': {
            return {...state, fetching: true}
        }
        case 'FETCH_DEPARTMENTS_FULFILLED': {
            return {...state, fetching: false, departmentsList: action.payload}
        }
        case 'FETCH_DEPARTMENTS_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }


        case 'FETCH_DEPARTMENT': {
            return {...state, fetching: true}
        }
        case 'FETCH_DEPARTMENT_FULFILLED': {
            return {...state, fetching: false, departmentsList: action.payload}
        }
        case 'FETCH_DEPARTMENT_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }


        case 'ADD_DEPARTMENT': {
            return {...state, departmentsList: [action.payload, ...state.departmentsList]}
        }


        case 'UPDATE_DEPARTMENT': {
            const {id} = action.payload;
            const newDepartmentsList = [...state.departmentsList];
            const departmentIdxToUpdate = newDepartmentsList.findIndex(department => department.id === id);
            newDepartmentsList[departmentIdxToUpdate] = action.payload;

            return {...state, departmentsList: newDepartmentsList}
        }


        case 'DELETE_DEPARTMENT': {
            return {
                ...state,
                departmentsList: state.departmentsList.filter(department => department.id !== action.payload),

            }
        }

    }
    return state;
};