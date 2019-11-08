import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import * as employeesAction from "../actions/employeesActions";
import {connect} from "react-redux";

class DepartmentEditContainer extends Component {
    constructor(props) {
        super(props);

        this.updateDepartment = this.updateDepartment.bind(this);

        this.d_nameRef = React.createRef();
        this.usernameRef = React.createRef();
        this.emailRef = React.createRef();
        this.phoneRef = React.createRef();
        this.websiteRef = React.createRef();
    }

    updateDepartment() {
        // Добавление пользователя
        const deparmentData = {
            id: this.props.id,
            d_name: this.d_nameRef.current.value,
            username: this.usernameRef.current.value,
            phone: this.phoneRef.current.value,
            website: this.websiteRef.current.value,
            email: this.emailRef.current.value,
        };

        this.nameRef.current.value = '';
        this.usernameRef.current.value = '';
        this.phoneRef.current.value = '';
        this.websiteRef.current.value = '';
        this.emailRef.current.value = '';
    }
    render() {
        return (
            <div className="card-img-overlay card border-secondary ">
                <div className="card-header d-flex justify-content-between">
                    <h5 className="pt-2">Form to edit department: <span className="font-weight-bold">{this.props.d_name}</span></h5>
                    <button onClick={this.props.toggleVisibility} className="btn btn-dark">X</button>
                </div>
                <div className="card-body text-secondary">

                    <div className="form-row mb-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Department name</span>
                            </div>
                            <input type="text" ref={this.d_nameRef} className="form-control" placeholder="Enter department name" value={this.props.d_name}/>
                        </div>
                        <small className="form-text text-danger pl-1">If you don't  change department name, name will remain by default!</small>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Имя пользователя</span>
                        </div>
                        <input type="text" ref={this.usernameRef} className="form-control" placeholder="Введите имя пользователя (Nickname)"/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Email</span>
                        </div>
                        <input type="email" ref={this.emailRef} className="form-control" placeholder="Введите email (user@yourdomain.ru)"/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Телефон</span>
                        </div>
                        <input type="tel" ref={this.phoneRef} className="form-control" placeholder="Введите телефон"/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Сайт</span>
                        </div>
                        <input type="text" ref={this.websiteRef} className="form-control" placeholder="Введите Ваш сайт"/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(employeesAction, dispatch)
    };
};

const mapStateToProps = (state) => {
    return {
        empl: state.employees.employeesList,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentEditContainer);