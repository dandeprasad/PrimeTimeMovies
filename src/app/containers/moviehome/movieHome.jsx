import React from "react";
import { Row, Col } from 'reactstrap';

import { connect } from "react-redux";
import MovieHeader from "./movieHeader";
import MovieTop from "./movieTop";
import YourMovies from "./yourMovies";
import MovieFooter from "./movieFooter";
import UpcomingMovies from "./UpcomingMovies";
import MovieHomeTT from "./movieHomeTT";
import CurrentRunningMovies from "./CurrentRunningMovies";
import '../../css/moviehome/movie-home.scss';
import Sidebar from './sideBar';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
class MovieHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parentTag: false
  };
  }
  componentWillMount() {

  }

  render() {
    const { isAuthenticated } =this.props.auth;
    if (!isAuthenticated) {
      return <Redirect to='/'/>;
    }
  return (

<>
{ this.state.parentTag ? <Sidebar HandleChangeToggle1 = {() => {

this.setState({
  parentTag: !this.state.parentTag
})
}}
/>:<></> }

<div className="container-fluid">

<Row>
<Col xs="12" sm="12" md="12">
<MovieHeader
HandleChangeToggle = {() => {

      this.setState({
        parentTag: !this.state.parentTag
  })
}}/>
<MovieTop/>

<YourMovies/>
<hr className='movie-home-hr'/>
<CurrentRunningMovies/>
<hr className='movie-home-hr'/>
<UpcomingMovies/>
<hr className='movie-home-hr'/>
<MovieHomeTT/>
<MovieFooter/>
</Col>
</Row>
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
export default connect(mapStateToProps,mapDispatchToProps)(MovieHome);
MovieHome.propTypes = {
  auth: PropTypes.object.isRequired
}
