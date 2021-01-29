import React from "react";
import axios from 'axios';
import Config from 'Config';
export function examsSubmitReq (datatosend ){

  return dispatch =>{


          //        dispatch({
          //     type:"SET_NAME",
          //     payload:"KINGDATA"
          // });


      axios.post(Config.serverIp+'/ExamsStrings', datatosend )
        .then(res => {


  const datatopass={};
          for (var i = 0; i < Object.keys(res.data).length; i++) {

    				var clgdata = res.data[i];

  var ExamsId = clgdata.EXAMID;
  datatopass[ExamsId]=clgdata;




  	}

                 dispatch({
              type:"ALL_EXAMS_RESULT",
              payload:datatopass
          });

        })
        // .catch(err=>)



  }


  }

export function setExamStates (startIndex,LastIndex,requestProcessing,theposition){

var datatopass = {'startIndex':startIndex,'LastIndex':LastIndex,'requestProcessing':requestProcessing,'theposition':theposition};
    return {
        type:"EXAMS_STATE_DATA",
        payload:datatopass
    };

}
