import React, { Component } from "react";

import MainEmployeesItem from "./MainEmployeesItem";

export default class MainItem extends Component {

    render() {
        const d_employees = this.props.employeesList.filter(empl => {
            return this.props.d_employeesIds.includes(empl.id);
        });
        const employeesListItem = d_employees.map((empl,index) => {
            return <MainEmployeesItem key={index} e_name={empl.e_name}/>
        });
        return (
                <>
                    <div className="col-md-4 mb-4">
                        <div className="card p-0 h-400">
                            <div className="card-header bg-dark">
                                <h6 className="card-title text-light m-1">{this.props.d_name}</h6>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{this.props.d_description}</p>

                            </div>
                            <div className="card-header card-title font-weight-bold text-center border-top">
                                List of employees of this department
                            </div>
                            <ul className="list-group list-group-flush overflow-auto">
                                {
                                    employeesListItem.length ?
                                        employeesListItem :
                                        <li className="list-group-item text-center text-muted">
                                            <small>Nobody of the employees work here</small>
                                        </li>
                                }
                            </ul>
                        </div>
                    </div>
                </>
        );
    }
}
