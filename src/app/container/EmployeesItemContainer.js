import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EmployeesItem from "../components/EmployeesItem";

import { deleteEmployee } from "../actions/employeesActions";
import { toggleRedirection, updateAuthFromLocalStorage } from "../actions/authActions";

const mapDispatchToProps = (dispatch) => {
    return {
        employeesActions: bindActionCreators({
            deleteEmployee
        }, dispatch),

        authActions: bindActionCreators({
            toggleRedirection,
            checkAuth: updateAuthFromLocalStorage
        }, dispatch),

    };
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isRedirect: state.auth.isRedirect,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesItem);
