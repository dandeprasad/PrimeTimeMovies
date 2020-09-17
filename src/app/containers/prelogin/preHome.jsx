import React from "react";
import { Row, Col } from 'reactstrap';
import MovieCarousel from './MovieCarousel';
import { Redirect } from 'react-router';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class PreHome extends React.Component {

  constructor(props) {
    super(props);

  }
  componentWillMount() {

  }

  render() {
    {/* block the user after user login to access prelogin screen*/}
    const { isAuthenticated } =this.props.auth;
    if (isAuthenticated) {
      return <Redirect to='/home'/>;
    }
  return (

<>
<div className="container-fluid p-0">
          <MovieCarousel/>
          </div>
</>


);
  }
}
const mapStateToProps = (state,ownProps) => {
  return {
        auth:state.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {

  };
};
export default connect(mapStateToProps,mapDispatchToProps)(PreHome);
PreHome.propTypes = {
  auth: PropTypes.object.isRequired
}