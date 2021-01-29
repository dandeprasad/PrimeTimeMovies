import React from "react";
import { Breadcrumb, BreadcrumbItem,Container, Row, Col,Nav,
NavItem,
NavLink,Navbar,Card,CardBody,CardText,CardTitle,Table } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { connect } from "react-redux";
import img from "../img/festEventBackGrnd.jpg";
import twitter from "../img/twitter.png";
import facebook from "../img/facebook.png";
import googleplus from "../img/google-plus-logo.png";
import iitmadraslogo from "../img/iitmadraslogo.png";
import {paramsToHeader,hideExams} from "../actions/HeaderParams";
import festbackground1 from "../img/festbackground1.jpg";
import '../css/festeventdetails.scss';
import FestCarousel from '../components/FestEventDetails/FestCarousel';
import FestRegistration from './FestUserRegistration';
import {examsoverview,examshowtoprepare,examsimpdates,examsresults} from "../actions/ExamsDetailsActions";
import FestCarousel1 from '../components/FestEventDetails/FestCarousel1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link ,Route} from 'react-router-dom';
import {Helmet} from "react-helmet";
class ExamDetails extends React.Component {


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
  if( this.props.match.url.includes('ExamDetails'))
  {
     this.props.paramsHeader(this.props);

  }
  this.serverRequest();
  this.RequestHPrepare();
  this.loadimportantDates();
  this.loadresults();
}
serverRequest ( ){
  var WORKSPACE_ID = "HOME_WORKSPACE";
  			var FUNCTION_ID = "GET_EXAMS_ONLY";
  			var ACTION_ID = "GET_CLG_EXAMS_OVERVIEW";


var collegeid=this.props.match.params.ExamId;

var Record = {
  "WORKSPACE_ID" : WORKSPACE_ID,
  "FUNCTION_ID" : FUNCTION_ID,
  "ACTION_ID" : ACTION_ID,
  "EXAM_ID":collegeid
};

var json = {
  "datatohost" : Record
};
var dande = 'ServerData=' + JSON.stringify(json);


 this.props.SubmitReq(dande);
};
loadresults ( ){
  var WORKSPACE_ID = "HOME_WORKSPACE";
			var FUNCTION_ID = "GET_EXAMS_ONLY";
			var ACTION_ID = "GET_CLG_EXAMS_RESULTS";


var collegeid=this.props.match.params.ExamId;

var Record = {
  "WORKSPACE_ID" : WORKSPACE_ID,
  "FUNCTION_ID" : FUNCTION_ID,
  "ACTION_ID" : ACTION_ID,
  "EXAM_ID":collegeid
};

var json = {
  "datatohost" : Record
};

var dande = 'ServerData=' + JSON.stringify(json);


 this.props.Submitresults(dande);
};
loadimportantDates ( ){

  var WORKSPACE_ID = "HOME_WORKSPACE";
    var FUNCTION_ID = "GET_EXAMS_ONLY";
    var ACTION_ID = "GET_CLG_EXAMS_DATES";


var collegeid=this.props.match.params.ExamId;

var Record = {
  "WORKSPACE_ID" : WORKSPACE_ID,
  "FUNCTION_ID" : FUNCTION_ID,
  "ACTION_ID" : ACTION_ID,
  "EXAM_ID":collegeid
};

var json = {
  "datatohost" : Record
};
var dande = 'ServerData=' + JSON.stringify(json);


 this.props.Submitimpdates(dande);
};

RequestHPrepare ( ){
  var WORKSPACE_ID = "HOME_WORKSPACE";
    var FUNCTION_ID = "GET_EXAMS_ONLY";
    var ACTION_ID = "GET_CLG_EXAMS_PREPARE";
var collegeid=this.props.match.params.ExamId;

var Record = {
  "WORKSPACE_ID" : WORKSPACE_ID,
  "FUNCTION_ID" : FUNCTION_ID,
  "ACTION_ID" : ACTION_ID,
  "EXAM_ID":collegeid
};

var json = {
  "datatohost" : Record
};
var dande = 'ServerData=' + JSON.stringify(json);


 this.props.serverRequestHPrepare(dande);
};

