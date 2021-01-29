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
    const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiUFJJTUVfVElNRV9VU0VSX1JFU09VUkNFIl0sInVzZXJfbmFtZSI6ImRhbmRlcHJhc2FkIiwic2NvcGUiOlsicm9sZV9wcmltZV91c2VyIl0sImV4cCI6MTYwNzk1NjgxOCwiYXV0aG9yaXRpZXMiOlsicm9sZV9wcmltZV91c2VyIl0sImp0aSI6IjNlYjhkMDFkLWFkZWEtNGVhYS04N2M4LTY5OWQ1MjlmZDA1MSIsImVtYWlsIjoiZGFuZGVyZWRkeXByYXNhZEBnbWFpbC5jb20iLCJjbGllbnRfaWQiOiJQUklNRV9USU1FX01PVklFUyJ9.PL6sCZbsxB7_FKQNCRO_m0w2GmkOExssLZ0ZBhAla611iEP9M5Wx2Cc6N8mRCJhk55EQmX6aWsSdxy1AvkXiJXCzXOAumWZkg_H3MdwhbXKG4QFDpR2YnVBaIfoW_D1YzqbMOyLDd8Dqw71a7Ih21tmFs_3BXaOhXjObkZzYQ-KmfB0Er3F27h9RvTX_lS87KXJc77mjvcxirHLrsY1kU5mCzvg6ibQvpZkDEkpjTozBP5XLKoSoC6_veJfSOz9ECCkUpMwZDf4a7m0gdJOv7e7GYzZg9NwVBdCTKMJcyLF_uTnBUIyvgGgmfA4cEJd9GaDa545xABg6xK4eHhHN2Q";

localStorage.setItem("access_token",token);
localStorage.setItem("refresh_token","eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiUFJJTUVfVElNRV9VU0VSX1JFU09VUkNFIl0sInVzZXJfbmFtZSI6ImRhbmRlcHJhc2FkIiwic2NvcGUiOlsicm9sZV9wcmltZV91c2VyIl0sImV4cCI6MTYwNzk1NjgxOCwiYXV0aG9yaXRpZXMiOlsicm9sZV9wcmltZV91c2VyIl0sImp0aSI6IjNlYjhkMDFkLWFkZWEtNGVhYS04N2M4LTY5OWQ1MjlmZDA1MSIsImVtYWlsIjoiZGFuZGVyZWRkeXByYXNhZEBnbWFpbC5jb20iLCJjbGllbnRfaWQiOiJQUklNRV9USU1FX01PVklFUyJ9.PL6sCZbsxB7_FKQNCRO_m0w2GmkOExssLZ0ZBhAla611iEP9M5Wx2Cc6N8mRCJhk55EQmX6aWsSdxy1AvkXiJXCzXOAumWZkg_H3MdwhbXKG4QFDpR2YnVBaIfoW_D1YzqbMOyLDd8Dqw71a7Ih21tmFs_3BXaOhXjObkZzYQ-KmfB0Er3F27h9RvTX_lS87KXJc77mjvcxirHLrsY1kU5mCzvg6ibQvpZkDEkpjTozBP5XLKoSoC6_veJfSOz9ECCkUpMwZDf4a7m0gdJOv7e7GYzZg9NwVBdCTKMJcyLF_uTnBUIyvgGgmfA4cEJd9GaDa545xABg6xK4eHhHN2Q");
setAuthorizationToken(token);
var dt = jwt.decode(token);
dispatch(setCurrentUser(jwt.decode(token)));
     
{/* commenting for hardcoding axios.post('http://localhost:9001/oauth/token', qs.stringify(datatosend),{
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

*/ }

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
