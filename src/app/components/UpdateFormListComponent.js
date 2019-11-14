import React, { Component } from "react";

import EditFormListItemEmployees from "./UpdateFormListItemContainer";

export default class UpdateFormListComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let employees ,restEmployees;

        this.props.emplOfDep ?
            employees = this.props.employeesOfDepartment.map(empl => {
                return <EditFormListItemEmployees key={empl.id} {...empl} emplOfDep={true}/>})
            :
            restEmployees = this.props.restEmployees.map(empl => {
                return <EditFormListItemEmployees key={empl.id} {...empl} emplOfDep={false}/>
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
