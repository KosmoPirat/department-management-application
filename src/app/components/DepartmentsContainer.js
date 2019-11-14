import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AddFormContainer from "./AddFormContainer";
import DepartmentsItemContainer from "./DepartmentsItemContainer";

import * as departmentAction from "../actions/departmentsActions";
import * as addFormActions from "../actions/addFormActions";
import * as authActions from "../actions/authActions";

class DepartmentsContainer extends Component {
    constructor(props) {
        super(props);

        this.showAddForm = this.showAddForm.bind(this);
    }

    componentDidMount() {
        const { fetchDepartments } = this.props.departmentAction;
        fetchDepartments(this.props.departmentList);
    }

    showAddForm() {
        const { toggleAddFormVisibility }  = this.props.addFormActions;
        const { toggleRedirection }  = this.props.authActions;
        if (this.props.isAuth !== 'true' ) {
            toggleRedirection();
        } else {
            toggleAddFormVisibility({
                formName: 'department',
                inputName: 'Department name'
            });
        }

    }

    render() {
        const { toggleRedirection } = this.props.authActions;
        if (this.props.isRedirect) {
            toggleRedirection();
            return <Redirect to='/auth'/>;
        }

        const departments = this.props.departmentList.map(dep => {
            return <DepartmentsItemContainer key={dep.id} {...dep}/>
        });
        return (
            <>
                <h1 className="text-center mb-3 mt-3">Departments</h1>
                <h5 className="text-center mb-4">You can manage your departments by creating, updating or deleting them</h5>
                <div className="table-responsive">
                    <table className="table table-striped shadow-sm ">
                        <thead className="thead-dark">
                        <tr>
                            <th className="text-center pb-2-2" scope="col">id</th>
                            <th className="d-flex justify-content-between align-items-center pr-3 pl3" scope="col">
                                <span>Department names</span>
                                <button className="btn btn-outline-light" onClick={this.showAddForm}>
                                    <span className="pr-3 text-light font-weight-bold">Add</span>
                                    <FontAwesomeIcon className="text-light" icon="plus-square" size="lg"/>
                                </button>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {departments}
                        </tbody>
                    </table>
                    {
                        this.props.isVisible ?
                            <AddFormContainer/> :
                            null
                    }
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        departmentAction: bindActionCreators(departmentAction, dispatch),
        addFormActions: bindActionCreators(addFormActions, dispatch),
        authActions: bindActionCreators(authActions, dispatch),

    };
};

const mapStateToProps = (state) => {
    return {
        departmentList: state.departments.departmentsList,
        isVisible: state.addForm.isAddFormVisible,
        isAuth: state.auth.isAuth,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsContainer);