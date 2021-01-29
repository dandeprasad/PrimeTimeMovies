  import React from "react";
  import { Row, Col,Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink ,  UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem} from 'reactstrap';
  import { connect } from "react-redux";
  import { Link } from 'react-router-dom';
  import { NavLink as RRNavLink } from 'react-router-dom';
  import {setName,logout} from "../../actions/userActions";
  import '../../css/moviehome/movie-home.scss';
  import person from "../../imgsvg/person_pin-white-18dp.svg";
  import menu from "../../imgsvg/menu.svg";
  import PropTypes from 'prop-types';

   class MovieHeader extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  componentWillMount() {


  }
  toggle() {

    this.props.HandleChangeToggle();
  }

  logout(e) {
    e.preventDefault();
    this.props.Submitlogout();
  }

      render() {
  const { isAuthenticated } =this.props.auth;
  const { user_name } =this.props.auth.user;
  const userLinks = (
 <>
 <Nav  className="mr-auto">
      <NavItem className='prehome-navitem'>
         <NavLink to="/Home" tag={RRNavLink}  className="prehome-nav-link">Home</NavLink>
      </NavItem>
      <NavItem className='prehome-navitem'>
         <NavLink to="/Home" tag={RRNavLink}  className="prehome-nav-link">Movies</NavLink>
      </NavItem>
      <NavItem className='prehome-navitem'>
         <NavLink to="/mytickets" tag={RRNavLink}  className="prehome-nav-link">My Tickets</NavLink>
      </NavItem>
      <NavItem className='prehome-navitem'>
         <NavLink to="/shoppingcart" tag={RRNavLink}  className="prehome-nav-link">Your Cart</NavLink>
      </NavItem>
      <NavItem className='prehome-navitem'>
         <NavLink to="/saaho" tag={RRNavLink}  className="prehome-nav-link">Saaho</NavLink>
      </NavItem>
      <NavItem className='prehome-navitem'>
         <NavLink to="/saaho-video" tag={RRNavLink}  className="prehome-nav-link">Saaho Movie</NavLink>
      </NavItem>
      </Nav>
      <Nav>
      </Nav>
      <UncontrolledDropdown  inNavbar className='moive-header'>
              <DropdownToggle nav caret>
  { <img style={{paddingRight:'0.5rem'}} src={person} id="bg" alt=""/>}<span style={{fontSize:'18px'}}>{ "Welcome "+user_name}</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink to="/account" tag={RRNavLink}  className="prehome-nav-link">User Profile</NavLink>
                  
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <NavLink to="" tag={RRNavLink}  className="prehome-nav-link" onClick={this.logout.bind(this)} >Logout</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
  <Nav   >
      <NavItem className='prehome-navitem'>
        <NavLink to="/userlogin" tag={RRNavLink}  className="prehome-nav-link">Login/SignUp</NavLink>
      </NavItem>
    </Nav>
        </>
  );

          return (

<>


<Row className="moive-header">
  <Col xs="12" sm="12" md="12" >

    <Navbar className="movie-home-navbar" dark>
    <span><img src={menu} style={{padding:'0rem 2rem 0rem 1.5rem'}} id="bg" alt="" onClick={this.toggle}/></span>
    
      <NavbarBrand href="#">Prime Time Movies</NavbarBrand>


                      { isAuthenticated ? userLinks : guestLinks }

                      
                  </Navbar>
                  
                  </Col>
                  </Row>
</>



          );
      }
  }

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
  export default connect(mapStateToProps,mapDispatchToProps)(MovieHeader);
  MovieHeader.propTypes = {
    auth: PropTypes.object.isRequired,
    Submitlogout: PropTypes.func.isRequired
  }
  NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}
