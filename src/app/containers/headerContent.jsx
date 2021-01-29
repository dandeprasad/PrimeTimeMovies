import React from "react";
import { Breadcrumb, BreadcrumbItem,Container, Row, Col,Card,CardTitle,CardBody,CardText,Button, Collapse,Navbar,NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem  } from 'reactstrap';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { NavLink as RRNavLink } from 'react-router-dom';
import {setName} from "../actions/userActions";
import androidlogo from "../img/android-logo.png";
import PropTypes from 'prop-types';
import { logout } from '../actions/userActions';
//export class App extends React.Component {   commenting because below redux will take care of attacting
 class HeaderContent extends React.Component {


//     changeUsername() {
// this.props.setName("king");
//     }
constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
  this.state = {
    isOpen: false,
      isOpen1: false,
    bcolor1:'red'
  };
}
componentWillMount() {


}


toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}
toggle1() {
  this.setState({
    isOpen1: !this.state.isOpen1
  });
}

logout(e) {
  e.preventDefault();
  this.props.Submitlogout();
}

    render() {
var dcolor = '#010c29';
const { isAuthenticated } =this.props.auth;
const userLinks = (
  <ul className="nav navbar-nav navbar-right">
    <NavItem>
       <NavLink to="/Events" tag={RRNavLink}  className="nav-header-glance">FESTS</NavLink>
    </NavItem>
  <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
  </ul>
);

const guestLinks = (
  <ul className="nav navbar-nav navbar-right">
    <NavItem >
        <NavLink to="/Home" activeClassName="active " tag={RRNavLink}   className="nav-header-glance">HOME</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/NewsArticles" tag={RRNavLink}  className="nav-header-glance">NEWS & ARTICLES</NavLink>
    </NavItem>
    <NavItem>
     <NavLink to="/Exams" tag={RRNavLink}  className="nav-header-glance">EXAMS</NavLink>
    </NavItem>
    <NavItem>
     <NavLink to="" onClick={e => alert("Will be added soon....(Use our app as of now we have updated there)")}    className="nav-header-glance">COLLEGES</NavLink>
    </NavItem>

    <NavItem>
       <NavLink to="/Cutoffs" tag={RRNavLink}  className="nav-header-glance">CUTT OFF'S</NavLink>
    </NavItem>
    <NavItem>
       <NavLink to="/Placements" tag={RRNavLink}  className="nav-header-glance">PLACEMENTS</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/Aboutus" tag={RRNavLink}  className="nav-header-glance">ABOUT US</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/userlogin" tag={RRNavLink}  className="nav-header-glance">ABOUT US</NavLink>
    </NavItem>
  </ul>
);

        return (
<div  >
          <Row style = {{boxShadow: '0 0 5px #888'}}>
          <Col className='header_hide1' xs="0" sm="0"md="10" style={{padding:'0px' }} className="nav-main-bc"    >
            <div className="headerpolyleft header_hide1" style={{backgroundColor:dcolor}}></div>
  <div className="marquee">  <p>Welcome to collegeexplore.Our vision is to empower students to make their own correct choices in life in a faster, better and wiser fashion</p></div>
        </Col>

        <Col  xs="0" sm="0"md="2" style={{padding:'0px'}} className="nav-main-bc"    >
<h5 className='header_hide2'   style={{padding:'10px',color:'white' }} >COLLEGEEXPLORE</h5>

<Link to="route" style={{float: 'right',padding: '10px'}} target="_blank" onClick={(event) => {event.preventDefault(); window.open("https://play.google.com/store/apps/details?id=com.collegeexplore.app");}} >
<img className="img-responsive" src="/img/android-logo.png" alt="android" /><span style={{color: 'white ',height: '50px'}}>DOWNLOAD APP</span>
</Link>


      </Col>
          <Col xs="12" sm="12"md="12"  style={{padding: '0px'}} style={{position:'absolute'}}>
            <Navbar color="light" light expand="md" className="navbar-futureglc" >

            </Navbar>

          </Col>
          <Col xs="12" sm="12"md="12"className="nav-main-bc1">
          <Row>
          <Col xs="12" sm="12"md="2"style={{padding: '0px'}}  >

                      <div className="headerpolyleft1" style={{backgroundColor:dcolor}}></div>
                  </Col>
                    <Col xs="12" sm="12"md="10"  style={{padding: '0px'}} >
  </Col>
  </Row>

          </Col>
    </Row>


          <Row className="sticky">
          <Col  className="header_hide1" xs="0" sm="12"md="2"style={{padding: '0px',background:'#f8f9fa'}}  >

                      <div className="headerpolyleft1" style={{backgroundColor:dcolor}}></div>
                    <Link to="/Home" > <div className = "brand-name">COLLEGEEXPLORE</div></Link>
                  </Col>
                    <Col xs="12" sm="12"md="10"  style={{padding: '0px'}} >
            <Navbar  color="light" light expand="md">
              <NavbarToggler onClick={this.toggle1} />
              <Collapse isOpen={this.state.isOpen1} navbar>
                <Nav className="ml-auto" navbar >

                    { isAuthenticated ? userLinks : guestLinks }

                </Nav>
              </Collapse>
            </Navbar>
  </Col>
  </Row>
        </div>




        );
    }
}
//state.user is userReducer
//state.math is mathReducer
const mapStateToProps = (state,ownProps) => {
    return {
          Pathparamsreduce:state.Pathparamsreduce,
          auth:state.user
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
       setName:(name) => {
           dispatch(setName(name));
       },
       Submitlogout:(datatosend) => {
           dispatch(logout(datatosend));}
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(HeaderContent);
HeaderContent.propTypes = {
  auth: PropTypes.object.isRequired,
  Submitlogout: PropTypes.func.isRequired
}
