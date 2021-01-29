
const HomeReducer = (state =
    {
    result:[],
    news:[],
    exams:[],
    fests:[],
    uploadednews:[],
    filterdata:'ALL',
    NotifyNow:false

}  , action)=>{

    switch (action.type){

        case "HOME_SLIDES_RESULT":

          state = {

    result : [action.payload],
      news: [...state.news],
      exams: [...state.exams],
      fests: [...state.fests],
      uploadednews: [...state.uploadednews]
        }
        break;
        case "UPLOADED_NEWS_RESULT":

          state = {

    result : [action.payload],
      news: [...state.news],
      exams: [...state.exams],
      fests: [...state.fests],
      uploadednews:[action.payload],
      filterdata:state.filterdata,
      NotifyNow:state.NotifyNow
        }
        break;

        case "HOME_NEWS_RESULT":

          state = {

    news : [action.payload],
    result: [...state.result],
      exams: [...state.exams],
      fests: [...state.fests],
      uploadednews: [...state.uploadednews]

        }
        break;
        case "HOME_EXAMS_RESULT":

          state = {
exams:[action.payload],
    news : [...state.news],
    result: [...state.result],
    fests: [...state.fests],
    uploadednews: [...state.uploadednews]
        }
        break;
        case "HOME_FESTS_RESULT":

          state = {
fests:[action.payload],
  exams : [...state.exams],
    news : [...state.news],
    result: [...state.result],
    uploadednews: [...state.uploadednews]

        }
        break;
        case "SET_UPLOAD_FILTER_DATA":

          state = {
fests:[...state.fests],
  exams : [...state.exams],
    news : [...state.news],
    result: [...state.result],
    uploadednews: [...state.uploadednews],
    filterdata:action.payload,
    NotifyNow:state.NotifyNow
        }
        break;
        case "HOME_NEWS_DONE_RESULT":

          state = {
fests:[...state.fests],
  exams : [...state.exams],
    news : [...state.news],
    result: [...state.result],
    uploadednews: [...state.uploadednews],
    filterdata:"",
    NotifyNow:"",
    result1:action.payload

        }
        break;
        case "SET_RESULT1":

          state = {
fests:[...state.fests],
  exams : [...state.exams],
    news : [...state.news],
    result: [...state.result],
    uploadednews: [...state.uploadednews],
    filterdata:"",
    result1:"",
NotifyNow:""
        }
        break;
        case "SETNOTIFYNOW":

          state = {
fests:[...state.fests],
  exams : [...state.exams],
    news : [...state.news],
    result: [...state.result],
    uploadednews: [...state.uploadednews],
    filterdata: state.filterdata,
    NotifyNow:action.payload

        }
        break;

    }
    return state;
};
export default HomeReducer;
