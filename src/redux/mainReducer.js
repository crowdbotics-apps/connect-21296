import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp22134261Reducer from '../features/SignUp22134261/redux/reducers'
import SignIn41134260Reducer from '../features/SignIn41134260/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp22134261: SignUp22134261Reducer,
SignIn41134260: SignIn41134260Reducer,

});