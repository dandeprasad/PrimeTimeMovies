import React from "react";
import {Row, Col,Navbar,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
  import { NavLink as RRNavLink } from 'react-router-dom';
import { connect } from "react-redux";
import MovieHeader from "../moviehome/movieHeader";
import '../../css/moviedetails/movie-details.scss';
import MovieFooter from "../moviehome/movieFooter";

import saaho from "../../img/saaho.jpg"
import playvideo from "../../imgsvg/play_circle_outline.svg";

import DirectBooking from "./directBooking"
import '../../css/util/util.scss';
import PropTypes from 'prop-types';
class MovieDetails extends React.Component {

  constructor(props) {
    super(props);
  }
  componentWillMount() {

  }
  submitMovieTicket(){

     }

  render() {

  return (

<>

<div className="container-fluid">
<MovieHeader/>
<Row>
    <Col style={{padding:'2rem'}} xs="12" sm="12" md="12">
    </Col>
  
  
    <Col xs="12" sm="12" md="12">
      <Row>
    <Col xs="12" sm="12" md="3">
    <img src={saaho} id="bg" alt=""  style={{position:'absolute',width:'10rem',height:'18rem',right:0,opacity:0.5}}/>
    </Col>

    <Col xs="12" sm="12" md="3" style={{display:'flex',justifyContent:'center',padding:'1rem'}}>

    <Row>
    <Col xs="12" sm="12" md="12">
        <h5>SAAHO <span>(2020)</span></h5>
        </Col>
<Col xs="6" sm="6" md="4" >
<p>Subtitles</p>
<p>English [CC]</p>
<div className='vt-userhome'/>
</Col>
<Col xs="6" sm="6" md="8" >
<p>Audio Languages</p>
<p>Telugu</p>
</Col>
</Row>
</Col>
</Row>
    </Col>
    
    <Col xs="12" sm="12" md="12">
    <Col xs="12" sm="12" md="3">
    </Col>
    </Col>
</Row>
<Row className="movie-detail-center">
  
<Col xs="12" sm="12" md="3">

  </Col>
  <Col xs="12" sm="12" md="2">
  <span><img src={playvideo} id="bg" alt=""/></span>
    <h5 style={{display:'inline'}}>WATCH THE TRAILER</h5>
    <div className='vt-userhome'/>
  </Col>
  <Col xs="12" sm="12" md="4">
  <ul className='list-horizontal font-small secondary-color' style={{paddingInlineStart:'initial'}}>
  <li style={{paddingRight:"0.5rem"}}>2hrs 2min</li>
  <li style={{paddingRight:"0.5rem"}}>International,action</li>
  <li style={{paddingRight:"0.5rem"}}>March 2020</li>
  </ul>
  </Col>
  <Col xs="12" sm="12" md="3">
  
  <DirectBooking/>
  </Col>
</Row>
<Row>
<Col sm="12" md={{ size: 11, offset: 1 }}>
        <Navbar>
        <Nav>
        <NavItem className="user-profile-navitem" >
                  <NavLink to="/account"  tag={RRNavLink}  >SUMMARY</NavLink>
                  </NavItem>
            { /*     <NavItem className="user-profile-navitem" >
                    <NavLink   to="/mytickets" tag={RRNavLink} >My Tickets</NavLink>
                    
                  </NavItem>
                  <NavItem className="user-profile-navitem" >
                    <NavLink  to="/shoppingcart" tag={RRNavLink}>Shopping Cart</NavLink>
                  </NavItem>*/}

                  </Nav>
                  </Navbar>

        </Col>
        <Col sm="12" md={{ size: 11, offset: 1 }}>
          <Row style={{paddingLeft:'4.5rem'}}>
          <Col xs="12" sm="12" md="12">
          <h5>SYNOPSIS</h5>
            </Col>
            <Col xs="12" sm="12" md="12" className='font-small secondary-color'>
            <p>Saaho is a 2019 Indian action thriller film written and directed by Sujeeth. It was produced by Vamsi Krishna Reddy, Pramod Uppalapati under their banner UV Creations. Filmed simultaneously in Hindi, Tamil and Telugu, it stars Prabhas and Shraddha Kapoor, marking the former's Hindi debut and the latter's debut in South Indian cinema. The film follows an expansive criminal syndicate engulfed in a power struggle following the death of their leader.
            </p>
            </Col>
            <Col xs="12" sm="12" md="12">
          <h5>CAST & CREW</h5>
            </Col>
            <Col xs="12" sm="12" md="12">
          <Row>
          <Col xs="6" sm="6" md="3" style={{display:'flex',justifyContent:'center',padding:'1rem'}}>
            <Row>
            <Col xs="6" sm="6" md="5">
            <img src="img/students.jpg" id="bg" alt=""  style={{borderRadius:'50%',width:'4rem',height:'4rem'}}/>
            </Col>
            <Col xs="6" sm="6" md="7">
        <Row>
          <Col xs="12" sm="12" md="12">
          Hero
          </Col>
          <Col xs="12" sm="12" md="12">
          Prabas
          
          </Col>
          
        </Row>
        <div className='vt-userhome'/>
            </Col>
            </Row>



</Col>
<Col xs="6" sm="6" md="3" style={{display:'flex',justifyContent:'center',padding:'1rem'}}>
            <Row>
            <Col xs="6" sm="6" md="5">
            <img src="img/students.jpg" id="bg" alt=""  style={{borderRadius:'50%',width:'4rem',height:'4rem'}}/>
            </Col>
            <Col xs="6" sm="6" md="7">
        <Row>
          <Col xs="12" sm="12" md="12">
          Heroine
          </Col>
          <Col xs="12" sm="12" md="12">
          Shraddha Kapoor
          
          </Col>
          
        </Row>
        <div className='vt-userhome'/>
            </Col>
            </Row>



</Col>
<Col xs="6" sm="6" md="3" style={{display:'flex',justifyContent:'center',padding:'1rem'}}>
            <Row>
            <Col xs="6" sm="6" md="5">
            <img src="img/students.jpg" id="bg" alt=""  style={{borderRadius:'50%',width:'4rem',height:'4rem'}}/>
            </Col>
            <Col xs="6" sm="6" md="7">
        <Row>
          <Col xs="12" sm="12" md="12">
          Police Officer
          </Col>
          <Col xs="12" sm="12" md="12">
          Neil Nithin Mukesh
          
          </Col>
          
        </Row>
        <div className='vt-userhome'/>
            </Col>
            </Row>



</Col>
<Col xs="6" sm="6" md="3" style={{display:'flex',justifyContent:'center',padding:'1rem'}}>
            <Row>
            <Col xs="6" sm="6" md="5">
            <img src="img/students.jpg" id="bg" alt=""  style={{borderRadius:'50%',width:'4rem',height:'4rem'}}/>
            </Col>
            <Col xs="6" sm="6" md="7">
        <Row>
          <Col xs="12" sm="12" md="12">
          Director
          </Col>
          <Col xs="12" sm="12" md="12">
          Sujeeth
          
          </Col>
          
        </Row>
        <div className='vt-userhome'/>
            </Col>
            </Row>



</Col>
          </Row>
            </Col>
          </Row>

        </Col>
        <Col xs="12" sm="12" md="12" style={{paddingBottom:'5rem'}}>
          </Col>
        </Row>
        <Row>
    <Col xs="12" sm="12" md="12">
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
  
  };
};
const mapDispatchToProps = (dispatch) => {
  return {

  };
};
export default connect(mapStateToProps,mapDispatchToProps)(MovieDetails);
MovieDetails.propTypes = {
  
}
