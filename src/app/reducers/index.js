import { combineReducers } from "redux"

import auth from "./authReduser";
import departments from "./departmentsReducer";
import employees from "./employeesReducer";
import updateForm from "./departmentEditFormReducer"

export default combineReducers({ auth, departments, employees, updateForm });