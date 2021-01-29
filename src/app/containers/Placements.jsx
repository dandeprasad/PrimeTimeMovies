import React from "react";
import { Breadcrumb, BreadcrumbItem,Container, Row, Col,Card,CardTitle,CardBody,CardText,Button,Table } from 'reactstrap';
import { connect } from "react-redux";
import img from "../img/festEventBackGrnd.jpg";
import twitter from "../img/twitter.png";
import facebook from "../img/facebook.png";
import googleplus from "../img/google-plus-logo.png";
import iitmadraslogo from "../img/iitmadraslogo.png";
import students from "../img/students.jpg";
import festbackground1 from "../img/festbackground1.jpg";
import '../css/festeventdetails.scss';
import '../css/news-articles.scss';
import '../css/exams.scss';
import FestCarousel3 from '../components/FestEventDetails/FestCarousel3';
import {CutoffsClgsReq,CutoffsClgsNamesReq,CutoffsClgsIITReq,StateMaintainceReq} from "../actions/CutoffsActions";
import {ReqClgsPlacements} from "../actions/PlacementsActions";
import {Helmet} from "react-helmet";
import {paramsToHeader } from "../actions/HeaderParams"
import FestCarousel1 from '../components/FestEventDetails/FestCarousel1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import App from './App';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
class Placements extends React.Component {



constructor(props) {
  super(props);

}

componentWillMount() {

  if(  this.props.match.url === "/Placements")
  {
     this.props.paramsHeader(this.props);

  }
//if(this.props.ExamsReduce.result.length <=0){
    this.serverRequest();


}

HandleChangefclgType({ target }){


  var streamType = target.value ;
 this.props.StateMaintaince(streamType);

		this.getColleges( streamType);
  }
  HandleChangeColSelect({ target }){

    var clgName = target.value ;

this.getPlacementsData(clgName);
    }



    getPlacementsData(uniqueTosend){

      var startIndex = 0;
      var LastIndex = 100;

      var WORKSPACE_ID = "HOME_WORKSPACE";
  	  var FUNCTION_ID = "GET_PLACE_ONLY";
  	  var ACTION_ID = "GET_ALL_PLACE_STRING";



      var Record = {
        "WORKSPACE_ID" : WORKSPACE_ID,
        "FUNCTION_ID" : FUNCTION_ID,
        "ACTION_ID" : ACTION_ID,
        "SROW_INDEX" : startIndex,
        "EROW_INDEX": LastIndex,
        "uniqueTosend": uniqueTosend
      };
      var json = {
        "datatohost" : Record
      };
      var dande = 'ServerData=' + JSON.stringify(json);




       this.props.SubmitReqClgsPlacements(dande);


    }



getColleges(uniqueTosend){

  var startIndex = 0;
  var LastIndex = 100;

  var WORKSPACE_ID = "HOME_WORKSPACE";
  var FUNCTION_ID = "GET_STREAMS_ONLY";
  var ACTION_ID = "GET_CLG_STREAMS_STRING";



  var Record = {
    "WORKSPACE_ID" : WORKSPACE_ID,
    "FUNCTION_ID" : FUNCTION_ID,
    "ACTION_ID" : ACTION_ID,
    "SROW_INDEX" : startIndex,
    "EROW_INDEX": LastIndex,
    "uniqueTosend": uniqueTosend
  };
  var json = {
    "datatohost" : Record
  };
  var dande = 'ServerData=' + JSON.stringify(json);




   this.props.SubmitReqClgsNames(dande);


}

serverRequest (){


var WORKSPACE_ID = "HOME_WORKSPACE";
var FUNCTION_ID = "GET_CUTOFFS_FIRST";
var ACTION_ID = "GET_CUTOFFS_FIRST_STRING";


var Record = {
  "WORKSPACE_ID" : WORKSPACE_ID,
  "FUNCTION_ID" : FUNCTION_ID,
  "ACTION_ID" : ACTION_ID
};
var json = {
  "datatohost" : Record
};
var dande = 'ServerData=' + JSON.stringify(json);




 this.props.SubmitReq(dande);
}


