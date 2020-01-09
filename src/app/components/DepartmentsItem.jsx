import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UpdateForm from '../container/UpdateFormContainer';


export default class DepartmentsItem extends Component {
  constructor(props) {
    super(props);

    this.removeDepartment = this.removeDepartment.bind(this);
    this.showUpdateForm = this.showUpdateForm.bind(this);
  }

  showUpdateForm() {
    const { toggleUpdateFormVisibility } = this.props.updateFormActions;
    const { toggleRedirection, updateAuthFromLocalStorage } = this.props.authActions;
    updateAuthFromLocalStorage();
    if (this.props.isAuth === 'true') {
      toggleUpdateFormVisibility(this.props);
    } else {
      toggleRedirection();
    }
  }

  removeDepartment() {
    const { deleteDepartment } = this.props.departmentsActions;
    const { toggleRedirection, updateAuthFromLocalStorage } = this.props.authActions;
    updateAuthFromLocalStorage();
    if (this.props.isAuth === 'true') {
      deleteDepartment(this.props.id);
    } else {
      toggleRedirection();
    }
  }

  render() {
    const { toggleRedirection } = this.props.authActions;
    if (this.props.isRedirect) {
      toggleRedirection();
      return <Redirect to="/auth" />;
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
                  <FontAwesomeIcon className="text-light" icon="edit" />
                </button>
                <button className="btn btn-secondary" onClick={this.removeDepartment}>
                  <FontAwesomeIcon className="text-light" icon="trash-alt" />
                </button>
              </div>
            </div>
            {
                                this.props.isVisible && <UpdateForm />
                            }
          </td>
        </tr>
      </>
    );
  }
}
