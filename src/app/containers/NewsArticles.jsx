import React from "react";
import { Breadcrumb, BreadcrumbItem,Container, Row, Col,Card,CardTitle,CardBody,CardText,Button,Pagination, PaginationItem, PaginationLink  } from 'reactstrap';
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
import FestCarousel3 from '../components/FestEventDetails/FestCarousel3';
import {newsSubmitReq,newsSubmitReqCount } from "../actions/NewsArticlesAction"
import {paramsToHeader } from "../actions/HeaderParams"
import FestCarousel1 from '../components/FestEventDetails/FestCarousel1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Helmet} from "react-helmet";
import App from './App';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
class NewsArticles extends React.Component {


//     changeUsername() {
// this.props.setName("king");
//     }

//style={{color: '#c24a2a'}}
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

  if(  this.props.match.url === "/NewsArticles")
  {
     this.props.paramsHeader(this.props);

  }
if(this.props.NewsArticlesreduce.result.length <=0){
  this.serverRequestCount();
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



  this.setState({
     theposition: scrolled},
      () => {
   this.onChangedata();
 }
);
}

onChangedata(){
    if (this.state.theposition >= 0.7){
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
serverRequestCount (){




var WORKSPACE_ID = "HOME_WORKSPACE";
var FUNCTION_ID = "GET_NEWS_COUNT";
var ACTION_ID = "GET_NEWS_COUNT";


var Record = {
  "WORKSPACE_ID" : WORKSPACE_ID,
  "FUNCTION_ID" : FUNCTION_ID,
  "ACTION_ID" : ACTION_ID

};
var json = {
  "datatohost" : Record
};
var dande = 'ServerData=' + JSON.stringify(json);




 this.props.SubmitReqCount(dande);
}
serverRequest ( startindex , lastindex){



var filterKey="ALL";

var startIndex = startindex;
var LastIndex = lastindex;
var WORKSPACE_ID = "HOME_WORKSPACE";
var FUNCTION_ID = "GET_NEWS_ONLY";
var ACTION_ID = "GET_ALL_NEWS_STRING";


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
HandleChangeContent({ target }){

}

    render() {


      const addNEWS1 = [];
            const newsCountmapping = [];
              var each_news_count=0;
              var pag_position = 1
if(this.props.NewsArticlesreduce.newscount.length>0){
    var news_count =   this.props.NewsArticlesreduce.newscount[0]["NEWS_COUNT_DATA"]["NEWS_COUNT"];
     each_news_count = news_count/5;

var value1 = pag_position;
var value2 = pag_position+1;
var value3 = pag_position+2;
var value4 = pag_position+3;
var value5 = pag_position+4;

  newsCountmapping.push(
      <Pagination aria-label="Page navigation example">
     <PaginationItem>
         <PaginationLink first href="#" />
       </PaginationItem>
       <PaginationItem>
         <PaginationLink previous href="#" />
       </PaginationItem>
       <PaginationItem active>
         <PaginationLink href="#">
           {value1}
         </PaginationLink>
       </PaginationItem>
       <PaginationItem>
         <PaginationLink href="#" onChange={this.HandleChangeContent.bind(this)}>
           {value2}
         </PaginationLink>
       </PaginationItem>
       <PaginationItem>
         <PaginationLink href="#">
           {value3}
         </PaginationLink>
       </PaginationItem>
       <PaginationItem>
         <PaginationLink href="#">
           {value4}
         </PaginationLink>
       </PaginationItem>
       <PaginationItem>
         <PaginationLink href="#">
           {value5}
         </PaginationLink>
       </PaginationItem>
       <PaginationItem>
         <PaginationLink next href="#" />
       </PaginationItem>
       <PaginationItem>
         <PaginationLink last href="#" />
       </PaginationItem>
     </Pagination>
   );
    }
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
          id: 'reactjs',
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





        var condVal = true;
for (var eachdata = 0; eachdata < this.props.NewsArticlesreduce.result.length; eachdata += 1) {

          for (var i = 0; i < Object.keys(this.props.NewsArticlesreduce.result[eachdata]).length; i += 1) {

              // this.setState({["EVENT_COORD_NAME"+{i}]: "" });
              // this.setState({["EVENT_COORD_EMAIL"+{i}]: "" });
              // this.setState({["EVENT_COORD_PHNO"+{i}]: "" });
              // this.setState({["EVENT_DESC"+{i}]: "" });
              // this.setState({["EVENT_RULES_FORMAT"+{i}]: "" });
//this.props.NewsArticlesreduce


if (condVal){
condVal = false
addNEWS1.push(



  <Row  className="news-rowdata item"  key={Object.values(this.props.NewsArticlesreduce.result[eachdata])[i].NEWSID}   style={{    margin: '20px 30px 0px 30px', boxShadow: '0 0 5px #888',
borderRadius: '2px' }}>
  <Col xs="12" sm="12"md="4" style={{padding:'0px'}}>
  <img src={Object.values(this.props.NewsArticlesreduce.result[eachdata])[i].NEWS_IMAGE} className="img-responsive festBackImg" alt="" width="100%" height="300"/>
  <div className="events-bc-div"></div>
  </Col>
  <Col xs="12" sm="12"md="8" >

    <h4 className="news-header">
  { Object.values(this.props.NewsArticlesreduce.result[eachdata])[i].NEWS_HEADER}
    </h4>


    <Row style={{padding:'10px',overflow:'hidden',height:'112px',textOverflow:'ellipsis'}} dangerouslySetInnerHTML={{ __html: Object.values(this.props.NewsArticlesreduce.result[eachdata])[i].NEWS_DETAILS}}></Row>
    <h5 >
<b>  Posted Date:</b><span> { Object.values(this.props.NewsArticlesreduce.result[eachdata])[i].POSTED_DATE}</span>
    </h5>

  <h4 className="news-header"  style={{color:'#ec7d67'}}  >
<Link to={'/NewsDetails/'+Object.values(this.props.NewsArticlesreduce.result[eachdata])[i].NEWSID} className="news-seedetails" >    SEE DETAILS >> </Link>
  </h4>

  </Col>
  {/* <div className="item-overlay top"></div>*/}
  </Row>





)
}
else{
condVal = true;

addNEWS1.push(

            <Row className="news-rowdata1 item"  key={Object.values(this.props.NewsArticlesreduce.result[eachdata])[i].NEWSID}    style={{    margin: '20px 30px 0px 30px', boxShadow: '0 0 5px #888',
    borderRadius: '2px'}} >

            <Col xs="12" sm="12"md="8">

              <h4 className="news-header">
        { Object.values(this.props.NewsArticlesreduce.result[eachdata])[i].NEWS_HEADER}
              </h4>



            <Row style={{padding:'10px',overflow:'hidden',height:'112px',textOverflow:'ellipsis'}}  dangerouslySetInnerHTML={{ __html: Object.values(this.props.NewsArticlesreduce.result[eachdata])[i].NEWS_DETAILS}}></Row>
            <h5 >
          <b style={{color:'dimgray'}}>  Posted Date:</b><span> { Object.values(this.props.NewsArticlesreduce.result[eachdata])[i].POSTED_DATE}</span>
            </h5>
            <h4 className="news-header"  style={{color:'#ec7d67'}}  >

          <Link to={'/NewsDetails/'+Object.values(this.props.NewsArticlesreduce.result[eachdata])[i].NEWSID}  className="news-seedetails">    SEE DETAILS >> </Link>
          </h4></Col>
            <Col xs="12" sm="12"md="4" style={{padding:'0px'}}>
            <img src={Object.values(this.props.NewsArticlesreduce.result[eachdata])[i].NEWS_IMAGE} className="img-responsive festBackImg" alt="" width="100%" height="300"/>
  <div className="events-bc-div"></div>

            </Col>

            </Row>)
          }}}

        return (

          <Row>
          <Helmet>
                          <meta charSet="utf-8" />
                          <title>Colleges News/Articles</title>
                          <meta name="description" content="Latest news and articles related to colleges,events,cutoffs,exams" />
                          <meta name="keywords" content="list of colleges in India, top colleges in India, best colleges in India.Exams,Fests,Cutoffs,Placements  "/>


                          <meta property="og:image" content="https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/collegeexplore_logo.png"/>
                          <meta property="og:site_name" content="Collegeexplore"/>
                          <meta property="og:type" content="website"/>
                          <meta property="og:url" content="http://collegeexplore.in"/>
                          <meta property="og:title" content=" Latest News/Articles on Colleges"/>
                          <meta property="og:description" content="Latest news and articles related to colleges,events,cutoffs,exams"/>

                      </Helmet>
        {  /*<FestCarousel3/>*/}


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
{addNEWS1}
{/*newsCountmapping*/}
  </Row>



        );
    }
}


//state.user is userReducer
//state.math is mathReducer
const mapStateToProps = (state,ownProps) => {
       if (state.NewsArticlesreduce.result ){

        }
    return {
        NewsArticlesreduce: state.NewsArticlesreduce
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
       SubmitReq:(datatosend) => {
           dispatch(newsSubmitReq(datatosend));},
           SubmitReqCount:(datatosend) => {
               dispatch(newsSubmitReqCount(datatosend));},

           paramsHeader:(datatosend) => {
               dispatch(paramsToHeader(datatosend));
       }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(NewsArticles);
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
      id: 'reactjs',
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
  const topic = topics.find(({ id }) => id === match.params.topicId)

  return (

    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>

      <ul>
        {topic.resources.map((sub) => (
          <li key={sub.id}>
            <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${match.path}/:subId`} component={Resource} />
    </div>
  )
};
function Resource ({ match }) {
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
      id: 'reactjs',
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
  const topic = topics.find(({ id }) => id === match.params.topicId)
    .resources.find(({ id }) => id === match.params.subId)

  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <a href={topic.url}>More info.</a>
    </div>
  )
};
