import {connect} from "react-redux";

import MainItem from "../components/MainItem";

const mapStateToProps = (state) => {
    return {
        employeesList: state.employees.employeesList,
        d_employees: state.departments.d_employees,

    };
};

export default connect(mapStateToProps)(MainItem);
