import Main from './container/MainContainer';
import AuthForm from './container/AuthFormContainer';
import Departments from './container/DepartmentsContainer';
import Employees from './container/EmployeesContainer';
import PageNotFound from './components/PageNotFound';

export default [
    {
        path: '/',
        component: Main,
        exact: true
    },
    {
        path: '/auth',
        component: AuthForm,
        exact: true
    },
    {
        path: '/departments',
        component: Departments,
        exact: true
    },
    {
        path: '/employees',
        component: Employees,
        exact: true
    },
    {
        path: '*',
        component: PageNotFound,
        exact: true
    },

];