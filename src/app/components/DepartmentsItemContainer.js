import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as updateFormActions from "../actions/updateFormActions";
import * as authActions from "../actions/authActions";
import * as departmentsActions from "../actions/departmentsActions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UpdateFormContainer from './UpdateFormContainer';


class DepartmentsItemContainer extends Component {
    constructor(props) {
        super(props);

        this.removeDepartment = this.removeDepartment.bind(this);
        this.showUpdateForm = this.showUpdateForm.bind(this);
    }

    showUpdateForm() {
        const { toggleUpdateFormVisibility }  = this.props.updateFormActions;
        const { toggleRedirection }  = this.props.authActions;
        if (this.props.isAuth !== 'true' ) {
            toggleRedirection();
        } else {
            toggleUpdateFormVisibility(this.props);
        }

    }

    removeDepartment() {
        const { deleteDepartment } = this.props.departmentsActions;
        const { toggleRedirection }  = this.props.authActions;
        if (this.props.isAuth !== 'true' ) {
            toggleRedirection();
        } else {
            deleteDepartment(this.props.id);
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
                    <th className="text-center  border-right pt-2-2" scope="row">{this.props.id}</th>
                    <td className="d-flex justify-content-between align-items-center pl-3 pr-3">
                        <span className="font-weight-bold">{this.props.d_name}</span>
                        <div className="d-flex justify-content-end">
                            <div className="btn-group" role="group">
                                <button className="btn btn-info" onClick={this.showUpdateForm}>
                                    <FontAwesomeIcon className="text-light" icon="edit"/>
                                </button>
                                <button className="btn btn-secondary" onClick={this.removeDepartment}>
                                    <FontAwesomeIcon className="text-light" icon="trash-alt"/>
                                </button>
                            </div>
                        </div>
                        {
                            this.props.isVisible ? <UpdateFormContainer/> : null
                        }
                    </td>
                </tr>

            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFormActions: bindActionCreators(updateFormActions, dispatch),
        authActions: bindActionCreators(authActions, dispatch),
        departmentsActions: bindActionCreators(departmentsActions, dispatch)
    };
};

const mapStateToProps = (state) => {
    return {
        isVisible: state.updateForm.isUpdateFormVisible,
        isAuth: state.auth.isAuth,
        isRedirect: state.auth.isRedirect,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsItemContainer);

