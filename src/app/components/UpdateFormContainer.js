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

        this.validation = this.validation.bind(this);
        this.updateDepartment = this.updateDepartment.bind(this);
        this.d_nameRef = React.createRef();
        this.d_descriptionTextRef = React.createRef();
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

    validation() {
        const { toggleUpdateFormValidation } = this.props.updateFormActions;

        if(this.d_nameRef.current.value !== '') {
            this.updateDepartment();
        } else {
            toggleUpdateFormValidation(false);
        }

    }

    updateDepartment() {
        const { updateEmployee } = this.props.employeesActions;
        const { updateDepartment } = this.props.departmentsActions;
        const { toggleUpdateFormVisibility, toggleUpdateFormValidation } = this.props.updateFormActions;
        const d_employeesData = this.props.employeesOfDepartment.map(empl => {
            return empl.id;
        });
        const DepartmentData = {
            id: this.props.departmentData.id,
            d_name: this.d_nameRef.current.value,
            d_description: this.d_descriptionTextRef.current.value,
            d_employees: d_employeesData,

        };
        updateDepartment(DepartmentData);
        this.props.employeesOfDepartment.forEach(empl => {
            if (!empl.e_departments.find(d_name => d_name === this.props.departmentData.d_name)) {
                empl.e_departments.push(this.props.departmentData.d_name);
            }

            updateEmployee(empl);
        });
        toggleUpdateFormValidation(true);
        toggleUpdateFormVisibility();
    }
    render() {
        const { toggleUpdateFormVisibility } = this.props.updateFormActions;

        return (
            <div className="position-absolute card border-secondary mb-5 ml-2 mr-2 mt-3 d-flex justify-content-center update-form-position">
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
                        {
                            !this.props.isUpdateFormValid ?
                                <small className="form-text text-danger pl-1">Text field "Department name" must be filled!</small> :
                                <small className="form-text text-info pl-1">If you don't  change department name, name will remain by default!</small>
                        }

                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Department description</label>
                        <textarea ref={this.d_descriptionTextRef}
                                  id="d-description"
                                  className="form-control resize-none"
                                  placeholder="Enter department description"
                                  rows="3"
                                  defaultValue={this.props.departmentData.d_description}/>
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
                <div className="btn btn-info mt-3 p-3 font-weight-bold text-uppercase" onClick={this.validation}>Update department information</div>
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
        isUpdateFormValid: state.updateForm.isUpdateFormValid,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateFormContainer);