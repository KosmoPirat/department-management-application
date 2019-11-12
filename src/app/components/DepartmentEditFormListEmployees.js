import React, { Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as departmentsAction from "../actions/departmentsActions";
import * as employeesAction from "../actions/employeesActions";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



class DepartmentEditFormListEmployees extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let employees ,restEmployees;

        this.props.deleteEmployee ?
            employees = this.props.employeesOfDepartment.map(empl => {
                return <EditFormListItemEmployees key={empl.id} {...empl} />})
            :
            restEmployees = this.props.restEmployees.map(empl => {
                return <EditFormListItemEmployees key={empl.id} {...empl} />
            });


        return (
            <>
                <ul className="list-group mb-3">
                    {employees ? employees : restEmployees}
                </ul>
            </>
        );
    }
}

class EditFormListItemEmployees extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                {
                    this.props.deleteEmployee ?
                        <button className="list-group-item font-weight-bold d-flex justify-content-between align-items-center pl-3 pr-3 text-secondary"
                                type="button"
                                onClick={}>
                            <span >{ this.props.e_name}</span>
                            <span className="d-flex align-items-center btn btn-secondary">
                                <FontAwesomeIcon className="text-light" icon="trash-alt"/>
                            </span>
                        </button> :
                        <button className="list-group-item font-weight-bold d-flex justify-content-between align-items-center pl-3 pr-3 text-secondary"
                                type="button"
                                onClick={}>
                            <span >{this.props.e_name}</span>
                            <span className="d-flex align-items-center btn btn-secondary">
                                Add
                                <FontAwesomeIcon className="text-light ml-2" icon="plus-square"/>
                            </span>
                        </button>
                }

            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        emplActions: bindActionCreators(employeesAction, dispatch),
        depActions: bindActionCreators(departmentsAction, dispatch),

    };
};

const mapStateToProps = (state) => {
    return {
        empls: state.employees.employeesList,
        deps: state.departments.departmentsList,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentEditFormListEmployees);
