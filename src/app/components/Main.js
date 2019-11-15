import React, { Component } from "react";

import MainItem from "../container/MainItemContainer";

export default class Main extends Component {
    render() {
        const departmentsList = this.props.departmentsList.map(dep => {
            return <MainItem key={dep.id} d_employeesIds={dep.d_employees} d_name={dep.d_name} d_description={dep.d_description}/>
        });
        return (
                <>
                    <h1 className="text-center mb-3 mt-3">Department information</h1>
                    <h5 className="text-center mb-4">Here you can complete information about departments and employees</h5>
                    <div className="row">
                        {departmentsList}
                    </div>
                </>
        );
    }
}