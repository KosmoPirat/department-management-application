import { connect } from 'react-redux';

import Main from '../components/Main';

const mapStateToProps = (state) => ({
  depsList: state.departments.depsList,

});

export default connect(mapStateToProps)(Main);
