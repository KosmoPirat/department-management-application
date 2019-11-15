import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import UpdateFormListItem from "../components/UpdateFormListItem";

import {
    addEmployeesOfDepartment,
    deleteRestEmployees,
    deleteEmployeesOfDepartment,
    addRestEmployees } from "../actions/updateFormActions";

const mapDispatchToProps = (dispatch) => {
    return {
        updateFormActions: bindActionCreators({
            addEmployeesOfDepartment,
            deleteRestEmployees,
            deleteEmployeesOfDepartment,
            addRestEmployees
        }, dispatch),

    };
};

const mapStateToProps = (state) => {
    return {
        employeesOfDepartment: state.updateForm.employeesOfDepartment,
        restEmployees: state.updateForm.restEmployees,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateFormListItem);