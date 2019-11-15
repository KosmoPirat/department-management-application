import {connect} from "react-redux";

import Main from "../components/Main";

const mapStateToProps = (state) => {
    return {
        departmentsList: state.departments.departmentsList,

    };
};

// noinspection JSUnusedGlobalSymbols
export default connect(mapStateToProps)(Main);
