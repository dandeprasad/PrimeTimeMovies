import React from "react";
import { Row, Col } from 'reactstrap';

import { connect } from "react-redux";
import '../../css/userprofile/user-home.scss';
import { Progress } from 'reactstrap';
import ReactTimer from '../../utils/time'
class MyTickets extends React.Component {

  constructor(props) {
    super(props);

  }
  componentWillMount() {

  }

  render() {

  return (

<>
<Row style={{margin:'1.5rem'}}>
<Col xs="12" sm="12" md="12" >
    </Col>
</Row>
    <Row className="user-ticket-bg">
    <Col xs="12" sm="12" md="4" >
        <Row>
        <Col xs="12" sm="12" md="12" style={{display:'flex',justifyContent:'center',padding:'1rem'}}>
<img src="img/students.jpg" id="bg" alt=""  style={{borderRadius:'50%',width:'6rem',height:'6rem',opacity:0.5}}/>
<div style={{padding:'1rem'}}>
<h5>SAAHO</h5>
<p>2hrs 45min</p>
</div>
</Col>
<Col xs="12" sm="12" md="12" style={{padding:'0.5rem 6rem'}}>
<Progress animated color="success" value="2" />
</Col>
<Col xs="12" sm="12" md="12" style={{display:'flex',justifyContent:'center',padding:'1rem'}}>
    <Row>
<Col xs="6" sm="6" md="6" >
<p>Subtitles</p>
<p>English [CC]</p>
<div className='vt-userhome'/>
</Col>
<Col xs="6" sm="6" md="6" >
<p>Audio Languages</p>
<p>Telugu</p>
</Col>
</Row>
</Col>
</Row>
    </Col>
    <Col xs="12" sm="12" md="6" >
    <Row>
    <Col xs="12" sm="12" md="12" style={{padding:"1.75rem 0rem"}}>
        </Col>
        <Col xs="12" sm="12" md="6" style={{padding:'10px 10px'}}>
            <div className="ticket-start-end">
                <h5>Starting Date <span>12|05|2020</span></h5>
            </div>
        </Col>
        <Col xs="12" sm="12" md="6" style={{padding:'10px 10px'}}>
        <div className="ticket-start-end">
                <h5>End Date <span>13|05|2020</span></h5>
            </div>
        </Col>
        
        <Col xs="12" sm="12" md="6" style={{padding:'10px 10px'}}>
            <div className="ticket-start-end">
                <h5>Starting Time <span>12:30 pm</span></h5>
            </div>
        </Col>
        <Col xs="12" sm="12" md="6" style={{padding:'10px 10px'}}>
        <div className="ticket-start-end">
                <h5>End Time <span>12:30 pm</span></h5>
            </div>
        </Col>
    </Row>
        </Col>
     <Col xs="12" sm="12" md="2">
         <Row>
     <Col xs="12" sm="12" md="12" style={{padding:"3rem 0rem"}}>
         
        </Col>
        </Row>
    <ReactTimer movieStartTime={2500}/>
     </Col>   
    </Row>
    <Row className="user-ticket-bg">
    <Col xs="12" sm="12" md="4" >
        <Row>
        <Col xs="12" sm="12" md="12" style={{display:'flex',justifyContent:'center',padding:'1rem'}}>
<img src="img/students.jpg" id="bg" alt=""  style={{borderRadius:'50%',width:'6rem',height:'6rem',opacity:'0.5'}}/>
<div style={{padding:'1rem'}}>
<h5>SAAHO</h5>
<p>2hrs 45min</p>
</div>
</Col>
<Col xs="12" sm="12" md="12" style={{padding:'0.5rem 6rem'}}>
<Progress animated color="success" value="2" />
</Col>
<Col xs="12" sm="12" md="12" style={{display:'flex',justifyContent:'center',padding:'1rem'}}>
    <Row>
<Col xs="6" sm="6" md="6" >
<p>Subtitles</p>
<p>English [CC]</p>
<div className='vt-userhome'/>
</Col>
<Col xs="6" sm="6" md="6" >
<p>Audio Languages</p>
<p>Telugu</p>
</Col>
</Row>
</Col>
</Row>
    </Col>
    <Col xs="12" sm="12" md="6" >
    <Row>
    <Col xs="12" sm="12" md="12" style={{padding:"1.75rem 0rem"}}>
        </Col>
        <Col xs="12" sm="12" md="6" style={{padding:'10px 10px'}}>
            <div className="ticket-start-end">
                <h5>Starting Date <span>12|05|2020</span></h5>
            </div>
        </Col>
        <Col xs="12" sm="12" md="6" style={{padding:'10px 10px'}}>
        <div className="ticket-start-end">
                <h5>End Date <span>13|05|2020</span></h5>
            </div>
        </Col>
        
        <Col xs="12" sm="12" md="6" style={{padding:'10px 10px'}}>
            <div className="ticket-start-end">
                <h5>Starting Time <span>12:30 pm</span></h5>
            </div>
        </Col>
        <Col xs="12" sm="12" md="6" style={{padding:'10px 10px'}}>
        <div className="ticket-start-end">
                <h5>End Time <span>12:30 pm</span></h5>
            </div>
        </Col>
    </Row>
        </Col>
     <Col xs="12" sm="12" md="2">
         <Row>
     <Col xs="12" sm="12" md="12" style={{padding:"3rem 0rem"}}>
         
        </Col>
        </Row>
    <ReactTimer movieStartTime={25000}/>
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
export default connect(mapStateToProps,mapDispatchToProps)(MyTickets);
MyTickets.propTypes = {
  
}
