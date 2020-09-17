import React from "react";
import axios from 'axios';
export function eventsActions (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/FestsHomeAllNotificationsString', datatosend )
      .then(res => {


const datatopass={};
        for (var i = 0; i < Object.keys(res.data).length; i++) {

  				var clgdata = res.data[i];

var clgId = clgdata.CLGID;
datatopass[clgId]=clgdata;




	}

               dispatch({
            type:"ALL_EVENTS_LATEST_RESULT",
            payload:datatopass
        });

      })



}


};



export function eventsSlidesActions (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/FestsLatestUpdates', datatosend )
      .then(res => {


var datatopass=[];
        for (var i = 0; i < Object.keys(res.data).length; i++) {

  				var clgdata = res.data[i];

//var notifyId = clgdata.NOTIFYS_ID;
datatopass[i]=res.data[i];




	}

               dispatch({
            type:"EVENTS_SLIDES_RESULT",
            payload:datatopass
        });

      })



}


}

export function eventsActionsFilters (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/FestsHomeAllNotificationsString', datatosend )
      .then(res => {

const datatopass={};
        for (var i = 0; i < Object.keys(res.data).length; i++) {

  				var clgdata = res.data[i];

var clgId = clgdata.CLGID;
datatopass[clgId]=clgdata;




	}

               dispatch({
            type:"ALL_EVENTS_FILTER_RESULT",
            payload:datatopass
        });

      })



}


};
export function makeFilterDataEmpty (){

    return {
        type:"EVENTS_CLEAR_INFO",
        payload:"No load"
    };

};
export function setEventsStates (startIndex,LastIndex,requestProcessing,theposition){

var datatopass = {'startIndex':startIndex,'LastIndex':LastIndex,'requestProcessing':requestProcessing,'theposition':theposition};
    return {
        type:"EVENTS_STATE_DATA",
        payload:datatopass
    };

}
