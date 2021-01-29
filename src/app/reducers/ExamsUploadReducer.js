const ExamsUploadReducer = (state =
    {
    newsheader:'',
    newsimage:'',
    examoverviewdata:{},
    result:'',
    newsUploaderName:'',
    loading:false
}  , action)=>{

    switch (action.type){
        case "EXAMS_OVERVIEW_UPLOAD":


        state = {
...state,
        examoverviewdata: action.payload.data

        }
        break;
        case "NEWS_UPLOADER":

        state = {
...state,
        newsUploaderName: action.payload.data

        }
        break;

        case "NEWS_HEAD_UPLOAD":

          state = {
            ...state,
            newsheader:action.payload.data
        }
        break;
        case "NEWS_IMG_UPLOAD":

          state = {
            ...state,
            newsimage:action.payload.data
        }
        break;
        case "LOADING_UPLOAD":

          state = {
            ...state,
            loading:action.payload
        }
        break;

        case "SET_RESULT_NEWS_UPLOAD":

          state = {
            ...state,
            result:action.payload
        }
        break;
        case "NEWS_CLEAR_UPLOAD":

          state = {
            newsheader:'',
            newsimage:'',
            newsdesc:'',
            result:'',
            newsUploaderName:''
        }
        break;

    }
    return state;
};
export default ExamsUploadReducer;
