import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthForm from "../components/AuthForm";

import * as authAction from '../actions/authActions';

const mapDispatchToProps = (dispatch) => ({
    authActions: bindActionCreators(authAction, dispatch),

});

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isValid: state.auth.isValid,
        isRedirect: state.auth.isRedirect,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);