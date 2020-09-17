import React from "react";
import { Breadcrumb, BreadcrumbItem,Container, Row, Col,Card,CardTitle,CardBody,CardText,Button,CardLink,Input,NavLink,NavItem,Nav,Navbar } from 'reactstrap';

import FestCarousel4 from '../components/Events/FestCarousel4';
import EventFilters from '../components/Events/EventFilters';

import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/news-articles.scss';
import students from "../img/students.jpg";
import {paramsToHeader,hideEvents } from "../actions/HeaderParams";
import {eventsActions } from "../actions/EventsActions";


import {setName} from "../actions/userActions";
import { Link ,Route} from 'react-router-dom';
import { NavLink as RRNavLink } from 'react-router-dom';
import {Helmet} from "react-helmet";
//export class App extends React.Component {   commenting because below redux will take care of attacting
 class Events extends React.Component {


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

  if(  this.props.match.url === "/Events")
  {
     this.props.paramsHeader(this.props);
     this.props.hideEvents(false);

  }



if(this.props.EventsReducer.result.length <=0){
    this.serverRequest(0,5);
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



//   this.setState({
//      theposition: scrolled},
//       () => {
//    this.onChangedata();
//  }
// );
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
this.setState({
  startIndex: val1,
  LastIndex:val2
});

}}

}


serverRequest ( startindex , lastindex){



var filterKey="ALL";

var startIndex = startindex;
var LastIndex = lastindex;
var WORKSPACE_ID = "HOME_WORKSPACE";
  var FUNCTION_ID = "GET_FESTS_NOTIFICATIONS";
  var ACTION_ID = "GET_ALL_FESTNEWS_STRING"



  var Record = {

    "FUNCTION_ID" :FUNCTION_ID,
    "WORKSPACE_ID" : WORKSPACE_ID,
    "ACTION_ID" : ACTION_ID

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
      for (var eachdata = 0; eachdata < this.props.EventsReducer.result.length; eachdata += 1) {
                for (var i = 0; i < Object.keys(this.props.EventsReducer.result[eachdata]).length; i += 1) {

                    // this.setState({["EVENT_COORD_NAME"+{i}]: "" });
                    // this.setState({["EVENT_COORD_EMAIL"+{i}]: "" });
                    // this.setState({["EVENT_COORD_PHNO"+{i}]: "" });
                    // this.setState({["EVENT_DESC"+{i}]: "" });
                    // this.setState({["EVENT_RULES_FORMAT"+{i}]: "" });
      //this.props.NewsArticlesreduce
var fest_date_bparse =  Object.values(this.props.EventsReducer.result[eachdata])[i].CLG_FEST_DATE;
var fest_date_aparse = fest_date_bparse.split('-');



      addEvents.push(
<Col xs="12" sm="12"md="3" style={{padding:'0px'}} key={Object.values(this.props.EventsReducer.result[eachdata])[i].CLGID}>
  <Link to={'/EventDetails/'+Object.values(this.props.EventsReducer.result[eachdata])[i].CLGID} >
        <Row  style={{margin:'10px', boxShadow: 'rgb(136, 136, 136) 0px 0px 20px',borderRadius: '2px'}} className="events-image-eff"   >
        <Col xs="12" sm="12"md="12" style={{padding:'0px',height:'250px' }}  >
        <img src={ Object.values(this.props.EventsReducer.result[eachdata])[i].FEST_IMAGE} className="img-responsive festBackImg" alt="" width="100%" height="250px"/>
        </Col>
        <Col xs="12" sm="12"md="12" style={{padding:'0px' ,backgroundColor: 'white'}}>
          <h4 className="events-header" >
      { Object.values(this.props.EventsReducer.result[eachdata])[i].COLLEGE_NAME}
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
      </label></span><span style={{color: 'black'}}  >  { Object.values(this.props.EventsReducer.result[eachdata])[i].START_DATE}<span></span> To <span></span>{ Object.values(this.props.EventsReducer.result[eachdata])[i].END_DATE}<span><br/></span></span>

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
      {' '}      { (Object.values(this.props.EventsReducer.result[eachdata])[i].CLG_LOCATION)==''?'--':Object.values(this.props.EventsReducer.result[eachdata])[i].CLG_LOCATION}
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
{' '}  <a href={ Object.values(this.props.EventsReducer.result[eachdata])[i].FEST_WEBSITE}>{ Object.values(this.props.EventsReducer.result[eachdata])[i].FEST_WEBSITE}</a>
        </label></span>

        </Col>
        </Row>

        </Col>
        </Row>
        </Link>
        </Col>
      )
                }}


        return (
          <div>

          <Row>
          <Helmet>
                          <meta charSet="utf-8" />
                          <title>College Events/Fests</title>
                          <meta name="description" content="Latest Fests/Events related to colleges" />
                          <meta name="keywords" content="List of colleges in India, top colleges in India, best colleges in India.Exams,Fests,Cutoffs,Placements  "/>


                          <meta property="og:image" content="https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/collegeexplore_logo.png"/>
                          <meta property="og:site_name" content="Collegeexplore"/>
                          <meta property="og:type" content="website"/>
                          <meta property="og:url" content="http://collegeexplore.in"/>
                          <meta property="og:title" content="Latest Fests/Events of Colleges"/>
                          <meta property="og:description" content="Latest Fests/Events related to colleges"/>


                      </Helmet>


<Col xs="12" sm="12"md="12"     style={{paddingTop:'10px'}} >




  <Navbar  color="light" light expand="md">
  <Nav className="ml-auto" navbar navbar-events>

    <NavItem >
<NavLink to={`/Events/LatestEvents`} activeClassName="active "className="events-nav" tag={RRNavLink} >Upcoming Events</NavLink>
  </NavItem>
    <NavItem >
  <NavLink to={`/Events/Technical`}className="events-nav" tag={RRNavLink}  >Technical</NavLink>
    </NavItem >
    <NavItem >
      <NavLink to={`/Events/Cultual`} className="events-nav"tag={RRNavLink}> Cultual</NavLink>
        </NavItem>
          <NavItem >
          <NavLink to={`/Events/NIT`}className="events-nav" tag={RRNavLink}>NIT's</NavLink>
            </NavItem>
              <NavItem >
    <NavLink to={`/Events/IIT`}className="events-nav" tag={RRNavLink}>IIT's</NavLink>
      </NavItem>
        <NavItem >
    <NavLink to={`/Events/DEEMED`} className="events-nav"tag={RRNavLink}>Deemed Universities</NavLink>
      </NavItem>
      <Link to={'/FestRegistration'}>   <Button   >
      Create Event
      </Button></Link>
        </Nav>
        </Navbar>



        </Col>

          {/*    <div  height="275" style={{position:'relative',width:'100%'}}>
 <FestCarousel4 />
         </div>*/}

  </Row>
{/*  <Row className="event-search-div">
  <Col xs="12" sm="12"md="1" >

  </Col>
  <Col xs="12" sm="12"md="3" >

    <Input type="text" name="eventSearch" id="eventSearch" placeholder="SEARCH FOR EVENTS" className="event-inputs" />
  </Col>
  <Col xs="10" sm="10"md="3"  >
    <Input type="select" name="select" id="typeSelect" className="event-inputs">
            <option>-- Select City --</option>
            <option>Hyderabad</option>
            <option>Banglore</option>
            <option>Tirchy</option>
            <option>Karaikal</option>
          </Input>
</Col>
  <Col xs="2" sm="2"md="2" >
    <Button    className="event-button"  onClick={e => alert("Will be added soon....")} >

    <label style={{margin: 'unset'}}>
      <FontAwesomeIcon
        icon="chevron-right"
        color="back"
        size="2x"
      />
      {' '}
    </label>
    </Button>
</Col>
<Col xs="12" sm="12"md="3">
<Link to={'/FestRegistration'}>   <Button   >
Create Event
</Button></Link>
</Col>
  </Row>*/}
  <Row>
    <Col xs="12" sm="12"md="12"  style={{backgroundColor: 'white'}}>
    <div  style={{ float: 'right'}}  >
  <button className="news-button">
  <span><label>
  ALPHABETICAL ORDER{' '} <FontAwesomeIcon
      icon="sort"
      color="black"
      size="lg"
    />

  </label></span>
  </button>
  <button className="news-button">
  <span><label className="news-button">
  DATE{' '} <FontAwesomeIcon
      icon="calendar-day"
      color="black"
      size="lg"
    />

  </label></span>
  </button>
  <button className="news-button">
  <span><label className="news-button">
  {' '} <FontAwesomeIcon
      icon="filter"
      color="black"
      size="lg"
    />

  </label></span>
  </button>
  </div>

  </Col>
    <Col xs="12" sm="12"md="12"  style={{padding:'0px'}}>
  <hr className="news-hr"/>
  </Col>
  </Row>
  <Row >
{!this.props.Pathparamsreduce.eventhideinfo && addEvents}
</Row>
  <Route path={`/Events/:filterTypeId`} component={EventFilters}/>
</div>
        );

    }
}

