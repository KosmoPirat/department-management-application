import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AddForm from "../container/AddFormContainer";
import EmployeesItem from '../container/EmployeesItemContainer';

export default class Employees extends Component {
    constructor(props) {
        super(props);

        this.showAddForm = this.showAddForm.bind(this);
    }

    componentDidMount() {
        const { fetchEmployees } = this.props.employeesActions;
        fetchEmployees(this.props.employeesList);
    }

    showAddForm() {
        const { toggleAddFormVisibility }  = this.props.addFormActions;
        const { toggleRedirection, updateAuthFromLocalStorage }  = this.props.authActions;
        updateAuthFromLocalStorage();
        if (this.props.isAuth === 'true'  ) {
            toggleAddFormVisibility({
                formName: 'employee',
                inputName: 'Employee name'
            });
        } else {
            toggleRedirection();
        }

    }

    render() {
        const { toggleRedirection } = this.props.authActions;
        if (this.props.isRedirect) {
            toggleRedirection();
            return <Redirect to='/auth'/>;
        }

        const employees = this.props.employeesList.map(empl => {
            return <EmployeesItem key={empl.id} {...empl}/>
        });
        return (
                <>
                    <h1 className="text-center mb-3 mt-3">Employees</h1>
                    <h5 className="text-center mb-4">You can manage your employees by creating or deleting them</h5>
                    <div className="table-responsive">
                        <table className="table table-striped shadow-sm ">
                            <thead className="thead-dark">
                            <tr>
                                <th className="border-right text-center pb-2-2" scope="col">id</th>
                                <th className="d-flex justify-content-between align-items-center pr-3 pl3" scope="col">
                                    <span>Employees names</span>
                                    <button className="btn btn-outline-light" onClick={this.showAddForm}>
                                        <span className="pr-3  font-weight-bold">Add</span>
                                        <FontAwesomeIcon icon="plus-square" size="lg"/>
                                    </button>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {employees}
                            </tbody>
                        </table>
                        { this.props.isVisible && <AddForm/> }
                    </div>
                </>
        );
    }
}