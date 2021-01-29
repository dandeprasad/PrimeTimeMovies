import React from "react";
import { Row, Col,Navbar,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
    import { NavLink as RRNavLink } from 'react-router-dom';
import { connect } from "react-redux";
import '../../css/moviehome/movie-home.scss';
import '../../css/userprofile/user-home.scss';
import UserProfile from "./userProfile";
import MovieHeader from "../moviehome/movieHeader";
import PropTypes from 'prop-types';
class UserMainProfile extends React.Component {

  constructor(props) {
    super(props);
  }
  componentWillMount() {

  }


  render() {

  return (

<>

<Row>
<Col xs="12" sm="12" md="12" style={{display:'flex',justifyContent:'center'}}>
<img src="img/students.jpg" id="bg" alt=""  style={{borderRadius:'50%',width:'6rem',height:'6rem',opacity:0.5}}/>
</Col>
<Col xs="12" sm="12" md="12" style={{display:'flex',justifyContent:'center',padding:'1rem'}}>
<p>Dande Reddy Prasad</p>
</Col>
<Col xs="12" sm="12" md="12">
<hr className='movie-user-hr'/>
</Col>


<Col xs="12" sm="12" md="12" style={{padding:'1rem'}} >
<Row >
<Col xs="12" sm="12" md="6" style={{fontWeight:'500'}} >
Gender
    </Col>
    <Col xs="12" sm="12" md="6">
Male
    </Col>
</Row>
</Col> 

<Col xs="12" sm="12" md="12" style={{padding:'1rem'}}>
<Row >
<Col xs="12" sm="12" md="6" style={{fontWeight:'500'}} >
DOB
    </Col>
    <Col xs="12" sm="12" md="6">
28-08-1994
    </Col>
</Row>
</Col> 
<Col xs="12" sm="12" md="12" style={{padding:'1rem'}}>
<Row >
<Col xs="12" sm="12" md="6" style={{fontWeight:'500'}} >
Phone Number
    </Col>
    <Col xs="12" sm="12" md="6">
9346122733
    </Col>
</Row>
</Col> 
<Col xs="12" sm="12" md="12" style={{padding:'1rem'}}>
<Row >
<Col xs="12" sm="12" md="6" style={{fontWeight:'500'}} >
Email Id
    </Col>
    <Col xs="12" sm="12" md="6">
<p style={{overflowWrap:'anywhere'}}>dandereddyprasad@gmail.com</p>
    </Col>
</Row>
</Col> 
</Row>

</>


);
  }
}
const mapStateToProps = (state,ownProps) => {
  return {
  
  };
};
const mapDispatchToProps = (dispatch) => {
  return {

  };
};
export default connect(mapStateToProps,mapDispatchToProps)(UserMainProfile);
UserMainProfile.propTypes = {
  
}
