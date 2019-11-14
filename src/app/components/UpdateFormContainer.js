import React, { Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as employeesActions from "../actions/employeesActions";
import * as departmentsActions from "../actions/departmentsActions";
import * as updateFormActions from "../actions/updateFormActions";


import UpdateFormListComponent from "./UpdateFormListComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class UpdateFormContainer extends Component {
    constructor(props) {
        super(props);

        this.updateDepartment = this.updateDepartment.bind(this);
        this.d_nameRef = React.createRef();
    }

    componentDidMount() {
        const { fetchEmployees } = this.props.employeesActions;
        fetchEmployees(this.props.employeesList);

        const { fetchEmployeesOfDepartment, fetchRestEmployees } = this.props.updateFormActions;

        fetchEmployeesOfDepartment({
            employeesList: this.props.employeesList,
            employeesOfDepIds: this.props.departmentData.d_employees
        });
        fetchRestEmployees({
            employeesList: this.props.employeesList,
            restEmployeesIds: this.props.departmentData.d_employees
        });

    }



    updateDepartment() {
        const { updateEmployee } = this.props.employeesActions;
        const { updateDepartment } = this.props.departmentsActions;
        const { toggleUpdateFormVisibility } = this.props.updateFormActions;
        const d_employeesData = this.props.employeesOfDepartment.map(empl => {
            return empl.id;
        });
        const DepartmentData = {
            id: this.props.departmentData.id,
            d_name: this.d_nameRef.current.value,
            d_employees: d_employeesData,

        };
        updateDepartment(DepartmentData);
        this.props.employeesOfDepartment.forEach(empl => {
            if (!empl.e_departments.find(d_name => d_name === this.props.departmentData.d_name)) {
                empl.e_departments.push(this.props.departmentData.d_name);
            }

            updateEmployee(empl);
        });

        toggleUpdateFormVisibility();
    }
    render() {
        const { toggleUpdateFormVisibility } = this.props.updateFormActions;

        return (
            <div className="position-absolute card border-secondary mb-5 d-flex justify-content-center" style={{zIndex:3, top:0, left:0, right:0}}>
                <div className="card-header d-flex justify-content-between">
                    <h5 className="pt-2">Form to edit department: <span className="font-weight-bold">{this.props.departmentData.d_name}</span></h5>
                    <button onClick={toggleUpdateFormVisibility} className="btn btn-dark">
                        <FontAwesomeIcon className="text-light" icon="times"/>
                    </button>
                </div>
                <div className="card-body text-secondary col-lg-6 m-auto">

                    <div className="form-row mb-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Department name</span>
                            </div>
                            <input type="text" ref={this.d_nameRef} className="form-control" placeholder="Enter department name" defaultValue={this.props.departmentData.d_name}/>
                        </div>
                        <small className="form-text text-info pl-1">If you don't  change department name, name will remain by default!</small>
                    </div>
                    <div className="font-weight-bold text-center text-info mb-2">Employees of the department of {this.props.departmentData.d_name} </div>
                    {
                        this.props.employeesOfDepartment.length !== 0 ?
                            <UpdateFormListComponent {...this.props} emplOfDep={true}/> :
                            <p className="p-3 text-danger text-center">List of department employees is empty</p>
                    }
                    <div className="font-weight-bold text-center text-info mb-2">To add employees to this department, select one or more from the list</div>
                    {
                        this.props.restEmployees.length !== 0 ?
                            <UpdateFormListComponent {...this.props}/> :
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateFormContainer);