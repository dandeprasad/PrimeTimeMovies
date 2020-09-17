const ExamsDetailsReduce = (state =
    {
    result:[],
    prepare:[],
    impdates:[],
    examresults:[]
}  , action)=>{

    switch (action.type){
        case "EXAMS_DETAILS_OVERVIEW":

        state = {
...state,
        result: [action.payload]

        }
        break;
        case "EXAMS_DETAILS_PREPARE":

        state = {
...state,
        prepare: [action.payload]

        }
        break;
        case "EXAMS_DETAILS_IMPDATES":

        state = {
...state,
        impdates: [action.payload]
        }
        break;
        case "EXAMS_DETAILS_RESULTS":

        state = {
...state,
        examresults: [action.payload]

        }
        break;

    }
    return state;
};
export default ExamsDetailsReduce;
