import axios from 'axios';
import Config from 'Config';
export function submitReqTrailers (datatosend ){

  return dispatch =>{
    if(datatosend.requestType=='GET'){
var ip = Config.serverIp;
var dataurl = datatosend.url;
dispatch({
  type:datatosend.reducerHandleType,
  payload:[{"movieName":"Palasa 1978","movieDate":1.5834528E9,"movieDescription":"Palasa 1978 is a 2020 Indian Telugu-language period action film written and directed by Karuna Kumar. The film stars Rakshith, Nakshatra, and Raghu Kunche who also composed the music with Thiruveer playing a key supporting role.","movieHours":"2h 24m","movieRating":"7.6/10 · IMDb","movieImages":"https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/palasa.jpg"},{"movieName":"Khaidi No. 150","movieDate":1.4840928E9,"movieDescription":"150 is a 2017 Indian Telugu-language action film directed by V. V. Vinayak and produced by Ram Charan. The film stars Chiranjeevi in a double role alongside Kajal Aggarwal with Tarun Arora, Brahmanandam, Ali and Posani Krishna Murali playing pivotal roles.","movieHours":"2h 27m","movieRating":"6/10 · IMDb","movieImages":"https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/khaidi_no_poster.jpg"},{"movieName":"V","movieDate":1.5995232E9,"movieDescription":"V is a 2020 Indian Telugu-language action thriller film written and directed by Mohana Krishna Indraganti, produced by Dil Raju under the banner of Sri Venkateswara Creations.","movieHours":"2h 20m","movieRating":"6.7/10 · IMDb","movieImages":"https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/v_poster.jpg"},{"movieName":"Fidaa","movieDate":1.4985216E9,"movieDescription":"Fidaa is a 2017 Indian Telugu-language romantic comedy film written and directed by Sekhar Kammula. It features Varun Tej and Sai Pallavi in the lead roles which marks her debut in Telugu cinema. ","movieHours":"2h 46m","movieRating":"7.5/10 · IMDb","movieImages":"https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/fidaa_new.jpg"},{"movieName":"Brindavanam","movieDate":1.2870144E9,"movieDescription":"Brindavanam is a 2010 Indian Telugu-language Action romantic comedy film starring N. T. Rama Rao Jr., Kajal Aggarwal, and Samantha Ruth Prabhu in the lead roles while Prakash Raj, Srihari, Kota Srinivasa Rao, Mukesh Rishi, Tanikella Bharani, and Brahmanandam playing pivotal roles.","movieHours":"2h 50m","movieRating":"7.1/10 · IMDb","movieImages":"https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/brindavanam.jpg"}]
});
   { /* commenting for hardcoding   axios.get(ip+dataurl)
        .then(res => {
                 dispatch({
              type:datatosend.reducerHandleType,
              payload:res.data
          });

        })*/}
        // .catch(err=>)



  
    }else if(datatosend.requestType=='POST'){

      axios.post(Config.serverIp+datatosend.url, datatosend )
        .then(res => {
                 dispatch({
              type:datatosend.reducerHandleType,
              payload:res.data
          });

        })
        // .catch(err=>)



  }}


  }