import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UpdateFormListItem from '../components/UpdateFormListItem';

import {
  addEmployeesOfDepartment,
  deleteRestEmployees,
  deleteEmployeesOfDepartment,
  addRestEmployees,
} from '../actions/updateFormActions';

const mapDispatchToProps = (dispatch) => ({
  updateFormActions: bindActionCreators({
    addEmployeesOfDepartment,
    deleteRestEmployees,
    deleteEmployeesOfDepartment,
    addRestEmployees,
  }, dispatch),

});

const mapStateToProps = (state) => ({
  emplsOfDep: state.updateForm.emplsOfDep,
  restEmployees: state.updateForm.restEmployees,

});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateFormListItem);
