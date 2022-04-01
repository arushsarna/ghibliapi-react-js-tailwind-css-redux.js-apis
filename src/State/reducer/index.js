import { combineReducers } from "redux";
import idReducer from "./idReducer";

const reducers = combineReducers({
  id: idReducer,
});
export default reducers;
