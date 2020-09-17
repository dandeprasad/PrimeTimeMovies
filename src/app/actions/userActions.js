import React from "react";
import axios from 'axios';
import qs from 'qs';
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from './types';


export function logout() {
  return dispatch => {
    localStorage.removeItem('access_token');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function setCurrentUser(user){
  return {
    type:SET_CURRENT_USER,
    payload:user
  }
}
export function submitLogin (datatosend ){
  var username = 'PRIME_TIME_MOVIES';
  var password = 'Prime@balaji#27082020';
  var basicAuth = 'Basic ' + btoa(username + ':' + password);
  return dispatch =>{

      axios.post('http://localhost:9001/oauth/token', qs.stringify(datatosend),{
  headers: { 'Authorization': basicAuth,
            'Content-Type': 'application/x-www-form-urlencoded'
 }
} )
        .then(response => {
          const token = JSON.parse(JSON.stringify(response)).data.access_token;
localStorage.setItem("access_token",token);
localStorage.setItem("refresh_token",JSON.parse(JSON.stringify(response)).data.refresh_token);
setAuthorizationToken(token);
var dt = jwt.decode(token);
          console.log('dande webtoken details'+jwt.decode(token));
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);

    dispatch(setCurrentUser(jwt.decode(token)));

        }, (error) => {
          localStorage.clear();
  console.log(error.response);
})



  }


  }
  export function setName (name ){

  // return dispatch =>{
  //     setTimeout(()=>{
  //         dispatch({
  //             type:"SET_NAME",
  //             payload:name
  //         });
  //     },2000);
  // }

  // return {
  //     type: "SET_NAME",
  //     payload:new Promise((resolve, reject)=>{
  //         setTimeout(()=>{
  //             resolve(name);
  //         },2000);
  //     })
  // };

  }

  export function setAge (age ){

      // return {
      //     type:"SET_AGE",
      //     payload:age
      // };

  }
