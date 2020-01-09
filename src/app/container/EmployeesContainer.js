import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Employees from '../components/Employees';

import { fetchEmployees } from '../actions/employeesActions';
import { toggleAddFormVisibility } from '../actions/addFormActions';
import { toggleRedirection, updateAuthFromLocalStorage } from '../actions/authActions';

const mapDispatchToProps = (dispatch) => ({
  employeesActions: bindActionCreators({
    fetchEmployees,
  }, dispatch),

  addFormActions: bindActionCreators({
    toggleAddFormVisibility,
  }, dispatch),

  authActions: bindActionCreators({
    toggleRedirection,
    updateAuthFromLocalStorage,
  }, dispatch),

});

const mapStateToProps = (state) => ({
  employeesList: state.employees.employeesList,
  isVisible: state.addForm.isAddFormVisible,
  isAuth: state.auth.isAuth,
  isRedirect: state.auth.isRedirect,

});

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
