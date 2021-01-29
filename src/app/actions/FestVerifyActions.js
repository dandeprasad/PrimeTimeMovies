import React from "react";
import axios from 'axios';
export function SubmitReqUploadedFests (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


    axios.post('http://gnyann.com/UploadData', datatosend )
      .then(res => {


var datatopass=[];
      for (var i = 0; i < Object.keys(res.data).length; i++) {

  			//	var clgdata = res.data[i];

//var notifyId = clgdata.NOTIFYS_ID;
datatopass[i]=res.data[i];




	}

               dispatch({
            type:"UPLOADED_FESTS_RESULT",
            payload:datatopass
        });

      })



}


}
export function handlefestverifydatamaintaince (data ){
  return {
      type:"FESTS_VERIFY_DATA_MAINTAINCE",
      payload:data
  };
}
export function handleuploadSubmitdatafests (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });

      //   const data = datatosend;
      //   const options = {
      //     method: 'POST',
      //     headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
      //     data: data,
      //   url:  'http://192.168.43.194:9544/UploadData'
      //   };
      // let res =   axios(options);

      const config = {
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }

    axios.post('http://gnyann.com/UploadData', datatosend ,config)
      .then(res => {


var datatopass=[];


               dispatch({
            type:"HOME_FEST_DONE_RESULT",
            payload:res.data[0].RESULTCODE
        });

      })



}


}
export function setresult1 (data ){

    return {
        type:"SET_RESULT11",
        payload:""
    };

}
