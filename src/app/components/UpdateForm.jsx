import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UpdateFormList from './UpdateFormList';


export default class UpdateForm extends Component {
  constructor(props) {
    super(props);

    this.validation = this.validation.bind(this);
    this.updateDepartment = this.updateDepartment.bind(this);
    this.d_nameRef = React.createRef();
    this.d_descriptionTextRef = React.createRef();
  }

  componentDidMount() {
    const { fetchEmployees } = this.props.employeesActions;
    fetchEmployees(this.props.employeesList);

    const { fetchEmployeesOfDepartment, fetchRestEmployees } = this.props.updateFormActions;

    fetchEmployeesOfDepartment({
      employeesList: this.props.employeesList,
      emplsOfDepIds: this.props.departmentData.d_employees,
    });
    fetchRestEmployees({
      employeesList: this.props.employeesList,
      restEmployeesIds: this.props.departmentData.d_employees,
    });
  }

  validation() {
    const { toggleUpdateFormValidation } = this.props.updateFormActions;

    if (this.d_nameRef.current.value !== '') {
      this.updateDepartment();
    } else {
      toggleUpdateFormValidation(false);
    }
  }

  updateDepartment() {
    const { updateEmployee } = this.props.employeesActions;
    const { updateDepartment } = this.props.departmentsActions;
    const { toggleUpdateFormVisibility, toggleUpdateFormValidation } = this.props.updateFormActions;
    const depEmployeesData = this.props.emplsOfDep.map((empl) => empl.id);
    const DepartmentData = {
      id: this.props.departmentData.id,
      d_name: this.d_nameRef.current.value,
      d_description: this.d_descriptionTextRef.current.value,
      d_employees: depEmployeesData,

    };
    updateDepartment(DepartmentData);
    this.props.emplsOfDep.forEach((empl) => {
      if (!empl.e_departments.find((depName) => depName === this.props.departmentData.d_name)) {
        empl.e_departments.push(this.props.departmentData.d_name);
      }

      updateEmployee(empl);
    });
    toggleUpdateFormValidation(true);
    toggleUpdateFormVisibility();
  }

  render() {
    const { toggleUpdateFormVisibility } = this.props.updateFormActions;

    return (
      <div
        className="position-absolute
          card
          border-secondary
          mb-5 ml-2 mr-2 mt-3
          d-flex
          justify-content-center
          update-form-position"
      >
        <div className="card-header d-flex justify-content-between">
          <h5 className="pt-2">
            Form to edit department:
            <span className="font-weight-bold">{this.props.departmentData.d_name}</span>
          </h5>
          <button type="button" onClick={toggleUpdateFormVisibility} className="btn btn-dark">
            <FontAwesomeIcon icon="times" />
          </button>
        </div>
        <div className="card-body text-secondary col-lg-6 m-auto">

          <div className="form-row mb-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Department name</span>
              </div>
              <input
                type="text"
                ref={this.d_nameRef}
                className="form-control"
                placeholder="Enter department name"
                defaultValue={this.props.departmentData.d_name}
              />
            </div>
            {
              (
                !this.props.isUpdateFormValid
                  ? (
                    <small className="form-text text-danger pl-1">
                      Text field &quot;Department name&quot; must be filled!
                    </small>
                  )
                  : (
                    <small className="form-text text-info pl-1">
                      If you don&apos;t  change department name, name will remain by default!
                    </small>
                  )
              )

            }
          </div>
          <div className="form-group">
            <label htmlFor="description">
              Department description
              <textarea
                ref={this.d_descriptionTextRef}
                id="description"
                className="form-control resize-none"
                placeholder="Enter department description"
                rows="3"
                defaultValue={this.props.departmentData.d_description}
              />
            </label>
          </div>

          <div className="font-weight-bold text-center text-info mb-2">
            Employees of the department of
            {this.props.departmentData.d_name}
          </div>
          {
            this.props.emplsOfDep.length !== 0
              ? <UpdateFormList {...this.props} emplOfDep />
              : (
                <p className="p-3 text-danger text-center">
                  List of department employees is empty
                </p>
              )
          }
          <div className="font-weight-bold text-center text-info mb-2">
            To add employees to this department, select one or more from the list
          </div>
          {
            this.props.restEmployees.length !== 0
              ? <UpdateFormList {...this.props} />
              : <p className="p-3 text-danger text-center">List of employees to add is empty</p>
          }

        </div>
        <button
          className="btn btn-info mt-3 p-3 font-weight-bold text-uppercase"
          onClick={this.validation}
          type="button"
        >
            Update department information
        </button>
      </div>
    );
  }
}

UpdateForm.propTypes = {
  employeesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  updateFormActions: PropTypes.objectOf(PropTypes.func).isRequired,
  departmentsActions: PropTypes.objectOf(PropTypes.func).isRequired,
  employeesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  departmentData: PropTypes.shape({
    id: PropTypes.number,
    d_name: PropTypes.string,
    d_description: PropTypes.string,
    d_employees: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  emplsOfDep: PropTypes.arrayOf(PropTypes.object).isRequired,
  isUpdateFormValid: PropTypes.bool.isRequired,
  restEmployees: PropTypes.arrayOf(PropTypes.object).isRequired,

};
