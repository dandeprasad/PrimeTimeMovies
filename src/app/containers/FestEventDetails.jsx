import React from "react";
import { Breadcrumb, BreadcrumbItem,Container, Row, Col,Card,CardTitle,CardBody,CardText,Button } from 'reactstrap';
import { connect } from "react-redux";
import img from "../img/festEventBackGrnd.jpg";
import twitter from "../img/twitter.png";
import facebook from "../img/facebook.png";
import googleplus from "../img/google-plus-logo.png";
import iitmadraslogo from "../img/iitmadraslogo.png";
import {paramsToHeader} from "../actions/HeaderParams";
import festbackground1 from "../img/festbackground1.jpg";
import '../css/festeventdetails.scss';
import FestCarousel from '../components/FestEventDetails/FestCarousel';
import FestRegistration from './FestUserRegistration';
import {eventsoverview,eventscalllinks,eventscallreach} from "../actions/EventsDetailsActions";
import FestCarousel1 from '../components/FestEventDetails/FestCarousel1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link ,Route} from 'react-router-dom';
import {Helmet} from "react-helmet";
class EventDetails extends React.Component {


//     changeUsername() {
// this.props.setName("king");
//     }

//style={{color: '#c24a2a'}}

constructor(props) {
  super(props);
  this.state = {
   posts:[]


  }
}
componentWillMount() {

 window.scrollTo(0, 0);
  if( this.props.match.url.includes('EventDetails'))
  {
     this.props.paramsHeader(this.props);

  }
  this.serverRequest();
  this.serverRequestCalllinks ();
  this.serverRequestReach();
}


  componentDidUpdate(nextProps){

  }
  serverRequestReach ( ){
    var WORKSPACE_ID = "HOME_WORKSPACE";
    var FUNCTION_ID = "GET_FESTS_REACHUS";
    var ACTION_ID = "GET_FESTS_REACHUS";


  var collegeid=this.props.match.params.collegeId;

  var Record = {
    "WORKSPACE_ID" : WORKSPACE_ID,
    "FUNCTION_ID" : FUNCTION_ID,
    "ACTION_ID" : ACTION_ID,
    "FEST_ID":collegeid
  };


  var json = {
    "datatohost" : Record
  };
  var dande = 'ServerData=' + JSON.stringify(json);


   this.props.SubmitReqReach(dande);
  };



  serverRequestCalllinks ( ){
    var WORKSPACE_ID = "HOME_WORKSPACE";
  	var FUNCTION_ID = "GET_FESTS_REGIS_LINKS";
  	var ACTION_ID = "GET_FESTS_REGIS_LINKS";


  var collegeid=this.props.match.params.collegeId;

  var Record = {
		"WORKSPACE_ID" : WORKSPACE_ID,
		"FUNCTION_ID" : FUNCTION_ID,
		"ACTION_ID" : ACTION_ID,
		"FEST_ID":collegeid
	};


  var json = {
    "datatohost" : Record
  };
  var dande = 'ServerData=' + JSON.stringify(json);


   this.props.SubmitReqcalllinks(dande);
  };
  serverRequest ( ){
    var WORKSPACE_ID = "HOME_WORKSPACE";
  	var FUNCTION_ID = "GET_FESTS_OVERVIEW";
  	var ACTION_ID = "GET_FESTS_OVERVIEW";


  var collegeid=this.props.match.params.collegeId;

  var Record = {
		"WORKSPACE_ID" : WORKSPACE_ID,
		"FUNCTION_ID" : FUNCTION_ID,
		"ACTION_ID" : ACTION_ID,
		"FEST_ID":collegeid
	};

  var json = {
    "datatohost" : Record
  };
  var dande = 'ServerData=' + JSON.stringify(json);


   this.props.SubmitReq(dande);
  };





