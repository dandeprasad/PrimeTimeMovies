const ExamsReduce = (state =
    {
    result:[],
    stdata:{'startIndex':0,'LastIndex':5,'requestProcessing':false,'theposition':''}

}  , action)=>{

    switch (action.type){
      case "ALL_EXAMS_RESULT":

      state = {
...state,
      result: [...state.result,action.payload]

      }
        break;
        case "EXAMS_STATE_DATA":

        state = {
...state,
        stdata: action.payload

        }
        break;

    }
    return state;
};
export default ExamsReduce;
