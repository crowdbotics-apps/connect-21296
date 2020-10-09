import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn41134314Reducer from '../features/SignIn41134314/redux/reducers'
import SignIn43134262Reducer from '../features/SignIn43134262/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn41134314: SignIn41134314Reducer,
SignIn43134262: SignIn43134262Reducer,

});