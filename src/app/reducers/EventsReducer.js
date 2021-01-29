const EventsReducer = (state =
    {
    result:[],
      result1:[],
      filterdata:[],
      stdata:{'startIndex':0,'LastIndex':5,'requestProcessing':false,'theposition':''}
}  , action)=>{

    switch (action.type){
        case "ALL_EVENTS_LATEST_RESULT":

        state = {

        result: [...state.result,action.payload],
          result1: [...state.result1],
          filterdata:[...state.filterdata],
          stdata:{...state.stdata}

        }
        break;
        case "EVENTS_SLIDES_RESULT":

          state = {
            result1: [...state.result1,action.payload],
            result: [...state.result],
              filterdata:[...state.filterdata],
              stdata:{...state.stdata}
        }
        break;
        case "ALL_EVENTS_FILTER_RESULT":

          state = {
            result1: [...state.result1],
            result: [...state.result],
              filterdata: [...state.filterdata,action.payload],
              stdata:{...state.stdata}
        }
        break;
        case "EVENTS_CLEAR_INFO":

          state = {
            result1: [...state.result1],
            result: [...state.result],
              filterdata: [],
              stdata:{'startIndex':0,'LastIndex':5,'requestProcessing':false,'theposition':''}
        }
        break;
        case "EVENTS_STATE_DATA":

        state = {
...state,
        stdata: action.payload

        }
        break;

    }
    return state;
};
export default EventsReducer;
