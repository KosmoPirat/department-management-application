import { combineReducers } from "redux"

import auth from "./authReduser";
import departments from "./departmentsReducer";
import employees from "./employeesReducer";

export default combineReducers({ auth, departments, employees});