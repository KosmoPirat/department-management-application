import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddForm from '../components/AddForm';

import { toggleAddFormValidation, toggleAddFormVisibility } from '../actions/addFormActions';
import { addDepartment } from '../actions/departmentsActions';
import { addEmployee } from '../actions/employeesActions';

const mapDispatchToProps = (dispatch) => ({
  addFormActions: bindActionCreators({
    toggleAddFormValidation,
    toggleAddFormVisibility,
  }, dispatch),
  departmentsActions: bindActionCreators({
    addDepartment,
  }, dispatch),
  employeesActions: bindActionCreators({
    addEmployee,
  }, dispatch),

});

const mapStateToProps = (state) => ({
  isVisible: state.addForm.isAddFormVisible,
  displayData: state.addForm.displayData,
  depsList: state.departments.depsList,
  employeesList: state.employees.employeesList,
  isValid: state.addForm.isAddFormValid,

});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
