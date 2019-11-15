import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand">
                        <img className="logo-size" src={this.props.brand} alt="Departmets App"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto">
                            {this.props.children}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <Link to="/auth" className={`btn ${this.props.isAuth === 'true' ? 'btn-secondary' : 'btn-info'}`}>
                                {this.props.isAuth === 'true' ? 'Admin (Log Out)' : 'Log In'}
                            </Link>
                        </form>
                    </div>
                </nav>
        )
    }
}