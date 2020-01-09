import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.validation = this.validation.bind(this);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  logOut() {
    const { setAuth } = this.props.authActions;
    setAuth('false');
  }

  logIn() {
    const { toggleRedirection, setAuth } = this.props.authActions;
    setAuth('true');
    toggleRedirection();
  }

  validation(event) {
    const { toggleValidation } = this.props.authActions;
    const login = this.loginRef.current.value;
    const password = this.passwordRef.current.value;

    if (login === 'Admin' && password === '12345') {
      this.logIn();
    } else {
      toggleValidation(false);
    }


    event.preventDefault();
  }

  render() {
    const { toggleRedirection } = this.props.authActions;
    if (this.props.isRedirect) {
      toggleRedirection();
      return <Redirect to="/" />;
    }

    if (this.props.isAuth === 'true') {
      return (
        <section className="auth-margin col-lg-6 col-sm-1 d-flex flex-column justify-content-center align-items-center">
          <h3 className="mb-5 text-center">You are already logged in!</h3>
          <button className="btn btn-dark w-25" onClick={this.logOut}>Log out</button>
        </section>
      );
    }
    return (
      <form className="auth-margin col-lg-6 col-sm-1 d-flex flex-column justify-content-center" onSubmit={this.validation}>
        <h1 className="h3 mb-3 font-weight-normal text-center">Authorization</h1>
        <div className="form-row mb-3">
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input
            type="input"
            ref={this.loginRef}
            className="form-control"
            placeholder="Enter login"
            required=""
            autoFocus=""
            autoComplete="on"
          />
        </div>
        <div className="form-row mb-3">
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input
            type="password"
            ref={this.passwordRef}
            className="form-control"
            placeholder="Password"
            required=""
            autoComplete="off"
          />
          {
                            !this.props.isValid
                            && <small className="form-text text-danger">There is no user record corresponding to this identifier.</small>
                        }
        </div>
        <button className="btn btn-lg btn-info btn-block" type="submit">Log in</button>

      </form>
    );
  }
}