//state.user is userReducer
//state.math is mathReducer
const mapStateToProps = (state,ownProps) => {

    return {
        EventsReducer: state.EventsReducer,
          Pathparamsreduce:state.Pathparamsreduce
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
       SubmitReq:(datatosend) => {
           dispatch(eventsActions(datatosend));},
           hideEvents:(datatosend) => {
               dispatch(hideEvents(datatosend));},
           paramsHeader:(datatosend) => {
               dispatch(paramsToHeader(datatosend));
       }
    };
};
function Topic ({ match }) {
  const topics = [
    {
      name: 'React Router',
      id: 'react-router',
      description: 'Declarative, component based routing for React',
      resources: [
        {
          name: 'URL Parameters',
          id: 'url-parameters',
          description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
          url: 'https://tylermcginnis.com/react-router-url-parameters/'
        },
        {
          name: 'Programmatically navigate',
          id: 'programmatically-navigate',
          description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
          url: 'https://tylermcginnis.com/react-router-programmatically-navigate/'
        }
      ]
    },
    {
      name: 'React.js',
      id: 'EventDetails',
      description: 'A JavaScript library for building user interfaces',
      resources: [
        {
          name: 'React Lifecycle Events',
          id: 'react-lifecycle',
          description: "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
          url: 'https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/'
        },
        {
          name: 'React AHA Moments',
          id: 'react-aha',
          description: "A collection of 'Aha' moments while learning React.",
          url: 'https://tylermcginnis.com/react-aha-moments/'
        }
      ]
    },
    {
      name: 'Functional Programming',
      id: 'functional-programming',
      description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
      resources: [
        {
          name: 'Imperative vs Declarative programming',
          id: 'imperative-declarative',
          description: 'A guide to understanding the difference between Imperative and Declarative programming.',
          url: 'https://tylermcginnis.com/imperative-vs-declarative-programming/'
        },
        {
          name: 'Building User Interfaces with Pure Functions and Function Composition',
          id: 'fn-composition',
          description: 'A guide to building UI with pure functions and function composition in React',
          url: 'https://tylermcginnis.com/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/'
        }
      ]
    }
  ];
  const topic = topics.find(({ id }) => id === match.params.filterTypeId)

  return (

    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>


      <hr />

    </div>
  )
};
export default connect(mapStateToProps,mapDispatchToProps)(Events);
