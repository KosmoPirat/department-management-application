import React, { Component } from "react";
import {bindActionCreators} from "redux";

import * as employeesAction from "../actions/employeesActions";
import {connect} from "react-redux";

import EmployeesItemContainer from "./EmployeesItemContainer"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class DepartmentEditFormContainer extends Component {
    constructor(props) {
        super(props);

        this.updateDepartment = this.updateDepartment.bind(this);

        this.d_nameRef = React.createRef();
        this.isCheckRef = React.createRef();

    }

    componentDidMount() {
        const { fetchEmployees } = this.props.actions;
        fetchEmployees(this.props.empls);
    }

    updateDepartment() {
        // Добавление пользователя
        const deparmentData = {
            id: this.props.id,
            d_name: this.d_nameRef.current.value,
            username: this.usernameRef.current.value,
            phone: this.phoneRef.current.value,
            website: this.websiteRef.current.value,
            email: this.emailRef.current.value,
        };

        this.nameRef.current.value = '';
        this.usernameRef.current.value = '';
        this.phoneRef.current.value = '';
        this.websiteRef.current.value = '';
        this.emailRef.current.value = '';
    }
    render() {
        const employees = this.props.empls.map(empl => {
            return <EmployeesItemContainer key={empl.id} {...empl} isCheckNeed={true}/>
        });
        return (
            <div className="position-absolute card border-secondary mb-5" style={{zIndex:3, top:0, left:0, right:0}}>
                <div className="card-header d-flex justify-content-between">
                    <h5 className="pt-2">Form to edit department: <span className="font-weight-bold">{this.props.d_name}</span></h5>
                    <button onClick={this.props.toggleVisibility} className="btn btn-dark">X</button>
                </div>
                <div className="card-body text-secondary pb-0">

                    <div className="form-row mb-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Department name</span>
                            </div>
                            <input type="text" ref={this.d_nameRef} className="form-control" placeholder="Enter department name" defaultValue={this.props.d_name}/>
                        </div>
                        <small className="form-text text-danger pl-1">If you don't  change department name, name will remain by default!</small>
                    </div>

                        <table className="table mb-0">
                            <tbody>
                                {employees}
                            </tbody>
                        </table>

                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(employeesAction, dispatch)
    };
};

const mapStateToProps = (state) => {
    return {
        empls: state.employees.employeesList,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentEditFormContainer);