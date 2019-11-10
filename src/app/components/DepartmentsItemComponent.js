import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DepartmentEditFormContainer from './DepartmentEditFormContainer';


export default class DepartmentsItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditFormVisible: false,

        };

        this.toggleEditFormVisibility = this.toggleEditFormVisibility.bind(this);
    }

    toggleEditFormVisibility() {
        this.setState({
            isEditFormVisible: !this.state.isEditFormVisible
        })
    }

    render() {

        return (
            <>
                <tr>
                    <th className="pt-3-25 text-center w-5 border-right" scope="row">{this.props.id}</th>
                    <td className="d-flex justify-content-between align-items-center pl-3 pr-3">
                        <span className="font-weight-bold">{this.props.d_name}</span>
                        <div className="d-flex justify-content-end">
                            <div className="btn-group" role="group">
                                <button className="btn btn-secondary" onClick={this.toggleEditFormVisibility}>
                                    <FontAwesomeIcon className="text-light" icon="edit"/>
                                </button>
                                <button className="btn btn-secondary">
                                    <FontAwesomeIcon className="text-light" icon="trash-alt"/>
                                </button>
                            </div>
                        </div>
                        {
                            this.state.isEditFormVisible ? <DepartmentEditFormContainer {...this.props} toggleVisibility={this.toggleEditFormVisibility}/> : null
                        }
                    </td>
                </tr>

            </>
        );
    }
}