    render() {
        var fest_overview ={}
        var fest_reachus ={}
        var fest_data_links = {}
        const festdet_metadata = [];
      if (this.props.EventsDetailsReduce.result.length>0){
       fest_overview =   Object.values( this.props.EventsDetailsReduce.result[0])[0];

       festdet_metadata.push(
         <Helmet>
                         <meta charSet="utf-8" />
                         <title>CollegeExplore:{ fest_overview.fest_name }</title>
                         <meta name="description" content={fest_overview.fest_description}/>/>
                         <meta name="keywords" content="list of colleges in India, top colleges in India, best colleges in India.Exams,Fests,Cutoffs,Placements  "/>

                         <meta property="og:image" content="https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/collegeexplore_logo.png"/>
                         <meta property="og:site_name" content="Collegeexplore"/>
                         <meta property="og:type" content="website"/>
                         <meta property="og:url" content="http://collegeexplore.in"/>
                         <meta property="og:title" content="College explore Developers"/>
                         <meta property="og:description" content="College explore Developers"/>
                     </Helmet>
       );
     }
       if (this.props.EventsDetailsReduce.reachus.length>0)
        fest_reachus =   Object.values( this.props.EventsDetailsReduce.reachus[0])[0];

       if (this.props.EventsDetailsReduce.links.length>0)
        fest_data_links =   Object.values( this.props.EventsDetailsReduce.links[0])[0];
        return (

          <div >
<Row className="festCont">
<img src={fest_overview.banner_logos} className="img-responsive festBackImg" alt="" width="100%" height="300"/>
<Col className="festbcdiv newsbcdiv-override" xs="12" sm="12"md="12" style={{padding:'0px'}}>
  <div className="polyleft"></div>

  <div className="polyright"></div>
  <p>
</p></Col>
<div className="breadFirst container-fluid">
      <Row>

{festdet_metadata}
         <Col xs="9" sm="9"md="9">
                {      /*   <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#/Events">Events</BreadcrumbItem>
        <BreadcrumbItem active tag="span">Shasstra</BreadcrumbItem>
      </Breadcrumb>*/
    }
      </Col>
      <Col xs="3" sm="3"md="3">
    <Link to={'/FestRegistration'}>   <Button className=' festregbutton button'  >
Create Event
</Button></Link>
      </Col>

      </Row>
  </div>
      <div className = "fest-center">
      <Row >
          <Col xs="12" sm="12"md="12">
{fest_overview.fest_name}
      </Col>
  </Row>
  </div>

  <div className="breadEnd container-fluid">
        <Row>
            <Col xs="12" sm="12"md="6">
<div className="feststartdate">Fest Start Date: <span style={{color: 'white'}}>{fest_overview.start_date}</span></div>
        </Col>
        <Col xs="12" sm="12"md="6">
<div className="festenddate">Fest End Date: <span style={{color: 'white'}}>{fest_overview.end_date}</span></div>
    </Col>

        </Row>
        </div>

</Row>


<Row>

<Col  xs="12" sm="12"md="8" className="fest_col_color" >

<Row     >
{/*<Col  xs="12" sm="12"md="7"><FestCarousel></Col> */}
<Col  xs="12" sm="12"md="12" className="fest_col_parag"
    >
<p className="fest_para_style"> {fest_overview.fest_description}</p>
</Col>

</Row>
<Row className="facetwitgoog">
<div   style={{ margin: 'auto'}}  >
<span ><img className="img-responsive facetwitgoogspn" src="/img/facebook.png" alt="facebook"/></span>
<span ><img className="img-responsive facetwitgoogspn" src="/img/twitter.png" alt="twitter"/></span>
<span ><img className="img-responsive facetwitgoogspn" src="/img/google-plus-logo.png" alt="googleplus"/></span>
</div>
</Row>
</Col>
<Col  xs="12" sm="12"md="4">
<Row className="fest_col_depart_ty">
<Col  xs="12" sm="12"md="12">
<p style={{color: '#000',fontWeight:'bold'}}> FEST DEPARTMENT:<span className="fest_col_span" >{fest_overview.fest_depart}</span></p>
</Col>
<Col  xs="12" sm="12"md="12">
<p style={{color: '#000',fontWeight:'bold'}}> FEST TYPE:<span className="fest_col_span">{fest_overview.fest_type}</span></p>
</Col>
<Col  xs="12" sm="12"md="12">
<p style={{color: '#000',fontWeight:'bold'}}> FEST WEBSITE:<span className="fest_col_span">{fest_data_links.fest_website}</span></p>
</Col>

<Col  xs="12" sm="12"md="12">
<p style={{color: '#000',fontWeight:'bold'}}> FEST CAPTION:<span className="fest_col_span">{fest_overview.fest_caption}</span></p>
</Col>
<Col  xs="12" sm="12"md="12">
<p style={{color: '#000',fontWeight:'bold'}}> FEST REGISTRATION URL:<span className="fest_col_span">{fest_data_links.fest_regis_url}</span></p>
</Col>
<Col  xs="12" sm="12"md="12">
<p style={{color: '#000',fontWeight:'bold'}}> FEST LINKS:<span className="fest_col_span">{fest_data_links.fest_links}</span></p>
</Col>
<Col  xs="12" sm="12"md="12">
<p style={{color: '#000',fontWeight:'bold'}}>FEST ACCOMODATION:<span className="fest_col_span">--</span></p>
</Col>
</Row>
{/*<Row className="fest_acco_row">
<p className="fest_acco"> FEST ACCOMODATION: --</p>
<p className="fest_col_span"> </p>

</Row>*/}

</Col>
</Row>

<Row>
<Col xs="12" sm="12"md="12"  style={{padding: '0px'}}>
<FestCarousel1 festidpass = {this.props.match.params.collegeId} />
</Col>
</Row>
<Row>
<Col xs="12" sm="12"md="12">
<Row>


<Col xs="12" sm="12"md="6">

<Row >
<Col xs="12" sm="12"md="12">
<h2 className="festsendtext1">HOW TO REACH</h2>
</Col>
</Row>
<Row>
<Col xs="12" sm="12"md="12">
<h5 className="festsendtext" ><span style={{fontWeight: '400',padding:'5px'}}>Reach to Fest:</span>{fest_reachus.fest_reach}</h5>
</Col>
<Col xs="12" sm="12"md="12">
<h5 className="festsendtext" ><span style={{fontWeight: '400',padding:'5px'}}>College Location:</span>{fest_reachus.college_location}</h5>
</Col>
<Col xs="12" sm="12"md="12">
<h5 className="festsendtext"><span style={{fontWeight: '400',padding:'5px'}}>Contact Persons:</span>{fest_reachus.Fest_contact_persons}</h5>
</Col>
</Row>
</Col>

<Col xs="12" sm="12"md="6"   >
<Row   style={{ margin: '0px'}} >
<Col xs="12" sm="12"md="12" className="festenddiv3">
<Row>
<Col >
<img  src={fest_overview.banner_logos} className="img-responsive " alt="" width="100%" height="250" />
</Col>
</Row>
<Row>
<Col>
<h4>{fest_overview.fest_college_name}</h4>
</Col>
</Row>
<Row>
<Col>
<div style={{fontWeight: '100'}}><span style={{fontWeight: '600'}}>WEBSITE:</span>{fest_overview.college_website}</div>
</Col>
</Row>
</Col>
</Row>
<Row style={{ padding: '28px 6px 10px 6px'}}  style={{ margin: '0px'}} >
<Col>
<div style={{fontWeight: '100'}}><span style={{fontWeight: '600'}}>EMAIL ID :</span>--</div>
</Col>
<Col>
<div style={{fontWeight: '100'}}><span style={{fontWeight: '600'}}>PHONE NO :</span>--</div>
</Col>

</Row>
</Col>

</Row>
</Col>
</Row>
{/*<div className="bc2">
<header>
  <div class="header__bg1"></div>
</header>
</div>

<div className="bc1">
<header>
  <div class="header__bg"></div>
</header>
</div>*/}

</div>
        );
    }
}




const mapStateToProps = (state,ownProps) => {

    return {
        EventsDetailsReduce: state.EventsDetailsReduce

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
      SubmitReq:(datatosend) => {
          dispatch(eventsoverview(datatosend));},
SubmitReqcalllinks:(datatosend) => {
    dispatch(eventscalllinks(datatosend));},
    SubmitReqReach:(datatosend) => {
        dispatch(eventscallreach(datatosend));},
           paramsHeader:(datatosend) => {
               dispatch(paramsToHeader(datatosend));
       }

    };
};


export default connect(mapStateToProps,mapDispatchToProps)(EventDetails);
