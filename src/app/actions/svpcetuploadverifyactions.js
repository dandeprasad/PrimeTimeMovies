import React from "react";
import axios from 'axios';



export function handleuploadSubmitdata (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/svpcetUploadData', datatosend )
      .then(res => {


var datatopass=[];


               dispatch({
            type:"HOME_NEWS_DONE_RESULT",
            payload:res.data[0].RESULTCODE
        });

      })



}


}
export function SubmitReqUploadedNews (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/svpcetUploadData', datatosend )
      .then(res => {


var datatopass=[];
      for (var i = 0; i < Object.keys(res.data).length; i++) {

  			//	var clgdata = res.data[i];

//var notifyId = clgdata.NOTIFYS_ID;
datatopass[i]=res.data[i];




	}

               dispatch({
            type:"UPLOADED_NEWS_RESULT",
            payload:datatopass
        });

      })



}


}


export function setfiltertype (data ){

    return {
        type:"SET_UPLOAD_FILTER_DATA",
        payload:data
    };

}
export function setresult1 (data ){

    return {
        type:"SET_RESULT1",
        payload:""
    };

}
export function setNewsNow (data ){

    return {
        type:"SETNOTIFYNOW",
        payload:data
    };

}
