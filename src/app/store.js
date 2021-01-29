import {createStore,combineReducers,applyMiddleware} from "redux";
import { createLogger } from 'redux-logger';
import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import preHomeReducer from "./reducers/preHomeReducer/preHomeReducer"
import festRegisreduce from "./reducers/FestRegisReducer";
import NewsArticlesreduce from "./reducers/NewsArticlesReducer";
import Pathparamsreduce from "./reducers/Pathparamsreduce";
import EventsReducer from "./reducers/EventsReducer";
import ExamsReduce from "./reducers/ExamsReducer";
import CutoffsReduce from "./reducers/CutoffsReducer";
import PlacementsReduce from "./reducers/PlacementsReducer";
import EventsDetailsReduce from "./reducers/EventsDetailsReducer";
import ExamsDetailsReduce from "./reducers/ExamsDetailsReducer";
import HomeReducer from "./reducers/HomeReducer";
import NewsUploadReducer from "./reducers/NewsUploadReducer";
import ExamsUploadReducer from "./reducers/ExamsUploadReducer";
import svpcetUploadReducer from "./reducers/svpcetUploadReducer";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import flashMessages from "./reducers/flashMessages";

import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/userActions';


import thunk from "redux-thunk";
import promise from "redux-promise-middleware";


//export default store = createStore(combineReducers({math:mathReducer,user:userReducer}),

const store = createStore(combineReducers({math:math,flashMessages:flashMessages,user:user,preHome:preHomeReducer,festRegisreduce:festRegisreduce,NewsArticlesreduce:NewsArticlesreduce,Pathparamsreduce:Pathparamsreduce,EventsReducer:EventsReducer,ExamsReduce:ExamsReduce,
CutoffsReduce:CutoffsReduce,PlacementsReduce:PlacementsReduce,EventsDetailsReduce:EventsDetailsReduce,ExamsDetailsReduce:ExamsDetailsReduce,HomeReducer:HomeReducer,NewsUploadReducer:NewsUploadReducer,ExamsUploadReducer:ExamsUploadReducer,svpcetUploadReducer:svpcetUploadReducer}),
{},
applyMiddleware(createLogger(),thunk)
)

//setting auth token when page refresh from local storage to axios request headers & to redux store for app purposes
if(localStorage.access_token){
setAuthorizationToken(localStorage.access_token);
store.dispatch(setCurrentUser(jwt.decode(localStorage.access_token)));
}
export default store;