    render() {


      const clgsdataview = [];


for (var eachdata = 0; eachdata < this.props.CutoffsReduce.clgs.length; eachdata += 1) {

          for (var i = 0; i < Object.keys(this.props.CutoffsReduce.clgs[eachdata]).length; i += 1) {


clgsdataview.push(
  <option key = {Object.values(this.props.CutoffsReduce.clgs[eachdata])[i].STREAM_ID} value={Object.values(this.props.CutoffsReduce.clgs[eachdata])[i].STREAM_ID}>{Object.values(this.props.CutoffsReduce.clgs[eachdata])[i].STREAM}</option>

//{Object.values(this.props.ExamsReduce.result[eachdata])[i].LOGO_IMAGE}
)
}
}

const clgsnamesdataview = [];


for (var eachdata = 0; eachdata < this.props.CutoffsReduce.clgnames.length; eachdata += 1) {

    for (var i = 0; i < Object.keys(this.props.CutoffsReduce.clgnames[eachdata]).length; i += 1) {


clgsnamesdataview.push(
<option key = {Object.values(this.props.CutoffsReduce.clgnames[eachdata])[i].CLG_ID} value={Object.values(this.props.CutoffsReduce.clgnames[eachdata])[i].CLG_ID}>{Object.values(this.props.CutoffsReduce.clgnames[eachdata])[i].CLG_NAME}</option>

//{Object.values(this.props.ExamsReduce.result[eachdata])[i].LOGO_IMAGE}
)
}
}



const cutoffsdataview = [];


for (var eachdata = 0; eachdata < this.props.PlacementsReduce["placementsdata"].length; eachdata += 1) {

    for (var i = 0; i < Object.keys(this.props.PlacementsReduce["placementsdata"][eachdata]).length; i += 1) {

      	var clg_data_values=0;
var datayearsplit = Object.values(this.props.PlacementsReduce["placementsdata"][0])[i];

	for (var k=0;k<(Object.keys(datayearsplit).length)/6;k++){

var value1 = Object.values(this.props.PlacementsReduce["placementsdata"][0])[i];

var jc = [];
for(var j=0;j<6;j++){

  if (clg_data_values == Object.keys(datayearsplit).length)
  {break;
  }

var cc =   <td> <img src={value1[clg_data_values].PLACE_COMPANY} style={{width: '60px',height:'60px' }} /></td>;
jc.push(cc);


clg_data_values = clg_data_values+1;
}
//{Object.values(this.props.ExamsReduce.result[eachdata])[i].LOGO_IMAGE}
if (clg_data_values == Object.keys(datayearsplit).length)
{break;
}

cutoffsdataview.push(<tr>{jc}</tr>);
}

}
}




        return (




          < Row style={{margin:'10px 20px 10px 20px',backgroundColor: '#f9F9F9'}} >
          <Helmet>
                          <meta charSet="utf-8" />
                          <title>College Placemtents</title>
                          <meta name="description" content="Placements of colleges" />
                          <meta name="keywords" content="list of colleges in India, top colleges in India, best colleges in India.Exams,Fests,Cutoffs,Placements  "/>


                          <meta property="og:image" content="https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/collegeexplore_logo.png"/>
                          <meta property="og:site_name" content="Collegeexplore"/>
                          <meta property="og:type" content="website"/>
                          <meta property="og:url" content="http://collegeexplore.in"/>
                          <meta property="og:title" content="College Placements"/>
                          <meta property="og:description" content="Placements of colleges"/>
                      </Helmet>








							 <Col xs="12" sm="12" md="12">
								<Row style={{marginBottom: "6px", marginTop: "6px"}}>
									<Col xs="12" sm="6" md="2"  className="cutoff_des" style={{    textAlign: 'center'}}>
										<span className="pull-left"  style={{padding: "6px 12px"}}>College Type</span>
									</Col>
								<Col xs="12" sm="6" md="8">
										<select id="streamcolleges" className="form-control"style={{color: '#000000'}} onChange={this.HandleChangefclgType.bind(this)}>
<option value="select" selected="">Select</option>
                    {clgsdataview}
                     </select>
									</Col>
								</Row>
							</Col>

              	<Col xs="12" sm="12" md="12">
								<Row style={{marginBottom: "6px", marginTop:"6px"}}>
                <Col xs="12" sm="6" md="2"  className="cutoff_des" style={{    textAlign: 'center'}}>
                  <span className="pull-left"  style={{padding: "6px 12px"}}>Colleges</span>
                </Col>
											<Col xs="12" sm="6" md="8">
										<select id="selectCollege" className="form-control"style={{color: '#000000'}}  onChange={this.HandleChangeColSelect.bind(this)}>
                    <option value="select" selected="">Select</option>
{clgsnamesdataview}
</select>
                    	</Col>
								</Row>
							</Col>
              <Col xs="12" sm="12" md="12">
              <Row style={{marginBottom: "6px", marginTop:"6px"}}>
              <Col xs="12" sm="6" md="2"  className="cutoff_des" style={{    textAlign: 'center'}}>
                <span className="pull-left"  style={{padding: "6px 12px"}}>Year</span>
              </Col>
                    <Col xs="12" sm="6" md="8">
                  <select id="selectCollege" className="form-control" style={{color: '#000000'}}><option value="select" selected="">Select</option> <option value="2017">2017</option> </select>
                </Col>
              </Row>
            </Col>


          <Col xs="12" sm="12" md="12">

          <Table  responsive bordered>
{/*<thead>
<tr>
<th>Round No</th>
<th>Streams</th>
<th>Category</th>
<th>Quota</th>
<th>Open Rank</th>
<th>Close Rank</th>
</tr>
</thead>*/}
<tbody>
{cutoffsdataview}
</tbody>
</Table>

            					</Col>


</Row>
        );
    }
}


//state.user is userReducer
//state.math is mathReducer
const mapStateToProps = (state,ownProps) => {

    return {

        CutoffsReduce:state.CutoffsReduce,
        PlacementsReduce:state.PlacementsReduce

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
       SubmitReq:(datatosend) => {
           dispatch(CutoffsClgsReq(datatosend));},
           SubmitReqClgsNames:(datatosend) => {
               dispatch(CutoffsClgsNamesReq(datatosend));},
               SubmitReqClgsPlacements:(datatosend) => {
                   dispatch(ReqClgsPlacements(datatosend));},
                   StateMaintaince:(datatosend) => {
                       dispatch(StateMaintainceReq(datatosend));},
           paramsHeader:(datatosend) => {
               dispatch(paramsToHeader(datatosend));
       }

    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Placements);
