import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrashAlt, faPlusSquare, faTimes, faSearch, faUserTie } from '@fortawesome/free-solid-svg-icons';
library.add(faEdit, faTrashAlt, faPlusSquare, faTimes, faSearch, faUserTie);


import routes from '../routes';

import MenuContainer from '../container/MenuContainer';
import MenuItem from './MenuItem';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.brand = "/department-management-application/images/logo.svg";
    }

    isActive(href) {
        return window.location.pathname === href;
    }

    render() {

        return (
            <>
                <MenuContainer brand={this.brand}>
                    <MenuItem href="/" active={this.isActive('/department-management-application/')}>
                        Main
                    </MenuItem>
                    <MenuItem href="/departments/" active={this.isActive('/departments/')}>
                        Departments
                    </MenuItem>
                    <MenuItem href="/employees/" active={this.isActive('/employees/')}>
                        Employees
                    </MenuItem>
                </MenuContainer>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12">
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

