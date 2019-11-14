import { combineReducers } from "redux"

import auth from "./authReduсer";
import departments from "./departmentsReducer";
import employees from "./employeesReducer";
import updateForm from "./updateFormReducer";
import addForm from "./addFormReducer";

export default combineReducers({ auth, departments, employees, updateForm, addForm });