import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrashAlt, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
library.add(faEdit, faTrashAlt, faPlusSquare);


import routes from '../routes';

import MenuContainer from './MenuContainer';
import MenuItem from './MenuItem';

import { setAuth } from '../actions/authAction';

class LayoutContainer extends React.Component {
    constructor(props) {
        super(props);
        this.brand = "/images/logo.svg";
    }

    isActive(href) {
        return window.location.pathname === href;
    }

    verifyAuth() {
        if(localStorage.getItem('auth')) {
            this.props.changeAuthStatus(true);
        }
    }

    componentDidMount() {
        this.verifyAuth()
    }

    render() {

        return (
            <>
                <MenuContainer brand={this.brand}>
                    <MenuItem href="/" active={this.isActive('/department-management-application')}>
                        Главная
                    </MenuItem>
                    <MenuItem href="/departments" active={this.isActive('/departments')}>
                        Подразделения
                    </MenuItem>
                    <MenuItem href="/employees" active={this.isActive('/employees')}>
                        Сотрудники
                    </MenuItem>
                </MenuContainer>
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-12 h-100">
                            <Switch>
                                {routes.map((route, index) => <Route key={index} {...route}/>)}
                            </Switch>
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    &copy; 2019
                </footer>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
     changeAuthStatus(isAuth) {
        dispatch(setAuth(isAuth));
    }
});

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
