import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setAuth } from '../actions/authAction';

class AuthFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            redirect: false,

        };

        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
        this.validation = this.validation.bind(this);

        this.loginRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    logOut() {
        localStorage.removeItem('auth');
        this.props.changeAuthStatus(false);
    }

    logIn() {
        localStorage.setItem('auth','true');
        this.props.changeAuthStatus(true);
        this.setState({redirect: true})
    }

    validation(event) {
        const login = this.loginRef.current.value;
        const password = this.passwordRef.current.value;

        (login === 'Admin' && password === '12345') ?
            this.logIn() :
            this.setState({isValid: !this.state.isValid});

        event.preventDefault();
    }

    render() {
        const {redirect} = this.state;

        if (redirect) {
            return <Redirect to='/'/>
        }

        if(this.props.isAuth) {
            return(
                <section className="col-lg-6 col-sm-1 m-auto h-100 d-flex flex-column justify-content-center align-items-center">
                    <h3 className="mb-5 text-center">You are already logged in!</h3>
                    <button className="btn btn-dark w-25" onClick={this.logOut}>Log out</button>
                </section>
            );
        }
        return (
            <form className="col-lg-6 col-sm-1 m-auto h-100 d-flex flex-column justify-content-center" onSubmit={this.validation}>
                <h1 className="h3 mb-3 font-weight-normal text-center">Authorization</h1>
                <div className="form-row mb-3">
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="input" ref={this.loginRef} className="form-control" placeholder="Enter login" required=""
                           autoFocus="" autoComplete="on"/>
                    {!this.state.isValid ?
                        <small className="form-text text-danger"> Login entered incorrectly!</small> :
                        null
                    }
                </div>
                <div className="form-row mb-3">
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" ref={this.passwordRef} className="form-control" placeholder="Password"
                           required="" autoComplete="off"/>
                    {!this.state.isValid ?
                        <small className="form-text text-danger">Password entered incorrectly!</small>:
                        null
                    }
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>

            </form>

        )
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthFormContainer);