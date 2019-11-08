import MainContainer from './components/MainContainer';
import AuthFormContainer from './components/AuthFormContainer';
import Deps from './components/DepartmentsContainer';
import Empls from './components/EmployeesContainer';
import PageNotFound from './components/PageNotFoundComponent';

export default [
    {
        path: '/',
        component: MainContainer,
        exact: true
    },
    {
        path: '/auth',
        component: AuthFormContainer,
        exact: true
    },
    {
        path: '/departments',
        component: Deps,
        exact: true
    },
    {
        path: '/employees',
        component: Empls,
        exact: true
    },
    {
        path: '*',
        component: PageNotFound,
        exact: true
    },

];