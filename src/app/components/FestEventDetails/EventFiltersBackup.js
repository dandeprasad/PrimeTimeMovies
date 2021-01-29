import React from "react";
import { Breadcrumb, BreadcrumbItem,Container, Row, Col,Card,CardTitle,CardBody,CardText,Button,CardLink,Input } from 'reactstrap';


import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import students from "../../img/students.jpg";
import {paramsToHeader,hideEvents} from "../../actions/HeaderParams";
import {eventsActionsFilters,makeFilterDataEmpty } from "../../actions/EventsActions";
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
   posts:[],
   theposition:'',
   startIndex:0,
   LastIndex:5,
   requestProcessing:false
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

listenToScroll (){
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

  const scrolled = winScroll / height



  this.setState({
     theposition: scrolled},
      () => {
   this.onChangedata();
 }
);
}

onChangedata(){
    if (this.state.theposition ==1){
      this.setState({
        requestProcessing: true
      });
      if (this.state.requestProcessing){

    const val1 =   this.state.startIndex+5;
    const val2 =  this.state.LastIndex;

this.serverRequest (val1,val2);


}}

}


serverRequest ( startindex , lastindex){

  this.setState({
    startIndex: startindex,
    LastIndex:lastindex
  });


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
if (condVal){
condVal = false

      addEvents.push(
        <Row  style={{margin:'50px',    height: '300px', boxShadow: 'rgb(136, 136, 136) 0px 0px 20px',borderRadius: '2px'}}  key={Object.values(this.props.EventsReducer.filterdata[eachdata])[i].CLGID}  >
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
        <Col xs="12" sm="12"md="3" style={{padding:'0px',height:'inherit'}}>
        <img src={ Object.values(this.props.EventsReducer.filterdata[eachdata])[i].FEST_IMAGE} className="img-responsive festBackImg" alt="" width="100%" height="300"/>
        </Col>
        <Col xs="12" sm="12"md="5" style={{padding:'0px' ,backgroundColor: '#f4faf0',height:'inherit'}}>
          <h4 className="news-header"   style={{color:'#ec7d67',height:'75px'}} >
        { Object.values(this.props.EventsReducer.filterdata[eachdata])[i].COLLEGE_NAME}
          </h4>
          <p   className='event-para'>
{ Object.values(this.props.EventsReducer.filterdata[eachdata])[i].CLG_FEST_INFO}        </p>
        <h4 className="news-header"  style={{color:'#ec7d67',height:'150px'}}  >
    <Link to="#" >    SEE MORE >> </Link>
        </h4>
        </Col>
        <Col xs="12" sm="12"md="2" style={{padding:'0px',height:'50px'}}  className="event-date-div">
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
      <Link to="#" >    SEE MORE >> </Link>
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
                }}}


        return (
          <div>


{addEvents}

</div>
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
   makeFilterDataEmpty:(datatosend) => {
              dispatch(makeFilterDataEmpty(datatosend));
      }

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(EventFilters);
