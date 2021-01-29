import axios from 'axios';

export default function setAuthorizationToken(token){
  if(token){
    axios.defaults.headers.common['Authorization'] ='Bearer '+token;
    var d = axios.defaults.headers;
    
console.log(axios.defaults.headers);
  }
  else{
    delete axios.defaults.headers.common['Authorization'];
    //axios.defaults.headers.common['Authorization'] = null;
  }
}
