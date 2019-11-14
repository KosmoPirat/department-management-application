import React, { Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as departmentsActions from "../actions/departmentsActions";
import MainItemComponent from "./MainItemComponent";

class MainContainer extends Component {


    render() {
        const departmentsList = this.props.departmentsList.map(dep => {
            return <MainItemComponent key={dep.id} d_employeesIds={dep.d_employees} d_name={dep.d_name}/>
        });
        return (
            <>
                <h1 className="text-center mb-3 mt-3">Department information</h1>
                <h5 className="text-center mb-4">Here you can complete information about departments and employees</h5>
                <div className="row">
                    {departmentsList}
                </div>

            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        departmentsActions: bindActionCreators(departmentsActions, dispatch),

    };
};

const mapStateToProps = (state) => {
    return {
        departmentsList: state.departments.departmentsList,
        employeesList: state.employees.employeesList,
        d_employees: state.departments.d_employees,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);