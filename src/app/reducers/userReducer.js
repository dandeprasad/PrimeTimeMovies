import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from 'lodash/isEmpty';
const initialState = {
  isAuthenticated:false,
  user:{}
}
const userReducer = (state = initialState,action)=>{

    switch (action.type){
      case SET_CURRENT_USER:
      state = {
        isAuthenticated: !isEmpty(action.payload),
          user:action.payload
      }
      break;

    default: state;
      }
    return state;
};
export default userReducer;
