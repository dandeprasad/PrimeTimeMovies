import React from "react";
import axios from 'axios';

export function CutoffsClgsReq (datatosend ){

  return dispatch =>{


          //        dispatch({
          //     type:"SET_NAME",
          //     payload:"KINGDATA"
          // });


      axios.post('http://gnyann.com/CutoffsFirstString', datatosend )
        .then(res => {


  const datatopass={};
          for (var i = 0; i < Object.keys(res.data).length; i++) {

    				var clgdata = res.data[i];

  var StreamId = clgdata.STREAM_ID;
  datatopass[StreamId]=clgdata;




  	}

                 dispatch({
              type:"CUTOFFS_CLGS_RESULT",
              payload:datatopass
          });

        })



  }


  }

export function apInstOthersRequest (datatosend ){

return dispatch =>{
axios.post('http://gnyann.com/CutoffStreams', datatosend )
      .then(res => {
dispatch({
type:"CUTOFFS_AP_INST_OTHERS_RESULT",
payload:res.data
        });})}}
export function apInstNameRequest (datatosend ){

return dispatch =>{
axios.post('http://gnyann.com/CutoffStreams', datatosend )
      .then(res => {
dispatch({
type:"CUTOFFS_AP_INSTNAME_RESULT",
payload:res.data
        });})}}

    export function apInstCodeRequest (datatosend ){

    return dispatch =>{
  axios.post('http://gnyann.com/CutoffStreams', datatosend )
          .then(res => {
 dispatch({
   type:"CUTOFFS_AP_INSTCODE_RESULT",
    payload:res.data
            });})}}

  export function CutoffsClgsNamesReq (datatosend ){

    return dispatch =>{


            //        dispatch({
            //     type:"SET_NAME",
            //     payload:"KINGDATA"
            // });


        axios.post('http://gnyann.com/CutoffStreams', datatosend )
          .then(res => {


    const datatopass={};
            for (var i = 0; i < Object.keys(res.data).length; i++) {

      				var clgdata = res.data[i];

    var Clg_Id = clgdata.CLG_ID;
    datatopass[Clg_Id]=clgdata;




    	}

                   dispatch({
                type:"CUTOFFS_CLGS_NAMES_RESULT",
                payload:datatopass
            });

          })



    }


    }

    export function CutoffsClgsIITReq (datatosend ){

      return dispatch =>{


              //        dispatch({
              //     type:"SET_NAME",
              //     payload:"KINGDATA"
              // });


          axios.post('http://gnyann.com/CutoffStreams', datatosend )
            .then(res => {


      const datatopass={};
              for (var i = 0; i < Object.keys(res.data).length; i++) {

        				var clgdata = res.data[i];

      var College_Id = clgdata.COLLEGE_ID;
      datatopass[College_Id]=clgdata;




      	}

                     dispatch({
                  type:"CUTOFFS_IITS_IIITS_RESULT",
                  payload:res.data
              });

            })



      }


      }
      export function CutoffsApEamcetData (datatosend ){

        return dispatch =>{


                //        dispatch({
                //     type:"SET_NAME",
                //     payload:"KINGDATA"
                // });


            axios.post('http://gnyann.com/CutoffStreams', datatosend )
              .then(res => {




                       dispatch({
                    type:"AP_CUTOFFS_MAIN_RESULT",
                    payload:res.data
                });

              })



        }


        }

      export function StateMaintainceReq (data ){

          return {
              type:"CUTOFFS_STATE_MAINTAINCE",
              payload:data
          };

      }
      export function apEamcetStateMaintainceReq (data ){

          return {
              type:"AP_EAMCET_CUTOFFS_STATE_MAINTAINCE",
              payload:data
          };

      }
