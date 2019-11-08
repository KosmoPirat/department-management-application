import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import LayoutContainer from './app/components/LayoutContainer';

import './css/bootstrap.min.css';

import store from './app/store';


ReactDom.render(
    <Provider store={store}>
        <Router basename="/department-management-application">
            <LayoutContainer/>
        </Router>
    </Provider>,
    document.getElementById('root')
);