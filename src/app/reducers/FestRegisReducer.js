const FestRegisReducer = (state =
    {
      result1:"",
    resultcode:"",
    festverifydata:"",
    festverifylocaldata:{"UNIQUE_CLG_ID":"","FEST_TYPE":"","CLG_TYPE":"","DEPRT_TYPE":"","NOTIFY_CND":false}
}  , action)=>{



    switch (action.type){
        case "SET_RESULT":
        state = {
            ...state,
            resultcode:action.payload
        }
        break;
        case "SET_AGE":

          state = {
            ...state,
            age:action.payload
        }
        break;
        case "FESTS_VERIFY_DATA_MAINTAINCE":
var dande = state.festverifylocaldata;
dande[Object.keys(action.payload)[0]]=Object.values(action.payload)[0];
          state = {
            ...state,
            festverifylocaldata:dande
        }
        break;
        case "UPLOADED_FESTS_RESULT":

          state = {
            ...state,
            festverifydata:action.payload
        }
        break;

        case "HOME_FEST_DONE_RESULT":

          state = {
            ...state,
            result1:action.payload
        }
        break;
        case "SET_RESULT11":

          state = {
            ...state,
            result1:""
        }
        break;



    }
    return state;
};
export default FestRegisReducer;
