import React from "react";
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Breadcrumb, BreadcrumbItem,Container, Row, Col,Card,CardTitle,CardBody,CardText,Button, Collapse,Navbar,NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem  } from 'reactstrap';

import { Switch, Route,BrowserRouter } from 'react-router-dom'


import HeaderContent from './headerContent';
import PreHome from './prelogin/preHome';
import MovieHome from './moviehome/movieHome';
import UserHome from './userprofile/userHome';
import Exams from './Exams';
import UserLogin from './UserLogin';
import PlayVideo from './moviedetails/playVideo'
import MovieDetails from './moviedetails/movieDetails';

import FlashMessagesList from '../components/flash/FlashMessagesList';
import App from './App';

import { connect } from "react-redux";
import requireAuth from '../utils/requireAuth';

const NewsArticles = Loadable({
  loader: () => import('./NewsArticles'),
   loading: () => <div>loading</div>
});
const Home = Loadable({
  loader: () => import('./Home'),
   loading: () => <div>loading</div>
});
/*const Exams = Loadable({
  loader: () => import('./Exams'),
   loading: () => <div>loading</div>
});*/
const Events = Loadable({
  loader: () => import('./Events'),
   loading: () => <div>loading</div>
});
const Cutoffs = Loadable({
  loader: () => import('./Cutoffs'),
   loading: () => <div>loading</div>
});
const Placements = Loadable({
  loader: () => import('./Placements'),
   loading: () => <div>loading</div>
});
const ExamDetails = Loadable({
  loader: () => import('./ExamDetails'),
   loading: () => <div>loading</div>
});
const FestUserRegistration = Loadable({
  loader: () => import('./FestUserRegistration'),
   loading: () => <div>loading</div>
});
const Aboutus = Loadable({
  loader: () => import('./Aboutus'),
   loading: () => <div>loading</div>
});
const Newsupload = Loadable({
  loader: () => import('./Newsupload'),
   loading: () => <div>loading</div>
});
const NewsVerify = Loadable({
  loader: () => import('./NewsVerify'),
   loading: () => <div>loading</div>
});
const FestVerify = Loadable({
  loader: () => import('./FestVerify'),
   loading: () => <div>loading</div>
});
const PrivacyPolicy = Loadable({
  loader: () => import('./PrivacyPolicy'),
   loading: () => <div>loading</div>
});
const svpcetupload = Loadable({
  loader: () => import('./svpcetupload'),
   loading: () => <div>loading</div>
});
const svpcetverify = Loadable({
  loader: () => import('./svpcetverify'),
   loading: () => <div>loading</div>
});
const Examsupload = Loadable({
  loader: () => import('./Examsupload'),
   loading: () => <div>loading</div>
});
const NewsDetails = Loadable({
  loader: () => import('./NewsDetails'),
   loading: () => <div>loading</div>
});
const EventDetails = Loadable({
  loader: () => import('./FestEventDetails'),
   loading: () => <div>loading</div>
});
//export class App extends React.Component {   commenting because below redux will take care of attacting
  class Base extends React.Component {


    constructor(props) {
      super(props);


     this.state = {
      dandepath: ''

    }
    }
    onChangeSetEventData(id){

this.setState({
dandepath: id
})
}
//     changeUsername() {
// this.props.setName("king");
//     }
//basename={'/ReactDev/dist/app/'}
    render() {


        return (



///ReactDev/dist/app/
 <BrowserRouter basename="/">

<div className="container-fluid p-0">
{ /*<HeaderContent />*/}
  <FlashMessagesList />
  <Switch>
    <Route exact path='/' component={PreHome}/>
    <Route exact path='/saaho' component={MovieDetails}/>
    <Route exact path='/saaho-video' component={PlayVideo}/>
    <Route exact path='/home' component={requireAuth(MovieHome)}/>
    <Route exact path='/account' component={requireAuth(UserHome)}/>
    <Route exact path='/shoppingcart' component={requireAuth(UserHome)}/>
    <Route exact path='/mytickets' component={requireAuth(UserHome)}/>
    
   <Route  path='/Events'component={requireAuth(Events)}/>
   <Route  path='/PrivacyPolicy'component={PrivacyPolicy}/>
    <Route  path='/Newsupload'component={Newsupload}/>
        <Route  path='/Examsupload'component={Examsupload}/>
    <Route  path='/NewsVerify'component={NewsVerify}/>
  <Route  path='/FestRegistration' component={FestUserRegistration}/>
    <Route  path='/NewsArticles' name='NewsArticles' component={NewsArticles}/>
<Route  path='/Exams' name='Exams' component={Exams}/>
   <Route  path='/userlogin' name='userlogin' component={UserLogin}/>

   <Route  path='/Cutoffs' name='Cutoffs' component={Cutoffs}/>
      <Route  path='/Placements' name='Placements' component={Placements}/>
<Route path={`/EventDetails/:collegeId`} component={EventDetails}/>
<Route path={`/NewsDetails/:newsId`} component={NewsDetails}/>
<Route path={`/Aboutus`} component={Aboutus}/>
<Route path={`/FestVerify`} component={FestVerify}/>
<Route path={`/ExamDetails/:ExamId`} name='ExamDetails' component={ExamDetails}/>
<Route path={`/svpcetupload`} component={svpcetupload}/>
<Route path={`/svpcetverify`} component={svpcetverify}/>
   <Route  path='/Home' component={Home}/>



{/*<Route path="/network" component={NetworkMetaContainer}>
           <Route path="/:id" component={NetworkContainer}/>
       </Route>*/}


   </Switch>
   </div>
   </BrowserRouter>
        );
    }
}


//state.user is userReducer
//state.math is mathReducer
const mapStateToProps = (state) => {
    return {
        user: state.user,
        math:state.math
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
       setName:(name) => {
           dispatch(setName(name));
       }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Base);
