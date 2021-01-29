import React from "react";
import { Row, Col,
    NavItem,
    NavLink,Nav  } from 'reactstrap';
import { connect } from "react-redux";
import appstore from "../../imgsvg/apple-app-store.svg";
import playstore from "../../imgsvg/playstore.svg";
import '../../css/moviehome/movie-home.scss';
import { NavLink as RRNavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
class MovieFooter extends React.Component {

  constructor(props) {
    super(props);

  }
  componentWillMount() {

  }

  render() {

  return (

<>

<Row className="moive-header">
<Col xs="12" sm="12" md="3">
<Row style={{padding:"1rem 0rem"}}>
    <Col xs="12" sm="12" md="12" style={{display:"flex",justifyContent:"center"}}>
    
    <p style={{fontSize:"small"}}>Download PrimeTimeMovies App</p>
    </Col>
    <Col xs="12" sm="12" md="6">
    
    <button  type="submit"   className="btn movie-footer-button"><span style={{padding:'0.2rem'}}><img  src={appstore} id="bg" alt=""/></span>App Store</button>
    </Col>
    <Col xs="12" sm="12" md="6"> 
    <button type="submit"   className="btn movie-footer-button1"><span style={{padding:'0.2rem'}}><img  src={playstore} id="bg" alt=""/></span>Google Play</button>
    </Col>
</Row>

</Col>
<Col xs="12" sm="12" md="5">
<Row style={{padding:"1rem"}}>
    <Col xs="12" sm="12" md="12" style={{display:"flex",justifyContent:"center"}}>
    <p style={{letterSpacing:"0.075rem",marginBottom:"0px"}}>PrimeTimeMovies</p>
    
    </Col>
    <Col xs="12" sm="12" md="12">
    <hr className='movie-home-hr'/>
    </Col>
    <Col xs="12" sm="12" md="12" style={{display:"flex",justifyContent:"center"}}>
    <p style={{fontSize:"small"}}>CopyRight PrimeTimeMovies 2020. All Rights Reserved</p>
    </Col>
   
    

</Row>

</Col>
<Col xs="12" sm="12" md="2">
<Row>
    <Col xs="12" sm="12" md="12" style={{display:"flex",justifyContent:"center"}}>
    <Nav>
    <NavItem className='prehome-navitem'>
        <NavLink to="#" tag={RRNavLink}  className="prehome-nav-link" style={{fontSize:"small"}}>Terms & Conditions</NavLink>
      </NavItem>
      </Nav>
    </Col>
    <Col xs="12" sm="12" md="12" style={{display:"flex",justifyContent:"center"}}>
    <Nav>
    <NavItem className='prehome-navitem'>
        <NavLink to="#" tag={RRNavLink}  className="prehome-nav-link" style={{fontSize:"small"}}>About Us</NavLink>
      </NavItem>
      </Nav>
    </Col>
</Row>
</Col>
<Col xs="12" sm="12" md="2">
<Row>
    <Col xs="12" sm="12" md="12" style={{display:"flex",justifyContent:"center"}}>
    <Nav>
    <NavItem className='prehome-navitem'>
        <NavLink to="#" tag={RRNavLink}  className="prehome-nav-link" style={{fontSize:"small"}}>Privacy Policy</NavLink>
      </NavItem>
      </Nav>
    </Col>
    <Col xs="12" sm="12" md="12" style={{display:"flex",justifyContent:"center"}}>
    <Nav>
    <NavItem className='prehome-navitem'>
        <NavLink to="#" tag={RRNavLink}  className="prehome-nav-link" style={{fontSize:"small"}}>FAQ</NavLink>
      </NavItem>
      </Nav>
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
export default connect(mapStateToProps,mapDispatchToProps)(MovieFooter);
MovieFooter.propTypes = {
  
}
