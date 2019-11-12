import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrashAlt, faPlusSquare, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faEdit, faTrashAlt, faPlusSquare, faTimes, faSearch);


import routes from '../routes';

import MenuContainer from './MenuContainer';
import MenuItemComponent from './MenuItemComponent';

import * as authActions from '../actions/authAction';
import {bindActionCreators} from "redux";

class LayoutContainer extends React.Component {
    constructor(props) {
        super(props);
        this.brand = "/images/logo.svg";
    }

    isActive(href) {
        return window.location.pathname === href;
    }

    verifyAuth() {
        const { setAuth } = this.props.actions;
        if(localStorage.getItem('auth')) {
            setAuth(true);
        }
    }

    componentDidMount() {
        this.verifyAuth()
    }

    render() {

        return (
            <>
                <MenuContainer brand={this.brand}>
                    <MenuItemComponent href="/" active={this.isActive('/department-management-application/')}>
                        Главная
                    </MenuItemComponent>
                    <MenuItemComponent href="/departments/" active={this.isActive('/departments/')}>
                        Подразделения
                    </MenuItemComponent>
                    <MenuItemComponent href="/employees/" active={this.isActive('/employees/')}>
                        Сотрудники
                    </MenuItemComponent>
                </MenuContainer>
                <div className="container h-100 mb-5">
                    <div className="row h-100">
                        <div className="col-12 h-100">
                            <Switch>
                                {routes.map((route, index) => <Route key={index} {...route}/>)}
                            </Switch>
                        </div>
                    </div>
                </div>
                <footer className="card-footer position-fixed fixed-bottom bg-light">
                    &copy; 2019
                </footer>
            </>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(authActions, dispatch)
    };
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
