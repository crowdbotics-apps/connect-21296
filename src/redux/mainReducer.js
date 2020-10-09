import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn42134263Reducer from '../features/SignIn42134263/redux/reducers'
import SignIn43134262Reducer from '../features/SignIn43134262/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn42134263: SignIn42134263Reducer,
SignIn43134262: SignIn43134262Reducer,

});