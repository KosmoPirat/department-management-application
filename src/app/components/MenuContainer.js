import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class MenuContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logInTxt: 'Log In',
            logOutTxt: 'Admin (Log Out)',
            logInBtnColor: 'btn-primary',
            logOutBtnColor: 'btn-dark'
        };
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="col-9 d-flex">
                        <Link to="/" className="navbar-brand">
                            <img style={{width: "80%"}} src={this.props.brand} alt="Departmets App"/>
                        </Link>

                        <div className="collapse navbar-collapse ">
                            <ul className="navbar-nav">
                                {this.props.children}
                            </ul>
                        </div>
                    </div>
                    <div className="col-3 justify-content-end">
                        <Link to="/auth" className={`btn ${this.props.isAuth ? this.state.logOutBtnColor : this.state.logInBtnColor}`}>
                            {this.props.isAuth ? this.state.logOutTxt : this.state.logInTxt}
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,

    }
};

export default connect(mapStateToProps)(MenuContainer);