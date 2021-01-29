import React from "react";
import axios from 'axios';
export function festSubmitReq (datatosend ){

return dispatch =>{


        //        dispatch({
        //     type:"SET_NAME",
        //     payload:"KINGDATA"
        // });


        var formData = new FormData();
var imgs = datatosend.FEST_IMAGES;
if(imgs!=undefined){
var arrayLength = imgs.length;
for (var i = 0; i < arrayLength; i++) {
    formData.append('FEST_IMAGES'+i, datatosend.FEST_IMAGES[i]);
    //Do something
}}
if(imgs1!=undefined){
var imgs1 = datatosend.workshops;
var arrayLength1 = imgs1.length;
for (var i = 0; i < arrayLength1; i++) {
    formData.append('WORKSHOP_BANNER'+i, datatosend.workshops[i]);
    //Do something
}
}
      //  formData.append('FEST_IMAGES', datatosend.FEST_IMAGES);
      if(datatosend.FEST_BANNER_IMG!=undefined)
        formData.append('FEST_BANNER_IMG', datatosend.FEST_BANNER_IMG[0]);
        if(datatosend.FEST_LOGO_IMG!=undefined)
        formData.append('FEST_LOGO_IMG', datatosend.FEST_LOGO_IMG);
      //  formData.append('WORKSHOP_BANNER', datatosend.workshops);
        axios.post('http://gnyann.com/FestsImageUpload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {

        if( Object.keys(res.data).length>0){
        if(res.data[0] != undefined){
        datatosend["FEST_BANNER_IMG_SUCCESS"]=res.data[0].FEST_BANNER_IMG;
}
else{
datatosend["FEST_BANNER_IMG_SUCCESS"]="IMAGE_NOTUPLOADED";
}
}
else{
datatosend["FEST_BANNER_IMG_SUCCESS"]="IMAGE_NOTUPLOADED";
}


const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
}
  var dande = 'ServerData=' + encodeURIComponent(JSON.stringify(datatosend));
          axios.post('http://gnyann.com/FestsRegistrationWeb', dande ,config)

              .then(res => {



                       dispatch({
                    type:"SET_RESULT",
                    payload:res.data[0].RESULTCODE
                });

              })



        })
{
/* backup  var formData = new FormData();

  formData.append('image', datatosend.workshops[0].selectedFile);
  axios.post('http://gnyann.com/ImageUploadWeb', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  })
  .then(res => {



           dispatch({
        type:"SET_RESULT",
        payload:res.data[0].RESULTCODE
    });

  })*/
}


  { /*   axios.post('http://192.168.43.194:9544/FestsRegistrationWeb', JSON.stringify(datatosend ))
      .then(res => {



               dispatch({
            type:"SET_RESULT",
            payload:res.data[0].RESULTCODE
        });

      })*/}



}


}
