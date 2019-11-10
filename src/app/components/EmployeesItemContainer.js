import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as employeesAction from "../actions/employeesActions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EmployeesItemContainer extends Component {
    constructor(props) {
        super(props);

        this.delEmployee = this.delEmployee.bind(this)
    }

    delEmployee() {
        const emplId = this.props.id;
        const { deleteEmployee } = this.props.actions;
        deleteEmployee(emplId);
    }

    render() {
        return (
            <>
                <tr>
                    <th className="pt-3-25 text-center w-5 border-right" scope="row">{this.props.id}</th>
                    <td className="d-flex justify-content-between align-items-center pl-3 pr-3">
                        <span className="font-weight-bold">{this.props.e_name}</span>
                        <div className="d-flex justify-content-end">
                            <div className="btn-group" role="group">
                                {
                                    this.props.isCheckNeed ?
                                        <label for={`emplCheck${this.props.id}`} className="btn btn-secondary mb-0">
                                            <input type="checkbox" id={`emplCheck${this.props.id}`} />
                                        </label> :
                                        null
                                }
                                <button className="btn btn-secondary" onClick={this.delEmployee}>
                                    <FontAwesomeIcon className="text-light" icon="trash-alt"/>
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>

            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesItemContainer);
