import { createStore } from "redux";
import rootReducer from "../reducers/rootReducers";

export const configureStore = preloaedState => {
  const store = createStore(rootReducer, preloaedState);
  return store;
};
