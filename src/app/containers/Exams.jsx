import React from "react";
import { Breadcrumb, BreadcrumbItem,Container, Row, Col,Card,CardTitle,CardBody,CardText,Button } from 'reactstrap';
import { connect } from "react-redux";
import img from "../img/festEventBackGrnd.jpg";
import twitter from "../img/twitter.png";
import facebook from "../img/facebook.png";
import googleplus from "../img/google-plus-logo.png";
import iitmadraslogo from "../img/iitmadraslogo.png";
import captions from "../img/captions_PayPal_Austin_en.vtt";
import students from "../img/students.jpg";
import festbackground1 from "../img/festbackground1.jpg";
import '../css/festeventdetails.scss';
import '../css/news-articles.scss';
import '../css/exams.scss';
import FestCarousel3 from '../components/FestEventDetails/FestCarousel3';
import {setExamStates ,examsSubmitReq} from "../actions/ExamsActions"
import {paramsToHeader } from "../actions/HeaderParams"
import FestCarousel1 from '../components/FestEventDetails/FestCarousel1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import App from './App';
import {Helmet} from "react-helmet";
import ExamDetails from './ExamDetails';
import PXVideo from './PXVideo';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
class Exams extends React.Component {


//     changeUsername() {
// this.props.setName("king");
//     }

//style={{color: '#c24a2a'}}


constructor(props) {
  super(props);

  this.state = {
   posts:[]


  }
  //  this.props.setStates(startIndex,LastIndex,requestProcessing,theposition);
}

componentWillMount() {

  if(  this.props.match.url === "/Exams")
  {
     this.props.paramsHeader(this.props);



  }
if(this.props.ExamsReduce.result.length <=0){
    this.serverRequest(0,5);
  }
window.addEventListener('scroll', this.listenToScroll.bind(this))
}

componentDidUpdate(nextProps){
   if (nextProps.location.pathname !== this.props.location.pathname) {

  }
}


componentWillUnmount() {
  window.removeEventListener('scroll', this.listenToScroll.bind(this))
}

listenToScroll (){
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

  const scrolled = winScroll / height





  this.props.setStates(this.props.ExamsReduce.stdata.startIndex,this.props.ExamsReduce.stdata.LastIndex,this.props.ExamsReduce.stdata.requestProcessing,scrolled);
   this.onChangedata();

}

onChangedata(){
    if (this.props.ExamsReduce.stdata.theposition >=0.7){

      this.props.setStates(this.props.ExamsReduce.stdata.startIndex,this.props.ExamsReduce.stdata.LastIndex,true,this.props.ExamsReduce.stdata.theposition);
  //requestProcessing= true

      if (this.props.ExamsReduce.stdata.requestProcessing){

    const val1 =  this.props.ExamsReduce.stdata.startIndex+5;
    const val2 = this.props.ExamsReduce.stdata.LastIndex;

this.serverRequest (val1,val2);

this.props.setStates(val1,val2,this.props.ExamsReduce.stdata.requestProcessing,this.props.ExamsReduce.stdata.theposition);

//  startIndex= val1;
  // LastIndex =val2;


}}

}

serverRequest ( startindex , lastindex){



var filterKey="ALL";

var startIndex = startindex;
var LastIndex = lastindex;
var WORKSPACE_ID = "HOME_WORKSPACE";
var FUNCTION_ID = "GET_EXAMS_ONLY";
var ACTION_ID = "GET_CLG_EXAMS_STRING";


var Record = {
  "WORKSPACE_ID" : WORKSPACE_ID,
  "FUNCTION_ID" : FUNCTION_ID,
  "ACTION_ID" : ACTION_ID,
  "SROW_INDEX":startIndex ,
  "EROW_INDEX":LastIndex,
  "FILTER_KEY":filterKey
};
var json = {
  "datatohost" : Record
};
var dande = 'ServerData=' + JSON.stringify(json);




 this.props.SubmitReq(dande);
}


