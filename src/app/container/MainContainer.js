import {connect} from "react-redux";

import Main from "../components/Main";

const mapStateToProps = (state) => {
    return {
        departmentsList: state.departments.departmentsList,

    };
};

export default connect(mapStateToProps)(Main);
