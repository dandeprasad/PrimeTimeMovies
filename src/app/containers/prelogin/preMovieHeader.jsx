  import React from "react";
  import { Container, Row, Col,Button,Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink  } from 'reactstrap';
  import { connect } from "react-redux";
  import { Link } from 'react-router-dom';
  import menu from "../../imgsvg/menu.svg";
  import { NavLink as RRNavLink } from 'react-router-dom';
  import {setName,logout} from "../../actions/userActions";
  import PropTypes from 'prop-types';

   class PreMovieHeader extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  componentWillMount() {


  }
  toggle() {

    this.props.HandleChangeToggle2();
  }
  logout(e) {
    e.preventDefault();
    this.props.Submitlogout();
  }

      render() {
  const { isAuthenticated } =this.props.auth;
  const userLinks = (
 <>
      <NavItem className='prehome-navitem'>
         <NavLink to="/Events" tag={RRNavLink}  className="prehome-nav-link">FESTS</NavLink>
      </NavItem>
      <NavItem className='prehome-navitem'>
         <NavLink to="" tag={RRNavLink}  className="prehome-nav-link" onClick={this.logout.bind(this)} >Logout</NavLink>
      </NavItem>
        {/*<li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>*/}
      </>

  );

  const guestLinks = (
<>
<Nav  className="mr-auto">
<NavItem className='prehome-navitem'>
  <NavLink to="/userlogin" tag={RRNavLink}  className="prehome-nav-link">Home</NavLink>
</NavItem>
<NavItem className='prehome-navitem'>
  <NavLink to="/userlogin" tag={RRNavLink}  className="prehome-nav-link">Movies</NavLink>
</NavItem>
  </Nav>
  <Nav>
      <NavItem className='prehome-navitem'>
        <NavLink to="/userlogin" tag={RRNavLink}  className="prehome-nav-link">Login/SignUp</NavLink>
      </NavItem>
    </Nav>
        </>
  );

          return (

<>
                      <div className='prehome-header-top' >
<Row className='prehome-row'>
  <Col xs="12" sm="12" md="12" >
    <Navbar  dark className="prehome-navbar">
    <span><img src={menu} style={{padding:'0rem 2rem 0rem 1.5rem'}} id="bg" alt="" onClick={this.toggle}/></span>
      <NavbarBrand href="/">Prime Time Movies</NavbarBrand>


                      { isAuthenticated ? userLinks : guestLinks }


                  </Navbar>
                  <hr className='prehome-hr'/>

                  </Col>
                  </Row>
<div className='vt-prehome'/>

</div>
</>



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
  export default connect(mapStateToProps,mapDispatchToProps)(PreMovieHeader);
  PreMovieHeader.propTypes = {
    auth: PropTypes.object.isRequired,
    Submitlogout: PropTypes.func.isRequired
  }
  NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}
