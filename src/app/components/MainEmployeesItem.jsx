import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class MainEmployeesItem extends Component {
  render() {
    return (
      <>
        <li className="list-group-item text-center">
          <FontAwesomeIcon className="mr-3" icon="user-tie" />
          {this.props.e_name}
        </li>
      </>
    );
  }
}
