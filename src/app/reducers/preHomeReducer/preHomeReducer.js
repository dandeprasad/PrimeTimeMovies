import { PRE_HOME_TRAILERS } from '../../actions/types';
import isEmpty from 'lodash/isEmpty';
const initialState = {
  trailers:[]
}
const preHomeReducer = (state = initialState,action)=>{

    switch (action.type){
      case PRE_HOME_TRAILERS:
      state = {
        trailers:action.payload
      }
      break;

    default: state;
      }
    return state;
};
export default preHomeReducer;