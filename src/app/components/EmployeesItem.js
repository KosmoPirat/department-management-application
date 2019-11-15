import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class EmployeesItem extends Component {
    constructor(props) {
        super(props);

        this.delEmployee = this.delEmployee.bind(this)
    }

    delEmployee() {
        const { deleteEmployee } = this.props.employeesActions;
        const { toggleRedirection, checkAuth } = this.props.authActions;
        checkAuth();
        if (this.props.isAuth === 'true' ) {
            deleteEmployee(this.props.id);
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

        return (
                <>
                    <tr>
                        <th className="text-center border-right pt-2-2" scope="row">{this.props.id}</th>
                        <td className="d-flex justify-content-between align-items-center pl-3 pr-3">
                            <span className="font-weight-bold">{this.props.e_name} <small className="text-muted">consists of <strong>{this.props.e_departments.length}</strong> department</small></span>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-secondary" onClick={this.delEmployee}>
                                    <FontAwesomeIcon className="text-light" icon="trash-alt"/>
                                </button>
                            </div>
                        </td>
                    </tr>

                </>
        );
    }
}
