import React from 'react';
import PropTypes from 'prop-types';

import UpdateFormListItem from '../container/UpdateFormListItemContainer';

const UpdateFormList = (props) => {
  let employees;
  let restEmployees;
  if (props.emplOfDep) {
    employees = props.emplsOfDep.map((empl) => (
      <UpdateFormListItem key={empl.id} e_name={empl.e_name} emplOfDep />
    ));
  } else {
    restEmployees = props.restEmployees.map((empl) => (
      <UpdateFormListItem key={empl.id} e_name={empl.e_name} emplOfDep={false} />
    ));
  }

  return (
    <>
      <ul className="list-group mb-3">
        {employees || restEmployees}
      </ul>
    </>
  );
};

UpdateFormList.propTypes = {
  emplOfDep: PropTypes.bool.isRequired,
  emplsOfDep: PropTypes.arrayOf(PropTypes.elementType).isRequired,
  restEmployees: PropTypes.arrayOf(PropTypes.elementType).isRequired,

};

export default UpdateFormList;
