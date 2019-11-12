import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


import * as departmentsEditFormAction from "../actions/departmentEditFormActions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DepartmentEditFormContainer from './DepartmentEditFormContainer';


class DepartmentsItemContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { toggleEditFormVisibility }  = this.props.updateFormActions;
        return (
            <>
                <tr>
                    <th className="pt-3-25 text-center w-5 border-right" scope="row">{this.props.id}</th>
                    <td className="d-flex justify-content-between align-items-center pl-3 pr-3">
                        <span className="font-weight-bold">{this.props.d_name}</span>
                        <div className="d-flex justify-content-end">
                            <div className="btn-group" role="group">
                                <button className="btn btn-secondary" onClick={toggleEditFormVisibility}>
                                    <FontAwesomeIcon className="text-light" icon="edit"/>
                                </button>
                                <button className="btn btn-secondary">
                                    <FontAwesomeIcon className="text-light" icon="trash-alt"/>
                                </button>
                            </div>
                        </div>
                        {
                            this.props.isVisible ? <DepartmentEditFormContainer {...this.props}/> : null
                        }
                    </td>
                </tr>

            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFormActions: bindActionCreators(departmentsEditFormAction, dispatch),

    };
};

const mapStateToProps = (state) => {
    return {
        isVisible: state.updateForm.isEditFormVisible,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsItemContainer);

