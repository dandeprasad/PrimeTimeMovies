import React from "react";
import { Breadcrumb, BreadcrumbItem,Container, Row, Col,Card,CardTitle,CardBody,CardText,Button,
   Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../css/home.scss';
import { connect } from "react-redux";
import {setName} from "../actions/userActions";
import HomeCarousel from '../components/HomeCarousel';
import {paramsToHeader} from "../actions/HeaderParams";
import {SubmitReqUploadedFests,handlefestverifydatamaintaince,handleuploadSubmitdatafests,setresult1} from "../actions/FestVerifyActions";


import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
//export class App extends React.Component {   commenting because below redux will take care of attacting
 class FestVerify extends React.Component {


//     changeUsername() {
// this.props.setName("king");
//     }

componentWillMount() {

 window.scrollTo(0, 0);
  if( this.props.match.url.includes('Home'))
  {
     this.props.paramsHeader(this.props);

  }
  this.serverRequestFestVerify();

}


HandleNotifyNow({ target }){

 var clg_id = target.checked ;
this.props.festverifydatamaintaince({"NOTIFY_CND":clg_id});
}
  serverRequestFestVerify (){


    var WORKSPACE_ID = "HOME_WORKSPACE";
  		var FUNCTION_ID = "GET_UPLOADED_FESTS";


    var Record = {

      "FUNCTION_ID" :FUNCTION_ID,
      "WORKSPACE_ID" : WORKSPACE_ID

    };
  var json = {
    "datatohost" : Record
  };
  var dande = 'ServerData=' + JSON.stringify(json);




   this.props.SubmitReqUploadedFests(dande);
  }

  handleuploadSubmitdata (item){

    var WORKSPACE_ID = "HOME_WORKSPACE";
      var FUNCTION_ID = "SEND_DATA_FESTS_WORKSPACE";


    var Record = {

      "FUNCTION_ID" :FUNCTION_ID,
      "WORKSPACE_ID" : WORKSPACE_ID,
"DATA_TO_SERV":item,
"extra_data":this.props.festRegisreduce.festverifylocaldata
    };
  var json = {
    "datatohost" : Record
  };
  var dande = 'ServerData=' + encodeURIComponent(JSON.stringify(json));




   this.props.handleuploadSubmitdata(dande);

  }



HandleChangeclgUniqeid({ target }){


  var clg_id = target.value ;
 this.props.festverifydatamaintaince({"UNIQUE_CLG_ID":clg_id});

  }

  HandleChangeFestType({ target }){


    var clg_id = target.value ;
   this.props.festverifydatamaintaince({"FEST_TYPE":clg_id});

    }
HandleChangefclgType({ target }){


  var clg_id = target.value ;
 this.props.festverifydatamaintaince({"CLG_TYPE":clg_id});

  }
  HandleChangedeprtType({ target }){


    var clg_id = target.value ;
   this.props.festverifydatamaintaince({"DEPRT_TYPE":clg_id});

    }



    render() {

      var items=[];var items1 = [];var items2;
        var  news=[];var exams=[];var fests=[];
      if (this.props.festRegisreduce.result1==='000000') {

    alert("Successfully Uploaded");
    this.props.setresult1("");
      }
      if(this.props.festRegisreduce.festverifydata!= ""){
    items = this.props.festRegisreduce.festverifydata;

    items.map((item) => {

      const clgsdataview = [];
      if (item.CLG_KEYS.length>0){
        var data = JSON.parse(item.CLG_KEYS);
    for (var eachdata = 0; eachdata < data.length; eachdata += 1) {

    clgsdataview.push(
      <option key = {data[eachdata]} value={data[eachdata]}>{data[eachdata]}</option>
)

    }
    }

news.push(



    <Card id="fests-card"    style={{padding:'25px',margin:'5px'}}>
  <Row>
  <Col xs="12" sm="12" md="6" >
  <p>Fest Banner</p>
 <img src={item.FEST_BANNER} style= {{ height: '350px',width:'100%',padding:'10px'}}/ >
  </Col>
    <Col xs="12" sm="12" md="6" >
  <h5 className='home-news-details-h5'>Personal Information</h5>
  <p >YOUR NAME: {item.UR_NAME}</p>
  <p >YOUR EMAIL ADDRESS: {item.UR_EMAIL_ADDRS}</p>
    <p >YOUR PHONE NUMBER: {item.YOUR_PH_NUMBER}</p>

    </Col>
    <Col xs="12" sm="12" md="6" style={{padding:'0px'}}>
      <h5 className='home-news-details-h5'>College Information</h5>
        <p >COLLEGE NAME: {item.CLG_NAME}</p>
        <p >COLLEGE TYPE: {item.CLG_TYPE}</p>
        <p >COLLEGE WEBSITE: {item.CLG_WEBSITE}</p>
        <p >COLLEGE EMAIL-ID: {item.CLG_EMAILID}</p>
        <p >COLLEGE PHONE NUMBER: {item.CLG_PH_NUM}</p>
          <p >COLLEGE LOCATION: {item.CLG_LOC}</p>
            <p >HOW TO REACH: {item.HW_REACH}</p>
  </Col>
    <Col xs="12" sm="12" md="6" style={{padding:'0px'}}>
        <h5 className='home-news-details-h5'>Fest Information</h5>
    <p >FEST NAME: {item.FEST_NAME}</p>
    <p >FEST CAPTION: {item.FEST_CAPTION}</p>
    <p >FEST TYPE: {item.FEST_TYPE}</p>
    <p >FEST DESCRIPTION: {item.FEST_DESC}</p>
    <p >FEST WEBSITE: {item.FEST_WEBSITE}</p>
    <p >FEST DEPARTMENT: {item.FEST_DEPRT}</p>
    <p >FEST START DATE: {item.FEST_ST_DATE}</p>
    <p >FEST END DATE: {item.FEST_END_DATE}</p>
      <p >FEST REGISTRATION URL'S: {item.FEST_REG_URL}</p>
        <p >FEST ACCOMODATION: {item.FEST_ACC}</p>
          <p >FEST EMAIL ADDRESS: {item.FEST_EMAIL_ADD}</p>
  </Col>

  <Col xs="12" sm="12" md="12" style={{padding:'0px'}}>



<h5 className='home-news-details-h5'>Event Information</h5>
    <p >EVENT DATA: {item.EVENTS_DATA}</p>
    <h5 className='home-news-details-h5'>Workshop Information</h5>
        <p >WORKSHOP DATA: {item.WORKSHOP_DATA}</p>
        <h5 className='home-news-details-h5'>Paper Persentaion Information</h5>
            <p >PAPER PRES DATA: {item.PAPER_PRES_DATA}</p>
</Col>
  <Col xs="12" sm="12" md="6" style={{padding:'0px'}}>
            <h5 className='home-news-details-h5'>Others</h5>
        <p >FEST GUEST: {item.FEST_GUEST}</p>
        <p >FEST SPONSORS: {item.FEST_SPONSERS}</p>
        <p >DEAD LINE REGISTRATION: {item.DEADLINE_REG}</p>
        <p >REGISTRATION FEE: {item.REG_FEE}</p>
        <p >FEST CONTACT PERSON: {item.FEST_CONT_PERSN}</p>
</Col>
  <Col xs="12" sm="12" md="6" style={{padding:'0px'}}>
        <h5 className='home-news-details-h5'>Fest Links</h5>
      <p >COLLEGE WEBSITE: {item.CLG_WEBSITE}</p>
      <p >FEST WEBSITE: {item.FEST_WEBSITE}</p>
      <p >FACEBOOK: {item.FACEBOOK_LINK}</p>
      <p >TWITTER: {item.TWITTER_LINK}</p>
      <p >YOUTUBE LINK: {item.YOUTUBE_LINK}</p>
</Col>

<p><b>College Fest Belongs</b><span className="req-ind">*</span></p>
    <select id="streamcolleges" className="form-control" style={{color: '#000000'}} style={{color: '#000000'}} onChange={this.HandleChangeclgUniqeid.bind(this)} >
<option value="select" selected="">Select</option>
    {clgsdataview}
     </select>

     <p><b>Fest Type</b><span className="req-ind">*</span></p>
         <select id="streamcolleges1" className="form-control" style={{color: '#000000'}} style={{color: '#000000'}}  onChange={this.HandleChangeFestType.bind(this)}>
     <option value="select" selected="">Select</option>
        <option value="TECHNICAL" >TECHNICAL</option>
        <option value="CULTURAL" >CULTURAL</option>
        <option value="SPORTS" >SPORTS</option>
        <option value="WORKSHOP" >WORKSHOP</option>
        <option value="PAPERPRESENTATION" >PAPERPRESENTATION</option>
        <option value="ALL" >ALL</option>

          </select>
          <p><b>College Type</b><span className="req-ind">*</span></p>
              <select id="streamcolleges2" className="form-control" style={{color: '#000000'}} style={{color: '#000000'}} onChange={this.HandleChangefclgType.bind(this)}  >
          <option value="select" selected="">Select</option>
             <option value="IIT" >IIT</option>
             <option value="DEEMED" >DEEMED</option>
             <option value="NIT" >NIT</option>
             <option value="IIM" >IIM</option>
             <option value="AUTONOMOUS" >AUTONOMOUS</option>
              <option value="PRIVATE_CLGS" >PRIVATE_CLGS</option>
             <option value="OTHER" >OTHER</option>

               </select>
               <p><b>DEPARTMENT Type</b><span className="req-ind">*</span></p>
                   <select id="streamcolleges2" className="form-control" style={{color: '#000000'}} style={{color: '#000000'}} onChange={this.HandleChangedeprtType.bind(this)}  >
               <option value="select" selected="">Select</option>
                  <option value="ECE" >ECE</option>
                  <option value="EEE" >EEE</option>
                  <option value="CSE" >CSE</option>
                  <option value="CIVIL" >CIVIL</option>
                  <option value="MECH" >MECH</option>
                  <option value="CHEMICAL" >CHEMICAL</option>
                  <option value="METALLURGY" >METALLURGY</option>
                  <option value="Agricultural" >Agricultural</option>
                  <option value="Aeronautical" >Aeronautical</option>
                  <option value="BioTechnology" >BioTechnology</option>
                    <option value="Telecommunication" >Telecommunication</option>
                    <option value="Medical" >Medical</option>

                  <option value="IT" >IT</option>
                  <option value="ALL" >ALL</option>

                    </select>

  <Col xs="12" sm="12" md="12" style={{padding:'0px'}}>
  <button      style={{margin: '10px'}} type="submit"  onClick={e => this.handleuploadSubmitdata(item)} className="btn btn-primary btn-raised">Approve</button>

  <input type="checkbox" value=""   style={{margin: '0px 5px 0px 0px'}}  onChange={this.HandleNotifyNow.bind(this)}/>
    <span className="pull-left"   >NOTIFY USERS</span>



  </Col>

</Row>
</Card>
);
    });

      }



        return (
          <Card id="fests-card"    style={{padding:'25px'}}>
          < Row  style={{backgroundColor: '#010c29'}} >



<Col xs="12" sm="12" md="12" >
<Row style={{backgroundColor: '#ffffff'}}>

<Col xs="12" sm="12" md="12" >
<Row style={{backgroundColor: '#ffffff'}}>
<Col xs="12" sm="12" md="12" >
<h5 style={{padding: '5px',fontWeight: 'bold'}}>Uploaded Fests</h5>
{news}
</Col>
</Row>
</Col>

</Row>
</Col>
</Row>
</Card>

        );
    }
}
//state.user is userReducer
//state.math is mathReducer
const mapStateToProps = (state) => {
  return {
      HomeReducer: state.HomeReducer,
      festRegisreduce:state.festRegisreduce
  };
};
const mapDispatchToProps = (dispatch) => {
    return {
       setName:(name) => {
           dispatch(setName(name));
       },
       paramsHeader:(datatosend) => {
           dispatch(paramsToHeader(datatosend));},

             handleuploadSubmitdata:(datatosend) => {
                 dispatch(handleuploadSubmitdatafests(datatosend))
               },

               setresult1:(datatosend) => {
                   dispatch(setresult1(datatosend))
                 },
                 festverifydatamaintaince:(datatosend) => {
                     dispatch(handlefestverifydatamaintaince(datatosend))
                   },

           SubmitReqUploadedFests:(datatosend) => {
               dispatch(SubmitReqUploadedFests(datatosend));
       }

    };
};
export default connect(mapStateToProps,mapDispatchToProps)(FestVerify);
