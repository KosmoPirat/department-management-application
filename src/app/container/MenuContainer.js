import { connect } from 'react-redux';

import Menu from '../components/Menu';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,

});

export default connect(mapStateToProps)(Menu);
