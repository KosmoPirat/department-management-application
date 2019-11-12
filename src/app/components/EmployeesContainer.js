import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import EmployeesItemContainer from './EmployeesItemContainer';
import * as employeesAction from "../actions/employeesActions";

class EmployeesContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchEmployees } = this.props.actions;
        fetchEmployees();
    }

    render() {
        const employees = this.props.empls.map(empl => {
            return <EmployeesItemContainer key={empl.id} {...empl}/>
        });
        return (
            <>
                <h1 className="text-center mb-3 mt-3">Employees</h1>
                <h5 className="text-center mb-4">You can manage your employees by creating or deleting them</h5>
                <div className="table-responsive">
                    <table className="table table-striped shadow-sm ">
                        <thead className="thead-dark">
                        <tr>
                            <th className="border-right text-center pb-3-25" scope="col">id</th>
                            <th className="d-flex justify-content-between align-items-center pr-3 pl3" scope="col">
                                <span>Employees names</span>
                                <button className="btn">
                                    <span className="pr-3 text-light font-weight-bold">Add employee</span>
                                    <FontAwesomeIcon className="text-light" icon="plus-square" size="lg"/>
                                </button>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {employees}
                        </tbody>
                    </table>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer);