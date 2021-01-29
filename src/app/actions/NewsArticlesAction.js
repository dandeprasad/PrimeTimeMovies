import React from "react";
import axios from 'axios';
export function newsSubmitReq (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/NewsStrings', datatosend )
      .then(res => {

const datatopass={};
        for (var i = 0; i < Object.keys(res.data).length; i++) {

  				var clgdata = res.data[i];

var NewsId = clgdata.NEWSID;
datatopass[NewsId]=clgdata;




	}

               dispatch({
            type:"NEWS_ARTICLES_RESULT",
            payload:datatopass
        });

      })



}


}
export function newsSubmitReqCount (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/NewsStrings', datatosend )
      .then(res => {

const datatopass={};
        for (var i = 0; i < Object.keys(res.data).length; i++) {

  				var clgdata = res.data[i];


datatopass["NEWS_COUNT_DATA"]=clgdata;




	}

               dispatch({
            type:"NEWS_COUNT_RESULT",
            payload:datatopass
        });

      })



}


}



export function newsdetailsdata (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/NewsStrings', datatosend )
      .then(res => {

const datatopass={};
        for (var i = 0; i < Object.keys(res.data).length; i++) {

  				var clgdata = res.data[i];

var NewsId = 0;
datatopass[NewsId]=clgdata;




	}

               dispatch({
            type:"NEWS_DETAILS_RESULT",
            payload:datatopass
        });

      })



}


}

export function newsSlidesActions (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/HomeAllNotifications', datatosend )
      .then(res => {


var datatopass=[];
        for (var i = 0; i < Object.keys(res.data).length; i++) {

  				var clgdata = res.data[i];

//var notifyId = clgdata.NOTIFYS_ID;
datatopass[i]=res.data[i];




	}

               dispatch({
            type:"NEWS_SLIDES_RESULT",
            payload:datatopass
        });

      })



}


}
