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

import App from './App';

import { connect } from "react-redux";
import requireAuth from '../utils/requireAuth';
const MovieHome = Loadable({
  loader: () => import('./moviehome/movieHome'),
   loading: () => <div>loading</div>
});
const PreHome = Loadable({
  loader: () => import('./prelogin/preHome'),
   loading: () => <div>loading</div>
});
const UserHome = Loadable({
  loader: () => import('./userprofile/userHome'),
   loading: () => <div>loading</div>
});
/*const Exams = Loadable({
  loader: () => import('./Exams'),
   loading: () => <div>loading</div>
});*/
const UserLogin = Loadable({
  loader: () => import('./UserLogin'),
   loading: () => <div>loading</div>
});
const PlayVideo = Loadable({
  loader: () => import('./moviedetails/playVideo'),
   loading: () => <div>loading</div>
});
const MovieDetails = Loadable({
  loader: () => import('./moviedetails/movieDetails'),
   loading: () => <div>loading</div>
});
const FlashMessagesList = Loadable({
  loader: () => import('../components/flash/FlashMessagesList'),
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
    <Route  path='/userlogin' name='userlogin' component={UserLogin}/>
  



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
