import React from "react";
import axios from 'axios';
export function eventsoverview (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/Festsdata', datatosend )
      .then(res => {


const datatopass={};
        for (var i = 0; i < Object.keys(res.data).length; i++) {

  				var clgdata = res.data[i];

var fest_id = clgdata.fest_id;
datatopass[fest_id]=clgdata;




	}

               dispatch({
            type:"EVENTS_DETAILS_OVERVIEW",
            payload:datatopass
        });

      })



}


};
export function reqcalleventsdata (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/Festsdata', datatosend )
      .then(res => {


const datatopass={};
        for (var i = 0; i < Object.keys(res.data).length; i++) {

  				var clgdata = res.data[i];

var fest_id = "FEST_EV_WK_PP";
datatopass[fest_id]=clgdata;




	}

               dispatch({
            type:"EVENTS_DETAILS_EV_EK_PP",
            payload:datatopass
        });

      })



}


};

export function eventscallreach (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/Festsdata', datatosend )
      .then(res => {


const datatopass={};
        for (var i = 0; i < Object.keys(res.data).length; i++) {

  				var clgdata = res.data[i];

datatopass[i]=clgdata;



	}

               dispatch({
            type:"EVENTS_DETAILS_REACH",
            payload:datatopass
        });

      })



}


};

export function eventscalllinks (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/Festsdata', datatosend )
      .then(res => {


const datatopass={};
        for (var i = 0; i < Object.keys(res.data).length; i++) {

  				var clgdata = res.data[i];

var fest_id = clgdata.fest_id;
datatopass[fest_id]=clgdata;




	}

               dispatch({
            type:"EVENTS_DETAILS_LINKS",
            payload:datatopass
        });

      })



}


};
