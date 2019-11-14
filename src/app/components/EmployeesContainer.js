import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AddFormContainer from "./AddFormContainer";
import EmployeesItemContainer from './EmployeesItemContainer';

import * as employeesActions from "../actions/employeesActions";
import * as addFormActions from "../actions/addFormActions";
import * as authActions from "../actions/authActions";

class EmployeesContainer extends Component {
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
        const { toggleRedirection }  = this.props.authActions;
        if (this.props.isAuth !== 'true' ) {
            toggleRedirection();
        } else {
            toggleAddFormVisibility({
                formName: 'employee',
                inputName: 'Employee name'
            });
        }

    }

    render() {
        const { toggleRedirection } = this.props.authActions;
        if (this.props.isRedirect) {
            toggleRedirection();
            return <Redirect to='/auth'/>;
        }

        const employees = this.props.employeesList.map(empl => {
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
                                <button className="btn" onClick={this.showAddForm}>
                                    <span className="pr-3 text-light font-weight-bold">Add employee</span>
                                    <FontAwesomeIcon className="text-light" icon="plus-square" size="lg"/>
                                </button>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.isVisible ?
                                <AddFormContainer/> :
                                null
                        }
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
        employeesActions: bindActionCreators(employeesActions, dispatch),
        addFormActions: bindActionCreators(addFormActions, dispatch),
        authActions: bindActionCreators(authActions, dispatch),

    };
};

const mapStateToProps = (state) => {
    return {
        employeesList: state.employees.employeesList,
        isVisible: state.addForm.isAddFormVisible,
        isAuth: state.auth.isAuth,
        isRedirect: state.auth.isRedirect,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer);