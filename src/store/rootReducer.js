import { combineReducers } from "redux";
import reduceReducers from "reduce-reducers";

import { reducer as admin_home } from "./modules/admin_home";

import { reducer as user_home } from "./modules/user_home";
import { reducer as children_tips } from "./modules/children_tips";
import { reducer as system_admin } from "./modules/system_admin";




// =============================================================
// The rootReducer object aggregates our earlier reducers into a
// single reducer that holds our entire immutable application
// (theme) state.
// =============================================================

const rootReducer = reduceReducers(
  combineReducers({

      admin_home,

      user_home,
      children_tips,
        system_admin
  })
);

export default rootReducer;
