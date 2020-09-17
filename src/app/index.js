import React from "react";
import {render} from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './css/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey,faChevronLeft,faChevronRight,faArrowLeft,faArrowRight,faSearch,faFilter,faSort,
  faCalendarDay,faClock,faLocationArrow,faGlobe ,faBell} from '@fortawesome/free-solid-svg-icons';
import Base from "./containers/Base";
import store from "./store";

// import {createStore,combineReducers,applyMiddleware} from "redux";
// import { createLogger } from 'redux-logger'
import {Provider} from "react-redux";

library.add(faEnvelope, faKey,faChevronLeft,faChevronRight,faArrowLeft,faArrowRight,faSearch,faFilter,faSort,faCalendarDay,faClock,
  faLocationArrow,faGlobe,faBell);



// const myLogger = (store)=>(next)=>(action)=>{
//     console.log("Logged action: ", action);
//     next(action);
// }


//applyMiddleware(myLogger, createLogger()));

// store.subscribe(()=>{
//   //  console.log("store updated!", store.getState());
// });

//actions
// store.dispatch({
//     type: "ADD",
//     payload:100
// });
// store.dispatch({
//     type: "ADD",
//     payload:22
// });
// store.dispatch({
//     type: "SUBTRACT",
//     payload:80
// });
// store.dispatch({
//     type: "SET_AGE",
//     payload:30
// });

 render(
 <Provider store={store}>

<Base/>

 </Provider>,
  window.document.getElementById('app'));
