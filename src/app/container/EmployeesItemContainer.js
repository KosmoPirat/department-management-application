import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EmployeesItem from '../components/EmployeesItem';

import { deleteEmployee } from '../actions/employeesActions';
import { toggleRedirection, updateAuthFromLocalStorage } from '../actions/authActions';

const mapDispatchToProps = (dispatch) => ({
  employeesActions: bindActionCreators({
    deleteEmployee,
  }, dispatch),

  authActions: bindActionCreators({
    toggleRedirection,
    checkAuth: updateAuthFromLocalStorage,
  }, dispatch),

});

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  isRedirect: state.auth.isRedirect,

});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesItem);
