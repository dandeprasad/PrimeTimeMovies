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
import ShoppingCart from "./ShoppingCart";
import MyTickets from "./myTickets";
import Sidebar from '../moviehome/sideBar';
import UserMainProfile from "./userMainProfile";
import MovieHeader from "../moviehome/movieHeader";
import bookticket from "../../imgsvg/book-your-ticket.svg";
import shoppingCart from "../../imgsvg/shopping_cart.svg";

import personProfile from "../../imgsvg/person.svg";


import MovieFooter from "../moviehome/movieFooter";
import PropTypes from 'prop-types';
class UserHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parentTag: false
  };
  }
  componentWillMount() {
    if (this.props.match.url === '/mytickets'){
        this.setState({
            myTickets:true,
            userProfile:false,
            shoppingCart:false
        })
        }
        else if (this.props.match.url === '/account'){
            this.setState({
                myTickets:false,
                userProfile:true,
                shoppingCart:false
            })
            }
            else if (this.props.match.url === '/shoppingcart'){
                this.setState({
                    myTickets:false,
                    userProfile:false,
                    shoppingCart:true
                })
                }
    
  }


  render() {

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
</Col>
</Row>
<Row>
<Col xs="12" sm="12" md="12">
<Row style={{padding: '3rem 0rem'}}>
        <Col sm="12" md={{ size: 7, offset: 2 }}>
        <Navbar className="user-profile-navbar">
        <Nav>
        <NavItem className="user-profile-navitem" >
                  <NavLink to="/account"  tag={RRNavLink}  ><div style={{display:'flex',justifyContent:'center'}}><img src={personProfile}/> </div>User Profile</NavLink>
                  </NavItem>
                  <NavItem className="user-profile-navitem" >
                    <NavLink   to="/mytickets" tag={RRNavLink} ><div style={{display:'flex',justifyContent:'center'}}><img src={bookticket}/> </div>My Tickets</NavLink>
                    
                  </NavItem>
                  <NavItem className="user-profile-navitem" >
                    <NavLink  to="/shoppingcart" tag={RRNavLink}><div style={{display:'flex',justifyContent:'center'}}><img src={shoppingCart}/> </div> Shopping Cart</NavLink>
                  </NavItem>

                  </Nav>
                  </Navbar>

        </Col>
      </Row>
</Col>
</Row>
<Row>
    <Col xs="12" sm="12" md="12">
    <hr className='movie-user-hr'/>
    </Col>
</Row>
<Row>
<Col xs="12" sm="12" md="3">
<UserMainProfile/>
<div className='vt-userhome'/>
</Col>
<Col xs="12" sm="12" md="9">
{this.state.userProfile && <UserProfile/>}
                    {this.state.shoppingCart && <ShoppingCart/>}
                      {this.state.myTickets && <MyTickets/>}

                       
                     
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
export default connect(mapStateToProps,mapDispatchToProps)(UserHome);
UserHome.propTypes = {
  
}
