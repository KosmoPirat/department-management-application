import React, {Component} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class UpdateFormListItem extends Component {
    constructor(props) {
        super(props);

        this.addEmployeesToDepartment = this.addEmployeesToDepartment.bind(this);
        this.removeEmployeesFromDepartment = this.removeEmployeesFromDepartment.bind(this);
    }

    addEmployeesToDepartment(emplId){
        const { addEmployeesOfDepartment, deleteRestEmployees } = this.props.updateFormActions;
        deleteRestEmployees(emplId);
        addEmployeesOfDepartment(emplId);

    }

    removeEmployeesFromDepartment(emplId){
        const { addRestEmployees, deleteEmployeesOfDepartment } = this.props.updateFormActions;
        deleteEmployeesOfDepartment(emplId);
        addRestEmployees(emplId);

    }

    render() {
        return (
                <>
                    {
                        this.props.emplOfDep ?
                            <button className="list-group-item font-weight-bold d-flex justify-content-between align-items-center pl-3 pr-3 text-secondary"
                                    type="button"
                                    onClick={() => this.removeEmployeesFromDepartment(this.props)}>
                                <span >{ this.props.e_name}</span>
                                <span className="d-flex align-items-center btn btn-secondary">
                                <FontAwesomeIcon className="text-light" icon="trash-alt"/>
                            </span>
                            </button> :
                            <button className="list-group-item font-weight-bold d-flex justify-content-between align-items-center pl-3 pr-3 text-secondary"
                                    type="button"
                                    onClick={() => this.addEmployeesToDepartment(this.props)}>
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