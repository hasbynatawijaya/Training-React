import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import dataReducer from "../content/data/dataReducer";

const rootReducer = combineReducers({
  form: FormReducer,
  data: dataReducer
});

export default rootReducer;
