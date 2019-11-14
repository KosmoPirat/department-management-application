import React, { Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as departmentsActions from "../actions/departmentsActions";

import MainEmployeesItemComponent from "./MainEmployeesItemComponent";

class MainItemComponent extends Component {

    render() {
        const d_employees = this.props.employeesList.filter(empl => {
            return this.props.d_employeesIds.includes(empl.id);
        });
        const employeesListItem = d_employees.map((empl,index) => {
            return <MainEmployeesItemComponent key={index} e_name={empl.e_name}/>
        });
        return (
            <>
                <div className="col-md-4 mb-4">
                <div className="card p-0 h-300">
                    <div className="card-header bg-dark">
                        <h6 className="card-title text-light m-1">{this.props.d_name}</h6>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Some description of the department</p>

                    </div>
                    <div className="card-header card-title font-weight-bold text-center border-top">
                        List of employees of this department
                    </div>
                    <ul className="list-group list-group-flush overflow-auto">
                        {employeesListItem}
                    </ul>
                </div>
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
        employeesList: state.employees.employeesList,
        d_employees: state.departments.d_employees,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainItemComponent);
