import React from "react";
import axios from 'axios';
export function examsoverview (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/ExamsStrings', datatosend )
      .then(res => {


const datatopass={};
        for (var i = 0; i < Object.keys(res.data).length; i++) {

  				var clgdata = res.data[i];

var EXAM_NAME = clgdata.EXAM_NAME;
datatopass[EXAM_NAME]=clgdata;




	}

               dispatch({
            type:"EXAMS_DETAILS_OVERVIEW",
            payload:datatopass
        });

      })



}


};

export function examshowtoprepare (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/ExamsStrings', datatosend )
      .then(res => {


const datatopass={};
        for (var i = 0; i < Object.keys(res.data).length; i++) {

  				var clgdata = res.data[i];

var EXAM_NAME = clgdata.EXAM_NAME;
datatopass[EXAM_NAME]=clgdata;




	}

               dispatch({
            type:"EXAMS_DETAILS_PREPARE",
            payload:datatopass
        });

      })



}


};
export function examsimpdates (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/ExamsStrings', datatosend )
      .then(res => {


const datatopass={};
        for (var i = 0; i < Object.keys(res.data).length; i++) {

  				var clgdata = res.data[i];

var EXAM_NAME = clgdata.EXAM_NAME;
datatopass[EXAM_NAME]=clgdata;




	}

               dispatch({
            type:"EXAMS_DETAILS_IMPDATES",
            payload:datatopass
        });

      })



}


};
export function examsresults (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/ExamsStrings', datatosend )
      .then(res => {


const datatopass={};
        for (var i = 0; i < Object.keys(res.data).length; i++) {

  				var clgdata = res.data[i];

var EXAM_NAME = clgdata.EXAM_NAME;
datatopass[EXAM_NAME]=clgdata;




	}

               dispatch({
            type:"EXAMS_DETAILS_RESULTS",
            payload:datatopass
        });

      })



}


};
