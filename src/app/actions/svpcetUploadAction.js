import React from "react";
import axios from 'axios';

export function newsDescription (data ){

    return {
        type:"NEWS_DESC_UPLOAD1",
        payload:data
    };

}
export function loadingimgSub (data ){

    return {
        type:"LOADING_UPLOAD1",
        payload:data
    };

}
export function setHandleOptiondata (data ){

    return {
        type:"HANDLE_OPTION_DATA",
        payload:data
    };

}

export function handleClearSubmit1 ( ){

    return {
        type:"NEWS_CLEAR_UPLOAD1",
        payload:""
    };

}

export function newsHeader (data ){

    return {
        type:"NEWS_HEAD_UPLOAD1",
        payload:data
    };

}
export function newsImage (data ){

    return {
        type:"NEWS_IMG_UPLOAD1",
        payload:data
    };

}


export function newsuploadDatasubmit (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


        var formData = new FormData();

        formData.append('image', datatosend.svpcetUploadReducer.newsimage);
        axios.post('http://gnyann.com/svpcetImageUpload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {

var dac = datatosend.svpcetUploadReducer;
dac.uploadedimg = res.data[0].IMAGE_UPLOADED;
dac.newsimage = '';

var dataparse = datatosend

          var WORKSPACE_ID = "HOME_WORKSPACE";
          var FUNCTION_ID = "UPLOAD_NEWS";
          var datacontent = dac;


          var Record = {
            "WORKSPACE_ID" : WORKSPACE_ID,
            "FUNCTION_ID" : FUNCTION_ID,
            "DATA_TO_SERV" : datacontent
          };
          var json = {
            "datatohost" : Record
          };
          var dande = 'ServerData=' + JSON.stringify(json);



          axios.post('http://gnyann.com/svpcetUploadData', dande)
              .then(res => {



                       dispatch({
                    type:"SET_RESULT_NEWS_UPLOAD1",
                    payload:res.data[0].RESULTCODE
                });

              })




        })



  { /*   axios.post('http://192.168.43.194:9544/FestsRegistrationWeb', JSON.stringify(datatosend ))
      .then(res => {



               dispatch({
            type:"SET_RESULT",
            payload:res.data[0].RESULTCODE
        });

      })*/}



}


}
