import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom';

import * as employeesActions from "../actions/employeesActions";
import * as authActions from "../actions/authActions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EmployeesItemContainer extends Component {
    constructor(props) {
        super(props);

        this.delEmployee = this.delEmployee.bind(this)
    }

    delEmployee() {
        const { deleteEmployee } = this.props.employeesActions;
        const { toggleRedirection } = this.props.authActions;
        if (this.props.isAuth !== 'true' ) {
            toggleRedirection();
        } else {
            deleteEmployee(this.props.id);
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

const mapDispatchToProps = (dispatch) => {
    return {
        employeesActions: bindActionCreators(employeesActions, dispatch),
        authActions: bindActionCreators(authActions, dispatch),

    };
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isRedirect: state.auth.isRedirect,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesItemContainer);