examsSwapClick(datain){

if (datain==("OVERVIEW")){
   this.props.paramsExamshide({
     overview:true,
     prepare:false,
     impdates:false,
     result:false
   });
}
if (datain==("PREPARE")){
   this.props.paramsExamshide({
     overview:false,
     prepare:true,
     impdates:false,
     result:false
   });
}
if (datain==("IMPDATES")){
   this.props.paramsExamshide({
     overview:false,
     prepare:false,
     impdates:true,
     result:false
   });
}
if (datain==("RESULTS")){
   this.props.paramsExamshide({
     overview:false,
     prepare:false,
     impdates:false,
     result:true
   });
}

}

  componentDidUpdate(nextProps){

  }





    render() {
      {/* over all data */}

      var exam_overview ={};
        var exam_prepare ={};
var exam_impdates ={};
var exam_results ={};
  const examdeta_metadata = [];

    if (this.props.ExamsDetailsReduce.result.length>0){
       exam_overview =   Object.values( this.props.ExamsDetailsReduce.result[0])[0];
      examdeta_metadata.push(
        <Helmet>
                        <meta charSet="utf-8" />
                        <title>CollegeExplore:{exam_overview.EXAM_NAME}</title>
                        <meta name="description" content={exam_overview.EXAM_OVERVIEW}/>
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
     if (this.props.ExamsDetailsReduce.prepare.length>0)
      exam_prepare =   Object.values( this.props.ExamsDetailsReduce.prepare[0])[0];
      if (this.props.ExamsDetailsReduce.impdates.length>0)
       exam_impdates =   Object.values( this.props.ExamsDetailsReduce.impdates[0])[0];

       if (this.props.ExamsDetailsReduce.examresults.length>0)
        exam_results =   Object.values( this.props.ExamsDetailsReduce.examresults[0])[0];

        const addExamDetails = [];
        addExamDetails.push(

          <Col xs="12" sm="12" md="12" style={{backgroundColor:"#EFEFEF"}} >

                                          <Col  xs="12" sm="12" md="12" style={{padding:"10px 0px 0px 0px"}}>


                                              <Col  xs="12" sm="12" md="12" style= {{textAlign: "center"}} >
                                                   <img style={{width: "100px",height: "100px" }} src={exam_overview.LOGO_IMAGE}/>
                                                   <div className="content_middle">
                                          <a  style={{lineHeight:'36px',fontSize: '20px', textTransform:'uppercase',listStyle: 'none', letterSpacing:'.5px'}}>{exam_overview.EXAM_NAME}</a>

                                          <p style={{letterSpacing:'3px',textAlign:'center'}}>{exam_overview.CLG_NAME}</p>




                                          </div>

                                          </Col>
                                          <Row>
<Col  xs="6" sm="6" md="3" style={{padding:"10px 0px 0px 0px"}}>
<p>Registration Start Date:<span>{exam_overview.REG_START_DATE} </span></p>
</Col>
<Col  xs="0" sm="0" md="6" style={{padding:"10px 0px 0px 0px"}}>

</Col>
<Col  xs="6" sm="6" md="3" style={{padding:"10px 0px 0px 0px"}}>
<p>Registration End Date:<span>{exam_overview.REG_END_DATE} </span></p>
</Col>
</Row>
                          </Col>

           </Col>
        );

        const addExamOverview = [];

        addExamOverview.push(



                                          <Col  xs="12" sm="12" md="12" style={{padding:"10px 0px 0px 0px"}}>


                                          <Card>
                                            <CardBody>
<CardTitle>{exam_overview.EXAM_NAME}</CardTitle>
                                              <CardText> <div  dangerouslySetInnerHTML={{ __html: exam_overview.EXAM_OVERVIEW }}></div></CardText>

                                            </CardBody>
                                          </Card>



                                          </Col>



        );

        const addExamPrepare = [];

        addExamPrepare.push(



                                          <Col  xs="12" sm="12" md="12" style={{padding:"10px 0px 0px 0px"}}>


                                          <Card>
                                            <CardBody>
<CardTitle>QUESTION PAPER ANALYSIS</CardTitle>
                                              <CardText> <div  dangerouslySetInnerHTML={{ __html: exam_prepare.QUEST_PAPER_ANALYS }}></div></CardText>

                                            </CardBody>
                                            <CardBody>
<CardTitle>EXAM SYLLABUS</CardTitle>
                                              <CardText> <div  dangerouslySetInnerHTML={{ __html: exam_prepare.EXAM_SYLLABUS }}></div></CardText>

                                            </CardBody>
                                          </Card>



                                          </Col>



        )
        const addExamImpdates = [];

        addExamImpdates.push(



                                          <Col  xs="12" sm="12" md="12" style={{padding:"10px 0px 0px 0px"}}>


                                          <Card>
                                            <CardBody>
                                            <Table hover responsive bordered>
                                          <thead>
                                          <tr>
                                                <th>{exam_overview.EXAM_NAME}</th>
                                          <th>EXAM DATES</th>

                                          </tr>
                                            </thead>



                                          <tbody>
                                          <tr>
                                          <td>REGISTRATION STARTS ON</td>
                                        <td>{exam_impdates.REG_START_DATE}</td>
                                          </tr>

                                          <tr>
                                          <td>REGISTRATION ENDS ON</td>
                                        <td>{exam_impdates.REG_END_DATE}</td>
                                          </tr>
                                          <tr>
                                          <td>REGISTRATION ENDS ON</td>
                                        <td>{exam_impdates.REG_END_DATE}</td>
                                          </tr>
                                          <tr>
                                          <td>ADMIT CARD DATE</td>
                                        <td>{exam_impdates.ADMIT_CARD_DATE}</td>
                                          </tr>
                                          <tr>
                                          <td>EXAM STARTS DATE</td>
                                        <td>{exam_impdates.EXAM_START_DATE}</td>
                                          </tr>
                                          <tr>
                                          <td>EXAM END DATE</td>
                                        <td>{exam_impdates.EXAM_END_DATE}</td>
                                          </tr>
                                          <tr>
                                          <td>PAPER BASED EXAM DATE</td>
                                        <td>{exam_impdates.PAPER_BASED_EXAM_DATE}</td>
                                          </tr>
                                          <tr>
                                          <td>COMPUTER BASED EXAM DATE</td>
                                        <td>{exam_impdates.COMPUTER_BASED_EXAM_DATE}</td>
                                          </tr>
                                          <tr>
                                          <td>RESULTS DATE	</td>
                                        <td>{exam_impdates.RESULT_DATE}</td>
                                          </tr>
                                          <tr>
                                          <td>TEST CENTRE DETAIS</td>
                                        <td></td>
                                          </tr>
                                          </tbody>
                                          </Table>


                                            </CardBody>
                                          </Card>



                                          </Col>



        );
        const addExamResult = [];

        addExamResult.push(



                                          <Col  xs="12" sm="12" md="12" style={{padding:"10px 0px 0px 0px"}}>


                                          <Card>
                                            <CardBody>
<CardTitle>RESULTS</CardTitle>
                                              <CardText> <div  dangerouslySetInnerHTML={{ __html: exam_results.EXAMS_RESULT_PAGE }}></div></CardText>

                                            </CardBody>

                                          </Card>



                                          </Col>



        )

      return (

        <Row>
        {examdeta_metadata}
        <Col xs="12" sm="12"md="12"  style={{padding: '0px'}} >
{addExamDetails}
        </Col>
        <Col xs="12" sm="12"md="12"  style={{padding: '0px'}} >
          <Navbar color="light" light expand="md" className="navbar-futureglc" >
        <Nav className="ml-auto" navbar style = {{ padding: '0px 10px 0px 10px'}}>
        <NavItem  >
                  <NavLink className="evt-details-nav"  to="#" activeClassName="active " tag={RRNavLink}  href="#" onClick={() => this.examsSwapClick("OVERVIEW")} >OVERVIEW</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink   to="#" href="#" tag={RRNavLink} onClick={() => this.examsSwapClick("PREPARE")}>HOW TO PREPARE</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  to="#" href="#"tag={RRNavLink} onClick={() => this.examsSwapClick("IMPDATES")}>IMPORTANT DATES</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  to = "#" href="#" tag={RRNavLink} onClick={() => this.examsSwapClick("RESULTS")}>RESULTS</NavLink>
                  </NavItem>

                  </Nav>
                  </Navbar>


                  </Col>
                  {this.props.Pathparamsreduce.examshideinfo.overview && addExamOverview}
                    {this.props.Pathparamsreduce.examshideinfo.prepare && addExamPrepare}
                      {this.props.Pathparamsreduce.examshideinfo.impdates && addExamImpdates}
                        {this.props.Pathparamsreduce.examshideinfo.result && addExamResult}
        </Row>
      );




    }
}




const mapStateToProps = (state,ownProps) => {

    return {
        ExamsDetailsReduce: state.ExamsDetailsReduce,
        Pathparamsreduce:state.Pathparamsreduce

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
      SubmitReq:(datatosend) => {
          dispatch(examsoverview(datatosend));},
          serverRequestHPrepare:(datatosend) => {
              dispatch(examshowtoprepare(datatosend));},
              Submitimpdates:(datatosend) => {
                  dispatch(examsimpdates(datatosend));},
                  Submitresults:(datatosend) => {
                      dispatch(examsresults(datatosend));},
           paramsHeader:(datatosend) => {
               dispatch(paramsToHeader(datatosend));},
               paramsExamshide:(datatosend) => {
                   dispatch(hideExams(datatosend));
       }

    };
};


export default connect(mapStateToProps,mapDispatchToProps)(ExamDetails);
