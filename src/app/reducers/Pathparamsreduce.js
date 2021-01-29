const Pathparamsreduce = (state =
    {
    result:'',
    eventhideinfo:false,
    examshideinfo:{
      overview:true,
      prepare:false,
      impdates:false,
      result:false
    }
}  , action)=>{

    switch (action.type){
        case "HEADER_PARAMS":

        state = {
...state,
        result: action.payload

        }
        break;

        case "EVENTS_HIDE_INFO":

          state = {
            ...state,
            eventhideinfo:action.payload
        }
        break;
        case "CUTOFFS_HIDE_INFO":

          state = {
            ...state,
            cutoffhideinfo:action.payload
        }
        break;
        case "EXAMS_HIDE_INFO":

          state = {
            ...state,
            examshideinfo:action.payload
        }
        break;
    }
    return state;
};
export default Pathparamsreduce;
