import React, { Component } from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class AddForm extends Component {
    constructor(props) {
        super(props);

        this.addData = this.addData.bind(this);
        this.validation = this.validation.bind(this);
        this.inputNameRef = React.createRef();
    }

    validation() {
        const { toggleAddFormValidation } = this.props.addFormActions;

        if(this.inputNameRef.current.value !== '') {
            this.addData();
        } else {
            toggleAddFormValidation(false);
        }

    }

    addData() {
        const { addEmployee } = this.props.employeesActions;
        const { addDepartment } = this.props.departmentsActions;
        const { toggleAddFormVisibility, toggleAddFormValidation } = this.props.addFormActions;

        if (this.props.displayData.formName === 'department') {
            const id = this.props.departmentsList[this.props.departmentsList.length-1].id + 1;
            const name = this.inputNameRef.current.value;
            const deparmentData = {
                id,
                d_name: name,
                d_employees: []
            };
            addDepartment(deparmentData);
        } else {
            const id = this.props.employeesList[this.props.employeesList.length-1].id + 1;
            const name = this.inputNameRef.current.value;
            const employeeData = {
                id,
                e_name: name,
                e_departments: []
            };
            addEmployee(employeeData);
        }
        toggleAddFormValidation(true);
        toggleAddFormVisibility();
    }
    render() {
        const { toggleAddFormVisibility } = this.props.addFormActions;

        return (
                <div className="position-absolute card border-secondary mb-5 d-flex justify-content-center add-form-position">
                    <div className="card-header d-flex justify-content-between">
                        <h5 className="pt-2">Form to add {this.props.displayData.formName}</h5>
                        <button onClick={toggleAddFormVisibility} className="btn btn-dark">
                            <FontAwesomeIcon icon="times"/>
                        </button>
                    </div>
                    <div className="card-body text-secondary col-lg-6 m-auto">

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">{this.props.displayData.inputName}</span>
                            </div>
                            <input type="text" ref={this.inputNameRef} className="form-control" placeholder={`Enter name of ${this.props.displayData.formName}`}/>
                        </div>
                        {
                            !this.props.isValid &&
                            <small className="form-text text-danger">Text field "{this.props.displayData.inputName}" must be filled</small>
                        }

                    </div>
                    <div className="btn btn-info mt-3 p-2 font-weight-bold text-uppercase" onClick={this.validation}>Add {this.props.displayData.formName}</div>
                </div>
        );
    }
}