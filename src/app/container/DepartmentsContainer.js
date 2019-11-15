import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Departments from "../components/Departments";

import { fetchDepartments } from "../actions/departmentsActions";
import { toggleAddFormVisibility } from "../actions/addFormActions";
import { updateAuthFromLocalStorage, toggleRedirection } from "../actions/authActions";


const mapDispatchToProps = (dispatch) => {
    return {
        departmentAction: bindActionCreators({
            fetchDepartments
        }, dispatch),

        addFormActions: bindActionCreators({
            toggleAddFormVisibility
        }, dispatch),

        authActions: bindActionCreators({
            toggleRedirection,
            updateAuthFromLocalStorage
        }, dispatch),
    };
};

const mapStateToProps = (state) => {
    return {
        departmentList: state.departments.departmentsList,
        isVisible: state.addForm.isAddFormVisible,
        isAuth: state.auth.isAuth,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Departments);