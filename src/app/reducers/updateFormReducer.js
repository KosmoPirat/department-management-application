const initialState = {
  isUpdateFormVisible: false,
  isUpdateFormValid: true,
  emplsOfDep: [],
  restEmployees: [],
  departmentData: {},

};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_EMPLOYEE_OF_DEPARTMENT': {
      const { employeesList, emplsOfDepIds } = action.payload;
      const emplsOfDep = employeesList.filter((empl) => emplsOfDepIds.includes(empl.id));
      return { ...state, emplsOfDep };
    }

    case 'FETCH_REST_EMPLOYEES': {
      const { employeesList, restEmployeesIds } = action.payload;
      const restEmployees = employeesList.filter((empl) => !restEmployeesIds.includes(empl.id));
      return { ...state, restEmployees };
    }

    case 'ADD_EMPLOYEES_OF_DEPARTMENT': {
      return { ...state, emplsOfDep: [action.payload, ...state.emplsOfDep] };
    }

    case 'ADD_REST_EMPLOYEES': {
      return { ...state, restEmployees: [action.payload, ...state.restEmployees] };
    }


    case 'DELETE_EMPLOYEES_OF_DEPARTMENT': {
      const { id } = action.payload;
      return {
        ...state,
        emplsOfDep: state.emplsOfDep.filter((department) => department.id !== id),

      };
    }

    case 'DELETE_REST_EMPLOYEES': {
      const { id } = action.payload;
      return {
        ...state,
        restEmployees: state.restEmployees.filter((department) => department.id !== id),

      };
    }


    case 'TOGGLE_UPDATE_FORM_VISIBILITY': {
      return {
        ...state,
        isUpdateFormVisible: !state.isUpdateFormVisible,
        departmentData: action.payload,
      };
    }

    case 'TOGGLE_UPDATE_FORM_VALIDATION': {
      return { ...state, isUpdateFormValid: action.payload };
    }

    default: {
      return state;
    }
  }
}
