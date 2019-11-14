import React, { Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as employeesActions from "../actions/employeesActions";
import * as departmentsActions from "../actions/departmentsActions";
import * as updateFormActions from "../actions/updateFormActions";

class MainContainer extends Component {

    render() {
        return (
            <>
                <h1 className="text-center mb-3 mt-3">Department information</h1>
                <h5 className="text-center mb-4">Нou can find complete information about departments and employees here</h5>
                <div className="table-responsive">
                    <p className="text-center">In progress...</p>
                </div>

            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        employeesActions: bindActionCreators(employeesActions, dispatch),
        departmentsActions: bindActionCreators(departmentsActions, dispatch),
        updateFormActions: bindActionCreators(updateFormActions, dispatch),

    };
};

const mapStateToProps = (state) => {
    return {
        employeesList: state.employees.employeesList,
        isVisible: state.updateForm.isUpdateFormVisible,
        employeesOfDepartment: state.updateForm.employeesOfDepartment,
        restEmployees: state.updateForm.restEmployees,
        departmentData: state.updateForm.departmentData,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);