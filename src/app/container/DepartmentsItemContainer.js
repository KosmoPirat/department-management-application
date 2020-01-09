import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DepartmentsItem from '../components/DepartmentsItem';

import { toggleUpdateFormVisibility } from '../actions/updateFormActions';
import { toggleRedirection, updateAuthFromLocalStorage } from '../actions/authActions';
import { deleteDepartment } from '../actions/departmentsActions';

const mapDispatchToProps = (dispatch) => ({
  updateFormActions: bindActionCreators({
    toggleUpdateFormVisibility,
  }, dispatch),

  authActions: bindActionCreators({
    toggleRedirection,
    updateAuthFromLocalStorage,
  }, dispatch),

  departmentsActions: bindActionCreators({
    deleteDepartment,
  }, dispatch),
});

const mapStateToProps = (state) => ({
  isVisible: state.updateForm.isUpdateFormVisible,
  isAuth: state.auth.isAuth,
  isRedirect: state.auth.isRedirect,

});

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsItem);
