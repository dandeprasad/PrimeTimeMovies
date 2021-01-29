import React from "react";
import { Row, Col ,   NavItem,
    NavLink,Nav } from 'reactstrap';
import { connect } from "react-redux";
import { NavLink as RRNavLink } from 'react-router-dom';
import appstore from "../../imgsvg/apple-app-store-black.svg";
import playstore from "../../imgsvg/playstore-black.svg";
import '../../css/moviehome/movie-home.scss';
import PropTypes from 'prop-types';

 class SideBar extends React.Component {

constructor(props) {
  super(props);
  this.toggle = this.toggle.bind(this);

}
componentWillMount() {


}
toggle() {
    this.props.HandleChangeToggle1();
}

    render() {
        return(

            <>
  <div className='sidebar-content' onClick={this.toggle}/>
<div className="movie-sidebar w3-bar-block" id="mySidebar">
<div className="main-side-header">
    <h5>Prime Time Movies</h5>
</div>
<hr style={{borderTop:'3px solid #4d5664'}} />
<div style={{    padding: '1rem', height: '20vh'}}>
    <span style={{ color:"black",fontWeight:600}}>Content Preferences</span>
   <span><select className="main-side-select">
     <option value="English" selected="">English</option>
    </select>
    </span> 
</div>
<hr style={{borderTop:'3px solid #4d5664'}} />

<div className='container-fluid'>
<Row style={{padding:"1rem 0rem"}}>
    <Col xs="12" sm="12" md="12" style={{display:"flex",justifyContent:"center"}}>
    
    <p style={{fontWeight:600,color:'black'}}>Download PrimeTimeMovies App</p>
    </Col>
    <Col xs="12" sm="12" md="12" style={{display:"flex",justifyContent:"center",padding:'1rem'}}>
    
    <button  type="submit"  className="btn main-side-button"><span style={{padding:'0.3rem'}} ><img  src={appstore} id="bg" alt=""/></span>App Store</button>
    </Col>
    <Col xs="12" sm="12" md="12" style={{display:"flex",justifyContent:"center",padding:'1rem'}}> 
    <button type="submit"   className="btn main-side-button1"><span style={{padding:'0.3rem'}}><img  src={playstore} id="bg" alt=""/></span>Google Play</button>
    </Col>
</Row>
</div>
<hr style={{borderTop:'3px solid #4d5664'}} />

<div className='container-fluid' >
    <Row>
<Col xs="12" sm="12" md="12">
<Row>
    <Col xs="12" sm="12" md="6" style={{display:"flex",justifyContent:"center"}}>
    <Nav>
    <NavItem className='prehome-navitem'>
        <NavLink to="#" tag={RRNavLink}  className="main-side-nav-link" style={{fontSize:"0.7rem"}}>Terms & Conditions</NavLink>
      </NavItem>
      </Nav>
    </Col>
    <Col xs="12" sm="12" md="6" style={{display:"flex",justifyContent:"center"}}>
    <Nav>
    <NavItem className='prehome-navitem'>
        <NavLink to="#" tag={RRNavLink}  className="main-side-nav-link" style={{fontSize:"0.7rem"}}>About Us</NavLink>
      </NavItem>
      </Nav>
    </Col>
</Row>
</Col>
<Col xs="12" sm="12" md="12">
<Row>
    <Col xs="12" sm="12" md="6" style={{display:"flex",justifyContent:"center"}}>
    <Nav>
    <NavItem className='prehome-navitem'>
        <NavLink to="#" tag={RRNavLink}  className="main-side-nav-link" style={{fontSize:"0.7rem"}}>Privacy Policy</NavLink>
      </NavItem>
      </Nav>
    </Col>
    <Col xs="12" sm="12" md="6" style={{display:"flex",justifyContent:"center"}}>
    <Nav>
    <NavItem className='prehome-navitem'>
        <NavLink to="#" tag={RRNavLink}  className="main-side-nav-link" style={{fontSize:"0.7rem"}}>FAQ</NavLink>
      </NavItem>
      </Nav>
    </Col>
</Row>
</Col>
</Row>
</div>
<hr style={{borderTop:'3px solid #4d5664'}} />
<div className='container-fluid'>
    <Row>
<Col xs="12" sm="12" md="12" style={{display:"flex",justifyContent:"center"}}>
    <p style={{fontSize:"0.7rem",color:'black'}}>CopyRight PrimeTimeMovies 2020. All Rights Reserved</p>
    </Col>
    </Row>
    </div>
</div>

            </>)
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
export default connect(mapStateToProps,mapDispatchToProps)(SideBar);
SideBar.propTypes = {
}

