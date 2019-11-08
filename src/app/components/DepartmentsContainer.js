import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DepartmentsItemComponent from './DepartmentsItemComponent';
import * as departmentAction from "../actions/departmentsActions";

class DepartmentsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditFormVisible: false,
            isAddFormVisible: false
        };

        this.toggleEditFormVisibility = this.toggleEditFormVisibility.bind(this);
        this.toggleAddFormVisibility = this.toggleAddFormVisibility.bind(this);
    }

    toggleEditFormVisibility() {
        this.setState({
            isEditFormVisible: !this.state.isEditFormVisible
        })
    }
    toggleAddFormVisibility() {
        this.setState({
            isEditFormVisible: !this.state.isEditFormVisible
        })
    }

    componentDidMount() {
        const { fetchDepartments } = this.props.actions;
        fetchDepartments();
    }

    render() {
        const departments = this.props.deps.map(dep => {
            return <DepartmentsItemComponent key={dep.id} {...dep}/>
        });
        return (
            <>
                <h1 className="text-center mb-3 mt-3">Departments</h1>
                <h5 className="text-center mb-4">You can manage your departments by creating, updating or deleting them</h5>
                <div className="table-responsive">
                    <table className="table table-striped shadow-sm ">
                        <thead className="thead-dark">
                        <tr>
                            <th className="border-right text-center pb-3-25" scope="col">id</th>
                            <th className="d-flex justify-content-between align-items-center pr-3 pl3" scope="col">
                                <span>Department names</span>
                                <button className="btn">
                                    <span className="pr-3 text-light font-weight-bold">Add department</span>
                                    <FontAwesomeIcon className="text-light" icon="plus-square" size="lg"/>
                                </button>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {departments}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(departmentAction, dispatch)
    };
};

const mapStateToProps = (state) => {
    return {
        deps: state.departments.departmentsList,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsContainer);