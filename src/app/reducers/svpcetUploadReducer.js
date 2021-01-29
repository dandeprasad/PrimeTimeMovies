const svpcetUploadReducer = (state =
    {
    newsheader:'',
    newsimage:'',
    newsdesc:'',
    result:'',
    optiondata:true,
    loading:false
}  , action)=>{

    switch (action.type){
        case "NEWS_DESC_UPLOAD1":

        state = {
...state,
        newsdesc: action.payload.data

        }
        break;

        case "NEWS_HEAD_UPLOAD1":

          state = {
            ...state,
            newsheader:action.payload.data
        }
        break;
        case "NEWS_IMG_UPLOAD1":

          state = {
            ...state,
            newsimage:action.payload.data
        }
        break;
        case "LOADING_UPLOAD1":

          state = {
            ...state,
            loading:action.payload
        }
        break;

        case "SET_RESULT_NEWS_UPLOAD1":

          state = {
            ...state,
            result:action.payload
        }
        break;
        case "NEWS_CLEAR_UPLOAD1":

          state = {
            newsheader:'',
            newsimage:'',
            newsdesc:'',
            result:'',
            optiondata:''
        }
          break;
        case "NEWS_CLEAR_UPLOAD1":

          state = {
            newsheader:'',
            newsimage:'',
            newsdesc:'',
            result:'',
            optiondata:''
        }
          break;
        case "HANDLE_OPTION_DATA":

        state = {
          ...state,
          optiondata:action.payload
      }
    break;

    }
    return state;
};
export default svpcetUploadReducer;
