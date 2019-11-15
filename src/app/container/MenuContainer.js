import { connect } from 'react-redux';

import Menu from "../components/Menu";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,

    }
};
// noinspection JSUnusedGlobalSymbols
export default connect(mapStateToProps)(Menu);