import React from "react";
import { Row, Col,
    NavLink,NavItem,Nav } from 'reactstrap';
    import { NavLink as RRNavLink } from 'react-router-dom';
import { connect } from "react-redux";
import '../../css/moviehome/movie-home.scss';
import '../../css/userprofile/user-home.scss';
import PropTypes from 'prop-types';
class DirectBookingData extends React.Component {

  constructor(props) {
    super(props);
  }
  componentWillMount() {

  }


  render() {

  return (

<>
<div className='container-fluid'>
<Row style={{padding:'2rem'}}>
<Col xs="12" sm="12" md="3">
    <div>
    <h5>Moive Banner</h5>
    <img src="img/students.jpg" id="bg" alt=""  style={{width:'7rem',height:'7rem',opacity:0.5}}/>
    </div>
</Col>
<Col xs="12" sm="12" md="3">
<Row>
    <Col xs="12" sm="12" md="12">
<h5>Moive Name</h5>
</Col>
<Col xs="12" sm="12" md="12" style={{padding:"1.5rem 0rem"}}></Col>
<Col xs="12" sm="12" md="12">
<h5>SAAHO</h5>
</Col>
</Row>
</Col>
<Col xs="12" sm="12" md="3">
<Row>
    <Col xs="12" sm="12" md="12">
    <h5>Ticket Price</h5>
    </Col>
    <Col xs="12" sm="12" md="12" style={{padding:"1.5rem 0rem"}}></Col>
    <Col xs="12" sm="12" md="12">
    <h5>INR 200.00</h5>
    </Col>
    </Row>
    </Col>
<Col xs="12" sm="12" md="3">
<Row>
    <Col xs="12" sm="12" md="12">
<h5>Release Date</h5>
</Col>
<Col xs="12" sm="12" md="12" style={{padding:"1.5rem 0rem"}}></Col>
<Col xs="12" sm="12" md="12">
<h5>12-08-2020</h5>
</Col>
</Row>
</Col>

</Row>


<hr className='movie-user-hr'/>
<Row>
    <Col xs="12" sm="12" md="3">
        <Row>
            <Col xs="12" sm="12" md="12" style={{padding:"10px 10px"}}>
    <div className="ticket-start-end">
                <h5>Time <span>12:30PM</span></h5>
            </div>
            </Col>
            <Col xs="12" sm="12" md="12" style={{padding:"10px 10px"}}>
    <div className="ticket-start-end">
                <h5>Date <span>12|05|2020</span></h5>
            </div>
            </Col>
            </Row>
    </Col>
    <Col xs="12" sm="12" md="5">
    </Col>
    <Col xs="12" sm="12" md="4">
        <Row style={{padding:"0.5rem"}}>
            <Col xs="12" sm="12" md="6">
            Ticket Price 
            </Col>
            <Col xs="12" sm="12" md="6">
                INR 400.00
            </Col>
        </Row>
        <Row style={{padding:"0.5rem"}}>
            <Col xs="12" sm="12" md="6">
              GST 
            </Col>
            <Col xs="12" sm="12" md="6">
            INR 40.00
            </Col>
        </Row>
        <Row >
            <Col xs="12" sm="12" md="12">
            <hr className='movie-user-hr'/>
            </Col>
        </Row>
       
        <Row style={{padding:"0.5rem"}}>
            <Col xs="12" sm="12" md="6">
              Total Ticket Price 
            </Col>
            <Col xs="12" sm="12" md="6">
                INR 440.00
            </Col>
        </Row>
    </Col>
</Row>
<Row>
    <Col xs="12" sm="12" md="12">
        <p style={{display:"flex",justifyContent:"center"}}>
        <Nav>
            <NavItem >
        <NavLink to="#"  tag={RRNavLink}  > I agree to the Terms & Conditions</NavLink>
        </NavItem>
        </Nav>
        </p>
    </Col>
</Row>
<Row>
    <Col xs="12" sm="12" md="12">
        <p style={{display:"flex",justifyContent:"center"}}>
        <button style={{padding:'0.5rem 4rem'}}type="submit" className="user-updatepreferences">Buy Ticket</button>
        </p>
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
export default connect(mapStateToProps,mapDispatchToProps)(DirectBookingData);
DirectBookingData.propTypes = {
  
}
