import React, { Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as addFormActions from "../actions/addFormActions";
import * as departmentsActions from "../actions/departmentsActions";
import * as employeesActions from "../actions/employeesActions";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class AddFormContainer extends Component {
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
            addDepartment({
                    id,
                    d_name: name,
                    d_employees: []
                });
        } else {
            const id = this.props.employeesList[this.props.employeesList.length-1].id + 1;
            const name = this.inputNameRef.current.value;
            addEmployee({
                id,
                e_name: name,
                e_departments: []
            });
        }
        toggleAddFormValidation(true);
        toggleAddFormVisibility();
    }
    render() {
        const { toggleAddFormVisibility } = this.props.addFormActions;

        return (
            <div className="position-absolute card border-secondary mb-5 d-flex justify-content-center" style={{zIndex:3, top:150, left:0, right:0}}>
                <div className="card-header d-flex justify-content-between">
                    <h5 className="pt-2">Form to add {this.props.displayData.formName}</h5>
                    <button onClick={toggleAddFormVisibility} className="btn btn-dark">
                        <FontAwesomeIcon className="text-light" icon="times"/>
                    </button>
                </div>
                <div className="card-body text-secondary col-lg-6 m-auto">

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">{this.props.displayData.inputName}</span>
                        </div>
                        <input type="text" ref={this.inputNameRef} className="form-control" placeholder={`Enter name of ${this.props.displayData.formName}`}/>
                    </div>
                    {!this.props.isValid ?
                        <small className="form-text text-danger">Text field "{this.props.displayData.inputName}" must be filled</small> :
                        null
                    }

                </div>
                <div className="btn btn-info mt-3 p-2 font-weight-bold text-uppercase" onClick={this.validation}>Add {this.props.displayData.formName}</div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFormActions: bindActionCreators(addFormActions, dispatch),
        departmentsActions: bindActionCreators(departmentsActions, dispatch),
        employeesActions: bindActionCreators(employeesActions, dispatch),

    };
};

const mapStateToProps = (state) => {
    return {
        isVisible: state.addForm.isAddFormVisible,
        displayData: state.addForm.displayData,
        departmentsList: state.departments.departmentsList,
        employeesList: state.employees.employeesList,
        isValid: state.addForm.isAddFormValid,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFormContainer);