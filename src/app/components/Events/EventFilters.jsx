import React from "react";
import { Breadcrumb, BreadcrumbItem,Container, Row, Col,Card,CardTitle,CardBody,CardText,Button,CardLink,Input } from 'reactstrap';


import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import students from "../../img/students.jpg";
import {paramsToHeader,hideEvents} from "../../actions/HeaderParams";
import {eventsActionsFilters,makeFilterDataEmpty ,setEventsStates} from "../../actions/EventsActions";
import {setName} from "../../actions/userActions";
import { Link ,Route} from 'react-router-dom';
//export class App extends React.Component {   commenting because below redux will take care of attacting
 class EventFilters extends React.Component {


//     changeUsername() {
// this.props.setName("king");
//     }

constructor(props) {
  super(props);
  this.state = {
   posts:[]


  }
}
componentWillMount() {

  this.props.makeFilterDataEmpty();

if( this.props.EventsReducer.filterdata <=0){
  this.serverRequest(0,5);
}
this.props.hideEvents(true);

  if(  this.props.match.url === "/Events")
  {
     this.props.paramsHeader(this.props);

  }



window.addEventListener('scroll', this.listenToScroll.bind(this))
}
componentWillUnmount() {
  window.removeEventListener('scroll', this.listenToScroll.bind(this))
}

// componentWillReceiveProps(nextProps) {
//     if (nextProps.location.pathname !== this.props.location.pathname) {
//       //this.props.match.params.filterTypeId
//       console.log("here");
//       //take action here
//     //  this.props.makeFilterDataEmpty();
//
//       this.props.makeFilterDataEmpty(
//           () => {
//   this.serverRequest(0,5);
//        });
//
//
//
//
//     this.props.hideEvents(true);
//     }
//   }
  componentDidUpdate(nextProps){
     if (nextProps.location.pathname !== this.props.location.pathname) {
   this.props.makeFilterDataEmpty();
      this.serverRequest(0,5);
      this.props.hideEvents(true);
    }
  }

listenToScroll (){
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

  const scrolled = winScroll / height





  this.props.setStates(this.props.EventsReducer.stdata.startIndex,this.props.EventsReducer.stdata.LastIndex,this.props.EventsReducer.stdata.requestProcessing,scrolled);
   this.onChangedata();

}

onChangedata(){
    if (this.props.EventsReducer.stdata.theposition >=0.7){

      this.props.setStates(this.props.EventsReducer.stdata.startIndex,this.props.EventsReducer.stdata.LastIndex,true,this.props.EventsReducer.stdata.theposition);
  //requestProcessing= true

      if (this.props.EventsReducer.stdata.requestProcessing){

    const val1 =  this.props.EventsReducer.stdata.startIndex+5;
    const val2 = this.props.EventsReducer.stdata.LastIndex;

this.serverRequest (val1,val2);

this.props.setStates(val1,val2,this.props.EventsReducer.stdata.requestProcessing,this.props.EventsReducer.stdata.theposition);

//  startIndex= val1;
  // LastIndex =val2;


}}

}


serverRequest ( startindex , lastindex){



var filterKey=this.props.match.params.filterTypeId;

var startIndex = startindex;
var LastIndex = lastindex;
var WORKSPACE_ID = "HOME_WORKSPACE";
  var FUNCTION_ID = "GET_FESTS_NOTIFICATIONS";
  var ACTION_ID = "GET_FEST_FILTER_STRING";



  var Record = {

    "FUNCTION_ID" :FUNCTION_ID,
    "WORKSPACE_ID" : WORKSPACE_ID,
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
};

    render() {


        const addEvents = [];

  var condVal = true;
      for (var eachdata = 0; eachdata < this.props.EventsReducer.filterdata.length; eachdata += 1) {
                for (var i = 0; i < Object.keys(this.props.EventsReducer.filterdata[eachdata]).length; i += 1) {

                    // this.setState({["EVENT_COORD_NAME"+{i}]: "" });
                    // this.setState({["EVENT_COORD_EMAIL"+{i}]: "" });
                    // this.setState({["EVENT_COORD_PHNO"+{i}]: "" });
                    // this.setState({["EVENT_DESC"+{i}]: "" });
                    // this.setState({["EVENT_RULES_FORMAT"+{i}]: "" });
      //this.props.NewsArticlesreduce
var fest_date_bparse =  Object.values(this.props.EventsReducer.filterdata[eachdata])[i].CLG_FEST_DATE;
var fest_date_aparse = fest_date_bparse.split('-');

addEvents.push(
<Col xs="12" sm="12"md="3" style={{padding:'0px'}} key={Object.values(this.props.EventsReducer.filterdata[eachdata])[i].CLGID}>
<Link to={'/EventDetails/'+Object.values(this.props.EventsReducer.filterdata[eachdata])[i].CLGID} >
  <Row  style={{margin:'10px', boxShadow: 'rgb(136, 136, 136) 0px 0px 20px',borderRadius: '2px'}} className="events-image-eff"   >
  <Col xs="12" sm="12"md="12" style={{padding:'0px',height:'250px' }}  >
  <img src={ Object.values(this.props.EventsReducer.filterdata[eachdata])[i].FEST_IMAGE} className="img-responsive festBackImg" alt="" width="100%" height="250px"/>
  </Col>
  <Col xs="12" sm="12"md="12" style={{padding:'0px' ,backgroundColor: 'white'}}>
    <h4 className="events-header" >
{ Object.values(this.props.EventsReducer.filterdata[eachdata])[i].COLLEGE_NAME}
    </h4>
{  /*  <p   className='event-para'>
{ Object.values(this.props.EventsReducer.result[eachdata])[i].CLG_FEST_INFO}         </p>*/}

  </Col>

  <Col xs="12" sm="12"md="12"  className="event-date-div" style={{backgroundColor:'white'}} >


{/*      <Row style={{margin:'unset',textAlign:'center',height:'55%'}}  >
<Col xs="12" sm="12"md="12" style={{padding:'0px'}}>
<h4   style={{fontSize:'2.5rem',color: 'white'}}  > {fest_date_aparse[2]} <span><br/></span>{fest_date_aparse[1]} <span><br/></span>{fest_date_aparse[0]}<span><br/></span></h4>
</Col>
</Row>*/}

<Row style={{margin:'unset'}}>

<Col xs="12" sm="12"md="12" style={{padding:'0px',textAlign:'center'}}>
<span>    <label>
  <FontAwesomeIcon
    icon="clock"
    color="black"
    size="lg"
  />
  {'  '}
</label></span><span style={{color: 'black'}}  >  { Object.values(this.props.EventsReducer.filterdata[eachdata])[i].START_DATE}<span></span> To <span></span>{ Object.values(this.props.EventsReducer.filterdata[eachdata])[i].END_DATE}<span><br/></span></span>

</Col>
</Row>


  </Col>


  <Col xs="12" sm="12"md="12" style={{padding:'0px'}}  className="event-date-div" style={{backgroundColor:'white'}}>



  <Row style={{margin:'unset'}}>
    <Col xs="12" sm="12"md="12" style={{padding:'0px'}}>

<span>        <label className="location-para">
         <FontAwesomeIcon
           icon="location-arrow"
           color="black"
           size="lg"
         />
{' '}      { (Object.values(this.props.EventsReducer.filterdata[eachdata])[i].CLG_LOCATION)==''?'--':Object.values(this.props.EventsReducer.filterdata[eachdata])[i].CLG_LOCATION}
       </label>



</span>

    </Col>

  </Row>
  <Row style={{margin:'unset'}} className='text-center'>

  <Col xs="12" sm="12"md="12" style={{padding:'0px'}} >
  <span  style={{padding:'10px',color: 'black',fontSize: '12px'}} ><label>
    <FontAwesomeIcon
      icon="globe"
      color="black"
      size="lg"
    />
{' '}  <a href={ Object.values(this.props.EventsReducer.filterdata[eachdata])[i].FEST_WEBSITE}>{ Object.values(this.props.EventsReducer.filterdata[eachdata])[i].FEST_WEBSITE}</a>
  </label></span>

  </Col>
  </Row>

  </Col>
  </Row>
  </Link>
  </Col>
)


{/*
if (condVal){
condVal = false

addEvents.push(
  <Row  style={{margin:'50px',  boxShadow: 'rgb(136, 136, 136) 0px 0px 20px',borderRadius: '2px'}}  key={Object.values(this.props.EventsReducer.filterdata[eachdata])[i].CLGID}  >
  <Col xs="12" sm="12"md="2"  className="event-date-div" >


<Row style={{margin:'unset',textAlign:'center',height:'55%'}}  >
<Col xs="12" sm="12"md="12" style={{padding:'0px'}}>
<h4   style={{fontSize:'2.5rem',color: 'white'}}  >   {fest_date_aparse[2]} <span><br/></span>{fest_date_aparse[1]} <span><br/></span>{fest_date_aparse[0]}<span><br/></span></h4>
</Col>
</Row>

<Row style={{margin:'unset'}}>

<Col xs="12" sm="12"md="12" style={{padding:'0px',textAlign:'center'}}>
<label>
  <FontAwesomeIcon
    icon="clock"
    color="black"
    size="lg"
  />
  {' '} <p style={{color: 'white'}}  >{ Object.values(this.props.EventsReducer.filterdata[eachdata])[i].START_DATE}<span><br/></span>To <span><br/></span>{ Object.values(this.props.EventsReducer.filterdata[eachdata])[i].END_DATE}<span><br/></span></p>
</label><span ></span>

</Col>
</Row>


  </Col>
  <Col xs="12" sm="12"md="3" style={{padding:'0px'}}>
  <img src={ Object.values(this.props.EventsReducer.filterdata[eachdata])[i].FEST_IMAGE} className="img-responsive festBackImg" alt="" width="100%" height="300"/>
  </Col>
  <Col xs="12" sm="12"md="5" style={{padding:'0px' ,backgroundColor: '#f4faf0'}}>
    <h4 className="news-header"   style={{color:'#ec7d67'}} >
  { Object.values(this.props.EventsReducer.filterdata[eachdata])[i].COLLEGE_NAME}
    </h4>
    <p   className='event-para'>
{ Object.values(this.props.EventsReducer.filterdata[eachdata])[i].CLG_FEST_INFO}        </p>
  <h4 className="news-header"  style={{color:'#ec7d67'}}  >
  <Link to={'/EventDetails/'+Object.values(this.props.EventsReducer.filterdata[eachdata])[i].CLGID} >    SEE MORE >> </Link>
  </h4>
  </Col>
  <Col xs="12" sm="12"md="2" style={{padding:'0px'}}  className="event-date-div">
  <Row style={{margin:'unset',textAlign:'center'}}  >

  <Col xs="12" sm="12"md="12" style={{padding:'0px'}}>
  <label style={{padding:'10px'}}>
    <FontAwesomeIcon
      icon="location-arrow"
      color="black"
      size="lg"
    />
    {' '}
  </label>
  </Col>
  </Row>
  <Row style={{margin:'unset'}}>
    <Col xs="12" sm="12"md="12" style={{padding:'0px'}}>
    <p   style={{padding:'10px',textAlign: 'center',color:'white',fontSize: '12px'}}> { Object.values(this.props.EventsReducer.filterdata[eachdata])[i].CLG_LOCATION} </p>
    </Col>
  </Row>
  <Row style={{margin:'unset'}}>

  <Col xs="12" sm="12"md="12" style={{padding:'0px'}} className='text-center'>
  <span  style={{padding:'10px',color: 'white',fontSize: '12px'}} ><label>
    <FontAwesomeIcon
      icon="globe"
      color="black"
      size="lg"
    />
    {' '}{ Object.values(this.props.EventsReducer.filterdata[eachdata])[i].FEST_WEBSITE}
  </label></span>

  </Col>
  </Row>
  <Row style={{margin:'unset'}}>

  <Col xs="12" sm="12"md="12" style={{padding:'0px'}} className='text-center'>
  <Button    className="event-button"  >
+GOOGLE MAP
  </Button>

  </Col>
  </Row>
  </Col>
  </Row>
)

      }
      else{
      condVal = true;



      addEvents.push(

        <Row  style={{margin:'50px', boxShadow: 'rgb(136, 136, 136) 0px 0px 20px',borderRadius: '2px'}}   key={Object.values(this.props.EventsReducer.filterdata[eachdata])[i].CLGID} >
        <Col xs="12" sm="12"md="2"  className="event-date-div" style={{backgroundColor:'#378376'}} >


      <Row style={{margin:'unset',textAlign:'center',height:'55%'}}  >
      <Col xs="12" sm="12"md="12" style={{padding:'0px'}}>
      <h4   style={{fontSize:'2.5rem',color: 'white'}}  > {fest_date_aparse[2]} <span><br/></span>{fest_date_aparse[1]} <span><br/></span>{fest_date_aparse[0]}<span><br/></span></h4>
      </Col>
      </Row>

      <Row style={{margin:'unset'}}>

      <Col xs="12" sm="12"md="12" style={{padding:'0px',textAlign:'center'}}>
      <label>
        <FontAwesomeIcon
          icon="clock"
          color="black"
          size="lg"
        />
        {' '} <p style={{color: 'white'}}  >{ Object.values(this.props.EventsReducer.filterdata[eachdata])[i].START_DATE}<span><br/></span>To <span><br/></span>{ Object.values(this.props.EventsReducer.filterdata[eachdata])[i].END_DATE}<span><br/></span></p>
      </label><span ></span>

      </Col>
      </Row>


        </Col>
        <Col xs="12" sm="12"md="3" style={{padding:'0px'}}>
        <img src={ Object.values(this.props.EventsReducer.filterdata[eachdata])[i].FEST_IMAGE} className="img-responsive festBackImg" alt="" width="100%" height="300"/>
        </Col>
        <Col xs="12" sm="12"md="5" style={{padding:'0px' ,backgroundColor: '#f4faf0'}}>
          <h4 className="news-header"   style={{color:'#ec7d67'}} >
      { Object.values(this.props.EventsReducer.filterdata[eachdata])[i].COLLEGE_NAME}
          </h4>
          <p   className='event-para'>
{ Object.values(this.props.EventsReducer.filterdata[eachdata])[i].CLG_FEST_INFO}         </p>
        <h4 className="news-header"  style={{color:'#ec7d67'}}  >
  <Link to={'/EventDetails/'+Object.values(this.props.EventsReducer.filterdata[eachdata])[i].CLGID} >    SEE MORE >> </Link>
        </h4>
        </Col>
        <Col xs="12" sm="12"md="2" style={{padding:'0px'}}  className="event-date-div" style={{backgroundColor:'#378376'}}>
        <Row style={{margin:'unset',textAlign:'center'}}  >

        <Col xs="12" sm="12"md="12" style={{padding:'0px'}}>
        <label style={{padding:'10px'}}>
          <FontAwesomeIcon
            icon="location-arrow"
            color="black"
            size="lg"
          />
          {' '}
        </label>
        </Col>
        </Row>
        <Row style={{margin:'unset'}}>
          <Col xs="12" sm="12"md="12" style={{padding:'0px'}}>
          <p   style={{padding:'10px',textAlign: 'center',color:'white',fontSize: '12px'}}> { Object.values(this.props.EventsReducer.filterdata[eachdata])[i].CLG_LOCATION}</p>
          </Col>
        </Row>
        <Row style={{margin:'unset'}}>

        <Col xs="12" sm="12"md="12" style={{padding:'0px'}} className='text-center'>
        <span  style={{padding:'10px',color: 'white',fontSize: '12px'}} ><label>
          <FontAwesomeIcon
            icon="globe"
            color="black"
            size="lg"
          />
          {' '}{ Object.values(this.props.EventsReducer.filterdata[eachdata])[i].FEST_WEBSITE}
        </label></span>

        </Col>
        </Row>
        <Row style={{margin:'unset'}}>

        <Col xs="12" sm="12"md="12" style={{padding:'0px'}} className='text-center'>
        <Button    className="event-button"  >
      +GOOGLE MAP
        </Button>

        </Col>
        </Row>
        </Col>
        </Row>
      )
    }*/}}}


        return (

  <Row >

{addEvents}
</Row>


        );

    }
}

//state.user is userReducer
//state.math is mathReducer
const mapStateToProps = (state,ownProps) => {

    return {
        EventsReducer: state.EventsReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
       SubmitReq:(datatosend) => {
           dispatch(eventsActionsFilters(datatosend));},

           paramsHeader:(datatosend) => {
               dispatch(paramsToHeader(datatosend));
       },
       hideEvents:(datatosend) => {
           dispatch(hideEvents(datatosend));
   },
   setStates:(datatosend1,datatosend2,datatosend3,datatosend4) => {
         dispatch(setEventsStates(datatosend1,datatosend2,datatosend3,datatosend4));
 },
   makeFilterDataEmpty:(datatosend) => {
              dispatch(makeFilterDataEmpty(datatosend));
      }

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(EventFilters);
