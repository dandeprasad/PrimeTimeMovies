import React from "react";
import axios from 'axios';

export function ReqClgsPlacements (datatosend ){

  return dispatch =>{


          //        dispatch({
          //     type:"SET_NAME",
          //     payload:"KINGDATA"
          // });


      axios.post('http://gnyann.com/PlacementsStrings', datatosend )
        .then(res => {




                 dispatch({
              type:"PLACEMENTS_CLGS_RESULT",
              payload:res.data
          });

        })



  }


  }
