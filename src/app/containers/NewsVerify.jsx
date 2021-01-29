import React from "react";
import { Breadcrumb, BreadcrumbItem,Container, Row, Col,Card,CardTitle,CardBody,CardText,Button,
   Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../css/home.scss';
import { connect } from "react-redux";
import {setName} from "../actions/userActions";
import HomeCarousel from '../components/HomeCarousel';
import {paramsToHeader} from "../actions/HeaderParams";
import {SubmitReqUploadedNews,setfiltertype,handleuploadSubmitdata,setresult1,setNewsNow} from "../actions/Homeactions";
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
//export class App extends React.Component {   commenting because below redux will take care of attacting
 class NewsVerify extends React.Component {


//     changeUsername() {
// this.props.setName("king");
//     }

componentWillMount() {

 window.scrollTo(0, 0);
  if( this.props.match.url.includes('Home'))
  {
     this.props.paramsHeader(this.props);

  }
  this.serverRequestNews();

}
selecteddata({target}){
var data  = event.target.options[event.target.selectedIndex].text;
this.props.setfiltertype(data);
}

HandleNotifyNow({ target }){
 this.props.setNewsNow(target.checked);
}
  serverRequestNews (){


    var WORKSPACE_ID = "HOME_WORKSPACE";
  		var FUNCTION_ID = "GET_UPLOADED_NEWS";


    var Record = {

      "FUNCTION_ID" :FUNCTION_ID,
      "WORKSPACE_ID" : WORKSPACE_ID

    };
  var json = {
    "datatohost" : Record
  };
  var dande = 'ServerData=' + JSON.stringify(json);




   this.props.SubmitReqUploadedNews(dande);
  }

  handleuploadSubmitdata (item){

    var WORKSPACE_ID = "HOME_WORKSPACE";
      var FUNCTION_ID = "SEND_DATA_NEWS_WORKSPACE";


    var Record = {

      "FUNCTION_ID" :FUNCTION_ID,
      "WORKSPACE_ID" : WORKSPACE_ID,
"DATA_TO_SERV":item,
"filterdata":this.props.HomeReducer.filterdata,
"notifyreq":this.props.HomeReducer.NotifyNow
    };
  var json = {
    "datatohost" : Record
  };
  var dande = 'ServerData=' + JSON.stringify(json);




   this.props.handleuploadSubmitdata(dande);

  }



    render() {

      var items=[];var items1 = [];var items2;
        var  news=[];var exams=[];var fests=[];
      if (this.props.HomeReducer.result1==='000000') {

    alert("Successfully Uploaded");
    this.props.setresult1("");
      }
      if(this.props.HomeReducer.uploadednews[0]!= undefined){
    items = this.props.HomeReducer.uploadednews[0];

    items.map((item) => {
news.push(
  <Row>
  <Col xs="12" sm="12" md="5" >
 <img src={item.NEWS_IMAGE} style= {{ height: '100%',width:'100%',padding:'10px'}}/ >
  </Col>
  <Col xs="12" sm="12" md="7" style={{padding:'10px'}}>
  <Col xs="12" sm="12" md="12" style={{padding:'0px'}}>
  <h5 className='home-news-details-h5'>{item.NEWS_HEADER}</h5>
  <p >{item.NEWS_DETAILS}</p>
  <p className='home-news-p'>UPDATED DATE:<span style={{color:'#df4031'}}>{item.POSTED_DATE} </span></p>
  <p>Select FilterType</p>
  <FormGroup>
     <Input type="select" name="select" id="exampleSelect" onChange={this.selecteddata.bind(this)}  className = "searchdata">
       <option>Select</option>
       <option value="ALL">ALL</option>
       <option value="IITs">IITs</option>
       <option value="IIITS">IIITS</option>
       <option value="NITs">NITs</option>
       <option value="Deemed Universities">Deemed Universities</option>
     </Input>
   </FormGroup>
  <button      style={{margin: '10px'}} type="submit"  onClick={e => this.handleuploadSubmitdata(item)} className="btn btn-primary btn-raised">Approve</button>

  <input type="checkbox" value=""   style={{margin: '0px 5px 0px 0px'}}  onChange={this.HandleNotifyNow.bind(this)}/>
    <span className="pull-left"   >NOTIFY USERS</span>

  </Col>
  </Col>

</Row>
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
<h5 style={{padding: '5px',fontWeight: 'bold'}}>Uploaded News</h5>
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
      HomeReducer: state.HomeReducer
  };
};
const mapDispatchToProps = (dispatch) => {
    return {
       setName:(name) => {
           dispatch(setName(name));
       },
       paramsHeader:(datatosend) => {
           dispatch(paramsToHeader(datatosend));},

           setfiltertype:(datatosend) => {
               dispatch(setfiltertype(datatosend))
             },
             handleuploadSubmitdata:(datatosend) => {
                 dispatch(handleuploadSubmitdata(datatosend))
               },
               setresult1:(datatosend) => {
                   dispatch(setresult1(datatosend))
                 },
setNewsNow:(datatosend) => {
    dispatch(setNewsNow(datatosend))
  },

           SubmitReqUploadedNews:(datatosend) => {
               dispatch(SubmitReqUploadedNews(datatosend));
       }

    };
};
export default connect(mapStateToProps,mapDispatchToProps)(NewsVerify);
