import React from "react";
import { Row, Col } from 'reactstrap';

import { connect } from "react-redux";
import '../../css/userprofile/user-home.scss';
import PropTypes from 'prop-types';
class UserProfile extends React.Component {

  constructor(props) {
    super(props);

  }
  componentWillMount() {

  }

  render() {

  return (

<>
<div className="container-fluid">
<Row>
<Col xs="12" sm="12" md="4">
<div className="form-group user-profile-form">
    <label forname="firstname" className="bmd-label-floating">First Name</label>
    <input type="email" className="form-control"   id="firstname" value="dande"/>
    </div>

</Col>
<Col xs="12" sm="12" md="4">
<div className="form-group user-profile-form">
    <label forname="lastname" className="bmd-label-floating">Last Name</label>
    <input type="email" className="form-control"   id="lastname" value="12312323"/>
    </div>
</Col>


<Col xs="12" sm="12" md="4">

</Col>
</Row>
<Row>
<Col xs="12" sm="12" md="4">
<div className="form-group user-profile-form">
    <label forname="city" className="bmd-label-floating">City</label>
    <input type="email" className="form-control"   id="city" value="Tirupathi"/>
    </div>

</Col>
<Col xs="12" sm="12" md="4">
<div className="form-group user-profile-form">
    <label forname="state_name" className="bmd-label-floating">State</label>
    <input type="email" className="form-control"   id="state_name" value="Andhra Pradesh"/>
    </div>

</Col>
<Col xs="12" sm="12" md="4">
<div className="form-group user-profile-form">
    <label forname="country_name" className="bmd-label-floating">Country</label>
    <input type="email" className="form-control"   id="country_name" value="India"/>
    </div>

</Col>
</Row>
<Row>
    <Col xs="12" sm="12" md="12">
    <hr className='movie-user-hr'/>
    </Col>
</Row>
<Row>
<Col xs="12" sm="12" md="12">
        <h5>Movie Preferences</h5>
    </Col>
</Row>
<Row style={{padding: "1rem"}}>

    <Col xs="12" sm="12" md="2">

    <input type="checkbox" value=""/>
    <span className="user-pull-left"   >Drama</span>
    </Col>
    <Col xs="12" sm="12" md="2">
    <input type="checkbox" value=""/>
    <span className="user-pull-left"   >Thriller</span>
    </Col>
    <Col xs="12" sm="12" md="2">
    <input type="checkbox" value=""/>
    <span className="user-pull-left"   >Sci Fi</span>
    </Col>
    <Col xs="12" sm="12" md="2">
    <input type="checkbox" value=""/>
    <span className="user-pull-left"   >Action</span>
    </Col>
    <Col xs="12" sm="12" md="2">
    <input type="checkbox" value=""/>
    <span className="user-pull-left"   >Romance</span>
    </Col>
    <Col xs="12" sm="12" md="2">
    <input type="checkbox" value=""/>
    <span className="user-pull-left"   >Horror</span>
    </Col>
    <Col xs="12" sm="12" md="2">
    <input type="checkbox" value=""/>
    <span className="user-pull-left"   >Comedy</span>
    </Col>
</Row>
<Row>
<Col xs="12" sm="12" md="12">
        <h5>Language Preferences</h5>
    </Col>
</Row>
<Row style={{padding: "1rem"}}>

    <Col xs="12" sm="12" md="2">
    <input type="checkbox" value=""/>
    <span className="user-pull-left"   >Telugu</span>
    </Col>
    
    <Col xs="12" sm="12" md="2">
    <input type="checkbox" value=""/>
    <span className="user-pull-left"   >English</span>
    </Col>
    <Col xs="12" sm="12" md="2">
    <input type="checkbox" value=""/>
    <span className="user-pull-left"   >Tamil</span>
    </Col>
    <Col xs="12" sm="12" md="2">
    <input type="checkbox" value=""/>
    <span className="user-pull-left"   >Hindi</span>
    </Col>
</Row>
<Row style={{padding: "1rem"}}>

    <Col xs="12" sm="12" md="12" style={{padding: "1rem"}}>
    <input type="checkbox" value=""/>
    <span className="user-pull-left"   >I am fine receving communications over mails/Push Notifications</span>
    </Col>
    <Col xs="12" sm="12" md="12" style={{padding: "1rem"}}>
    <input type="checkbox" value=""/>
    <span className="user-pull-left"   >Email asking for feedback on my experince with PrimeTimeMovies</span>
    </Col>
    <Col xs="12" sm="12" md="12" style={{padding: "1rem"}}>
    <input type="checkbox" value=""/>
    <span className="user-pull-left"   >Email about co-branded offers,vouchers or brand promotions</span>
    </Col>
    <Col xs="12" sm="12" md="12" style={{padding: "1rem"}}>
    <input type="checkbox" value=""/>
    <span className="user-pull-left"   >Messages on Whatsapp</span>
    </Col>
    </Row>
    <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <button type="submit" className="user-updatepreferences">Update Preferences</button>
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
export default connect(mapStateToProps,mapDispatchToProps)(UserProfile);
UserProfile.propTypes = {
  
}
