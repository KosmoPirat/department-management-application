import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import UpdateForm from "../components/UpdateForm";

import { fetchEmployees, updateEmployee } from "../actions/employeesActions";
import { updateDepartment } from "../actions/departmentsActions";
import {
    fetchEmployeesOfDepartment,
    fetchRestEmployees,
    toggleUpdateFormValidation,
    toggleUpdateFormVisibility } from "../actions/updateFormActions";

const mapDispatchToProps = (dispatch) => {
    return {
        employeesActions: bindActionCreators({
            fetchEmployees,
            updateEmployee
        }, dispatch),

        departmentsActions: bindActionCreators({
            updateDepartment
        }, dispatch),

        updateFormActions: bindActionCreators({
            fetchEmployeesOfDepartment,
            fetchRestEmployees,
            toggleUpdateFormValidation,
            toggleUpdateFormVisibility
        } , dispatch),

    };
};

const mapStateToProps = (state) => {
    return {
        employeesList: state.employees.employeesList,
        isVisible: state.updateForm.isUpdateFormVisible,
        employeesOfDepartment: state.updateForm.employeesOfDepartment,
        restEmployees: state.updateForm.restEmployees,
        departmentData: state.updateForm.departmentData,
        isUpdateFormValid: state.updateForm.isUpdateFormValid,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);