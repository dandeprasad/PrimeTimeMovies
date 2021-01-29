const EventsDetailsReducer = (state =
    {
    result:[],
    links:[],
    reachus:[],
    eventdetails:[]
}  , action)=>{

    switch (action.type){
        case "EVENTS_DETAILS_OVERVIEW":

        state = {
...state,
        result: [action.payload]

        }
        break;
        case "EVENTS_DETAILS_LINKS":

        state = {
...state,
        links: [action.payload]

        }
        break;
        case "EVENTS_DETAILS_REACH":

        state = {
...state,
        reachus: [action.payload]

        }
        break;
        case "EVENTS_DETAILS_EV_EK_PP":

        state = {
...state,
        eventdetails: [action.payload]

        }
        break;


    }
    return state;
};
export default EventsDetailsReducer;
