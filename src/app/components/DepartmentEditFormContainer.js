import React, { Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as employeesAction from "../actions/employeesActions";
import * as departmentsAction from "../actions/departmentsActions";
import * as departmentsEditFormAction from "../actions/departmentEditFormActions";


import DepartmentEditFormListEmployees from "./DepartmentEditFormListEmployees";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class DepartmentEditFormContainer extends Component {
    constructor(props) {
        super(props);

        this.updateDepartment = this.updateDepartment.bind(this);
        this.d_nameRef = React.createRef();
    }

    componentDidMount() {
        const { fetchEmployees } = this.props.emplActions;
        fetchEmployees();

        const { fetchEmployeesOfDepartment, fetchRestEmployees } = this.props.updateFormActions;

        fetchEmployeesOfDepartment({
            employeesList: this.props.empls,
            employeesOfDepIds: this.props.d_employees
        });
        fetchRestEmployees({
            employeesList: this.props.empls,
            restEmployeesIds: this.props.d_employees
        });

    }



    updateDepartment() {
        const { updateEmployee } = this.props.emplActions;
        const { updateDepartment } = this.props.depActions;
        const d_employeesData = this.state.employeesOfDepartment.map(empl => {
           return empl.id;
        });
        const DepartmentData = {
            id: this.props.id,
            d_name: this.d_nameRef.current.value,
            d_employees: d_employeesData,

        };
        updateDepartment(DepartmentData);
        this.state.employeesOfDepartment.forEach(empl => {
            updateEmployee(empl);
        });

        this.props.toggleVisibility();
    }
    render() {
        console.log(this.props);
        const { toggleEditFormVisibility } = this.props.updateFormActions;

        return (
            <div className="position-absolute card border-secondary mb-5 d-flex justify-content-center" style={{zIndex:3, top:0, left:0, right:0}}>
                <div className="card-header d-flex justify-content-between">
                    <h5 className="pt-2">Form to edit department: <span className="font-weight-bold">{this.props.d_name}</span></h5>
                    <button onClick={toggleEditFormVisibility} className="btn btn-dark">
                        <FontAwesomeIcon className="text-light" icon="times"/>
                    </button>
                </div>
                <div className="card-body text-secondary col-lg-6 m-auto">

                    <div className="form-row mb-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Department name</span>
                            </div>
                            <input type="text" ref={this.d_nameRef} className="form-control" placeholder="Enter department name" defaultValue={this.props.d_name}/>
                        </div>
                        <small className="form-text text-danger pl-1">If you don't  change department name, name will remain by default!</small>
                    </div>
                    <div className="font-weight-bold text-center">Employees of the department of {this.props.d_name} </div>
                    {
                        this.props.employeesOfDepartment.length !== 0 ?
                            <DepartmentEditFormListEmployees {...this.props} deleteEmployee={true}/> :
                            <p className="p-3 text-danger text-center">List of department employees is empty</p>
                    }
                    <div className="font-weight-bold text-center">To add employees to this department, select one or more from the list</div>
                    {
                        this.props.restEmployees.length !== 0 ?
                            <DepartmentEditFormListEmployees {...this.props} addEmployee={true}/> :
                            <p className="p-3 text-danger text-center">List of employees to add is empty</p>
                    }

                </div>
                <div className="btn btn-secondary mt-3 p-3 font-weight-bold text-uppercase" onClick={this.updateDepartment}>Update department information</div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        emplActions: bindActionCreators(employeesAction, dispatch),
        depActions: bindActionCreators(departmentsAction, dispatch),
        updateFormActions: bindActionCreators(departmentsEditFormAction, dispatch),

    };
};

const mapStateToProps = (state) => {
    return {
        empls: state.employees.employeesList,
        deps: state.departments.departmentsList,
        isVisible: state.updateForm.isEditFormVisible,
        employeesOfDepartment: state.updateForm.employeesOfDepartment,
        restEmployees: state.updateForm.restEmployees,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentEditFormContainer);