const NewsArticlesReducer = (state =
    {
    result:[],
    result1:[],
    newsdetails:[],
    newscount:[]
}  , action)=>{

    switch (action.type){
        case "NEWS_ARTICLES_RESULT":

        state = {

        result: [...state.result,action.payload],
result1: [...state.result1],
newsdetails:[],
newscount:[...state.newscount]
        }
        break;
        case "SET_AGE":

          state = {
            ...state,
            age:action.payload
        }
        break;
        case "NEWS_SLIDES_RESULT":

          state = {
            result1: [...state.result1,action.payload],
            result: [...state.result],
            newsdetails:[],
            newscount:[...state.newscount]
        }

        break;
        case "NEWS_DETAILS_RESULT":

          state = {
            result1: [...state.result1],
            result: [...state.result],
            newsdetails:[action.payload],
            newscount:[...state.newscount]
        }

        break;
        case "NEWS_COUNT_RESULT":

          state = {
            result1: [...state.result1],
            result: [...state.result],
            newsdetails:[],
            newscount:[action.payload]
        }

        break;

    }
    return state;
};
export default NewsArticlesReducer;
