const initialState = {
  depsList: [
    {
      id: 1,
      d_name: 'Logistics',
      d_description: 'Department is engaged in transportation',
      d_employees: [1, 3],
    },
    {
      id: 2,
      d_name: 'Bookkeeping',
      d_description: 'The department is engaged in financial calculations',
      d_employees: [2, 1],
    },
    {
      id: 3,
      d_name: 'Advertisements',
      d_description: 'The department supports the image of the company.',
      d_employees: [2, 3],
    },
  ],
  d_employees: [],
  fetching: false,
  error: null,

};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DEPARTMENTS': {
      return { ...state, fetching: true };
    }
    case 'FETCH_DEPARTMENTS_FULFILLED': {
      return { ...state, fetching: false, depsList: action.payload };
    }
    case 'FETCH_DEPARTMENTS_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }


    case 'FETCH_DEPARTMENT': {
      return { ...state, fetching: true };
    }
    case 'FETCH_DEPARTMENT_FULFILLED': {
      return { ...state, fetching: false, depsList: action.payload };
    }
    case 'FETCH_DEPARTMENT_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }


    case 'ADD_DEPARTMENT': {
      return { ...state, depsList: [...state.depsList, action.payload] };
    }


    case 'UPDATE_DEPARTMENT': {
      const { id } = action.payload;
      const newDepartmentsList = [...state.depsList];
      const depIdxToUpdate = newDepartmentsList.findIndex((department) => department.id === id);
      newDepartmentsList[depIdxToUpdate] = action.payload;

      return { ...state, depsList: newDepartmentsList };
    }


    case 'DELETE_DEPARTMENT': {
      return {
        ...state,
        depsList: state.depsList.filter((department) => department.id !== action.payload),

      };
    }


    case 'FETCH_D_EMPLOYEES': {
      const { employeesList, d_employeesIds: depEmployeesIds } = action.payload;
      const depEmployees = employeesList.filter((empl) => depEmployeesIds.includes(empl.id));
      return { ...state, d_employees: depEmployees };
    }

    default: {
      return state;
    }
  }
}
