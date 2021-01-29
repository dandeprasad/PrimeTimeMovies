import React from "react";
import { Container, Row, Col,Button,Table ,NavLink} from 'reactstrap';
import { connect } from "react-redux";
import '../css/cutoffs.scss';
import {CutoffsClgsReq,CutoffsClgsNamesReq,CutoffsClgsIITReq,StateMaintainceReq} from "../actions/CutoffsActions";
import {paramsToHeader } from "../actions/HeaderParams";
import {Helmet} from "react-helmet";
import CutoffFilters from '../components/Cutoffs/CutoffFilters';

import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
class Cutoffs extends React.Component {



constructor(props) {
  super(props);

}

componentWillMount() {

  if(  this.props.match.url === "/Cutoffs")
  {
     this.props.paramsHeader(this.props);
this.serverRequest();
  }
//if(this.props.ExamsReduce.result.length <=0){



}


HandleChangefclgType({ target }){


  var streamType = target.value ;
 this.props.StateMaintaince(streamType);

		this.getColleges( streamType);
  }
  HandleChangeColSelect({ target }){

    var clgName = target.value ;


  	if(this.props.CutoffsReduce.selectedclg=="IIT" ){

  		this.getIITSdata( clgName,"GET_CUTOFF_DETAILS_IIT");
    }
    if(this.props.CutoffsReduce.selectedclg=="IIIT" ){

      this.getIITSdata( clgName,"GET_CUTOFF_DETAILS_IIIT");
    }
    }



    getIITSdata(uniqueTosend,actionidpassed){

      var startIndex = 0;
      var LastIndex = 100;

      var WORKSPACE_ID = "HOME_WORKSPACE";
      var FUNCTION_ID = "GET_CUTOFF_DETAILS";
      var ACTION_ID = actionidpassed;



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




       this.props.SubmitReqClgsCutoffsIIT(dande);


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

  if (this.props.CutoffsReduce.clgs.length>0){
for (var eachdata = 0; eachdata < this.props.CutoffsReduce.clgs.length; eachdata += 1) {

          for (var i = 0; i < Object.keys(this.props.CutoffsReduce.clgs[eachdata]).length; i += 1) {


clgsdataview.push(
  <option key = {Object.values(this.props.CutoffsReduce.clgs[eachdata])[i].STREAM_ID} value={Object.values(this.props.CutoffsReduce.clgs[eachdata])[i].STREAM_ID}>{Object.values(this.props.CutoffsReduce.clgs[eachdata])[i].STREAM}</option>

//{Object.values(this.props.ExamsReduce.result[eachdata])[i].LOGO_IMAGE}
)
}
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


for (var eachdata = 0; eachdata < this.props.CutoffsReduce.iit_iiit_data.length; eachdata += 1) {

    for (var i = 0; i < Object.keys(this.props.CutoffsReduce.iit_iiit_data[eachdata]).length; i += 1) {


cutoffsdataview.push(
  <tr>
  <td>Final Round</td>
  <td>{Object.values(this.props.CutoffsReduce.iit_iiit_data[eachdata])[i].COURSE}</td>
  <td>{Object.values(this.props.CutoffsReduce.iit_iiit_data[eachdata])[i].QUOTA}</td>
  <td>{Object.values(this.props.CutoffsReduce.iit_iiit_data[eachdata])[i].CATEGORY}</td>
  <td>{Object.values(this.props.CutoffsReduce.iit_iiit_data[eachdata])[i].OPENING_RANK}</td>
  <td>{Object.values(this.props.CutoffsReduce.iit_iiit_data[eachdata])[i].CLOSING_RANK}</td>
  </tr>
//{Object.values(this.props.ExamsReduce.result[eachdata])[i].LOGO_IMAGE}
)
}
}
const cutoffsMaindata = [];
cutoffsMaindata.push(
  < Row style={{margin:'10px 20px 10px 20px',backgroundColor: '#f9F9F9'}} >
   <Col xs="12" sm="12" md="12"  style={{color: "red !important"}}>
<Button>
  <NavLink href="/Cutoffs/AP-EAMCET"  className="nav-header-glance"  >AP EAMCET CUTOFFS</NavLink>
  </Button>
  </Col>
  							 <Col xs="12" sm="12" md="12">
  								<Row style={{marginBottom: "6px", marginTop: "6px"}}>
  									<Col xs="12" sm="6" md="2"  className="cutoff_des" style={{    textAlign: 'center'}}>
  										<span className="pull-left"  style={{padding: "6px 12px"}}>College Type</span>
  									</Col>
  								<Col xs="12" sm="6" md="8">
  										<select id="streamcolleges" className="form-control" style={{color: '#000000'}} style={{color: '#000000'}}  onChange={this.HandleChangefclgType.bind(this)}>
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
  										<select id="selectCollege" className="form-control" style={{color: '#000000'}} onChange={this.HandleChangeColSelect.bind(this)}>
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

            <Table hover responsive bordered>
  <thead>
  <tr>
  <th>Round No</th>
  <th>Streams</th>
  <th>Category</th>
  <th>Quota</th>
  <th>Open Rank</th>
  <th>Close Rank</th>
  </tr>
  </thead>
  <tbody>
  {cutoffsdataview}
  </tbody>
  </Table>

              					</Col>


                        </Row>
)


        return (


<Row>
<Helmet>
                <meta charSet="utf-8" />
                <title>College cutoffs</title>
                <meta name="description" content="Cutoffs of colleges" />
                <meta name="keywords" content="list of colleges in India, top colleges in India, best colleges in India.Exams,Fests,Cutoffs,Placements  "/>

                <meta property="og:image" content="https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/collegeexplore_logo.png"/>
                <meta property="og:site_name" content="Collegeexplore"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="http://collegeexplore.in"/>
                <meta property="og:title" content="College Cutoffs"/>
                <meta property="og:description" content="Cutoffs of colleges"/>

            </Helmet>

{!this.props.Pathparamsreduce.cutoffhideinfo && cutoffsMaindata}
<Route path={`/Cutoffs/:cutoffType`} component={CutoffFilters}/>
</Row>
        );
    }
}


//state.user is userReducer
//state.math is mathReducer
const mapStateToProps = (state,ownProps) => {

    return {

        CutoffsReduce:state.CutoffsReduce,
          Pathparamsreduce:state.Pathparamsreduce

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
       SubmitReq:(datatosend) => {
           dispatch(CutoffsClgsReq(datatosend));},
           SubmitReqClgsNames:(datatosend) => {
               dispatch(CutoffsClgsNamesReq(datatosend));},
               SubmitReqClgsCutoffsIIT:(datatosend) => {
                   dispatch(CutoffsClgsIITReq(datatosend));},
                   StateMaintaince:(datatosend) => {
                       dispatch(StateMaintainceReq(datatosend));},
           paramsHeader:(datatosend) => {
               dispatch(paramsToHeader(datatosend));
       }

    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Cutoffs);