    render() {


      const addEXAMS = [];


for (var eachdata = 0; eachdata < this.props.ExamsReduce.result.length; eachdata += 1) {

          for (var i = 0; i < Object.keys(this.props.ExamsReduce.result[eachdata]).length; i += 1) {

              // this.setState({["EVENT_COORD_NAME"+{i}]: "" });
              // this.setState({["EVENT_COORD_EMAIL"+{i}]: "" });
              // this.setState({["EVENT_COORD_PHNO"+{i}]: "" });
              // this.setState({["EVENT_DESC"+{i}]: "" });
              // this.setState({["EVENT_RULE/S_FORMAT"+{i}]: "" });

addEXAMS.push(

  <Col xs="12" sm="12" md="12" className='exam_list'>
  <Col xs="12" sm="12" md="12" style={{borderBottom: '1px solid rgba( 0, 0, 0, 0.05 )', padding: '10PX 0PX'  }} >
<Row>
  <Col xs="1" sm="1" md="3"  style={{display: 'inline-block'}}>
   <img src={Object.values(this.props.ExamsReduce.result[eachdata])[i].LOGO_IMAGE} style={{width: '60px',height:'60px' }} className="exams-img-center"/>
   </Col>
  <Col xs="8" sm="8" md="8" style={{display: 'inline-block',textAlign: 'center'}}>
   <Col xs="12" sm="12" md="12" className='exam_name'>
   <h1 style={{float: 'left',marginTop:'0', textTransform:'uppercase',fontSize:'16px',fontWeight:'700',lineHeight:'36px',marginBottom: '0',color:'dimgray'}}>{Object.values(this.props.ExamsReduce.result[eachdata])[i].CLG_NAME}</h1>
   </Col><Col xs="12" sm="12" md="12" className='exam_name' style={{paddingBottom: '10px'}}>
   <h1 style={{textTransform:'uppercase',float:'left',fontSize:'14px',fontWeight:'700',marginBottom:'0',paddingLeft:'0PX' }}>{Object.values(this.props.ExamsReduce.result[eachdata])[i].EXAM_NAME}</h1>
   </Col>
   </Col>
   <Col xs="2" sm="2" md="1" style={{float: 'right'}}>
   <div style={{padding:'20px 5px',marginBottom:'10PX'}} >
   <label><FontAwesomeIcon
       icon="bell"
       color="#dee2e6"
       size="lg"
     />

   </label>
   </div>
   </Col>
   </Row>
   </Col>
   <Col xs="12" sm="12" md="12" style={{padding:'20px 5px',textAlign: 'center'}}>
   <Row>
    <Col xs="12" sm="12" md="3" style={{padding:'40px 10px',paddingRight:'20px',marginBottom:'10px', border:'1px solid #e9e9e9', background: '#f9f9f9' }}>
   <span style={{fontSize: '24px !important',color: '#917191'}}></span>
   <span className="bold" style={{fontSize:'18px',textTransform:'uppercase'}}>{Object.values(this.props.ExamsReduce.result[eachdata])[i].EXAM_DATE}</span>
   <br/><a href="" style={{textTransform: 'uppercase',textDecoration:'none',fontWeight:'600',fontSize:'14px',color:'#f96e5b'}}>examination date</a>
   </Col>
   <Col xs="12" sm="12" md="9" >
   <table className="table exam_reg_table table-bordered mg-0">
   <tbody>
   <tr>
   <td className="imp_dates-head" style={{backgroundColor: '#f9f9f9'}}>Registration Starts on</td>
   <td className="bold" style={{color: '#337ab7'}}>{Object.values(this.props.ExamsReduce.result[eachdata])[i].REG_START_DATE}</td>
   </tr>
   <tr>
   <td className="imp_dates-head" style={{backgroundColor: '#f9f9f9'}}>Registration Ends on</td>
   <td className="bold" style={{color: '#337ab7'}}>	{Object.values(this.props.ExamsReduce.result[eachdata])[i].REG_END_DATE}</td>
   </tr>
   <tr>
   <td className="imp_dates-head" style={{backgroundColor: '#f9f9f9'}}>Exam Starts on</td>
   <td className="bold" style={{color: '#337ab7'}}>{Object.values(this.props.ExamsReduce.result[eachdata])[i].EXAM_DATE}</td>
   </tr>
   </tbody>
   </table>
   </Col>
   </Row>
   </Col>
   <Col xs="12" sm="12" md="12"  style={{backgroundColor: '#f9F9F9' }}>
   <Col xs="12" sm="12" md="12">
     <Link to={'/ExamDetails/'+Object.values(this.props.ExamsReduce.result[eachdata])[i].EXAMID} >  <h1 className = "viewdetails" style= {{marginTop:'0', textTransform:'uppercase',fontSize:'16px',fontWeight:'700',lineHeight:'36px',marginBottom:'0',padding: '10px'}} >view full details</h1></Link>
  </Col>
  </Col>
   </Col>
)
}
}

        return (

          < Row style={{margin:'10px 20px 10px 20px'}} >
          <Helmet>
                          <meta charSet="utf-8" />
                          <title>Colleges Exams</title>
                          <meta name="description" content="Latest Exams related to colleges(How to prepare,results,important dates)" />
                          <meta name="keywords" content="list of colleges in India, top colleges in India, best colleges in India.Exams,Fests,Cutoffs,Placements  "/>


                          <meta property="og:image" content="https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/collegeexplore_logo.png"/>
                          <meta property="og:site_name" content="Collegeexplore"/>
                          <meta property="og:type" content="website"/>
                          <meta property="og:url" content="http://collegeexplore.in"/>
                          <meta property="og:title" content="Latest Exams of Colleges"/>
                          <meta property="og:description" content="Latest Exams related to colleges(How to prepare,results,important dates)"/>


                      </Helmet>

          <Col xs="12" sm="12" md="12" style={{borderBottom:'1px solid rgba( 0, 0, 0, 0.05 )',marginBottom: '20px'}}>
          <h1 style={{textTransform:'uppercase',fontWeight:'600',float:'left',color:'#777',fontSize:'18px'}}>Upcoming entrance exams</h1>
          </Col>
            <Route path={`/ExamDetails/:ExamId`} component={ExamDetails} />
            <Row>
              <Col xs="12" sm="12" md="12">
            <PXVideo
  sources={[
    "https://www.paypalobjects.com/webstatic/mktg/videos/PayPal_AustinSMB_baseline.mp4",
    "https://www.paypalobjects.com/webstatic/mktg/videos/PayPal_AustinSMB_baseline.webm"
  ]}
  caption={{
    label: "English captions",
    src: "../img/captions_PayPal_Austin_en.vtt",
    lang: "en",
    default: true
  }}
  poster="https://s3.us-east-2.amazonaws.com/elasticbeanstalk-us-east-2-083183914236/home_latest_info_ads/31.jpeg"
  width="640"
  height="360"
  controls
  id="myvid"
  fallback
  debug
/>
</Col>
</Row>
{addEXAMS}

</Row>
        );
    }
}


//state.user is userReducer
//state.math is mathReducer
const mapStateToProps = (state,ownProps) => {

    return {

        ExamsReduce:state.ExamsReduce

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
       SubmitReq:(datatosend) => {
           dispatch(examsSubmitReq(datatosend));},

           paramsHeader:(datatosend) => {
               dispatch(paramsToHeader(datatosend));
       },
       setStates:(datatosend1,datatosend2,datatosend3,datatosend4) => {
           dispatch(setExamStates(datatosend1,datatosend2,datatosend3,datatosend4));
   }

    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Exams);

Exams.propTypes = {
  examsSubmitReq: PropTypes.func.isRequired
}
