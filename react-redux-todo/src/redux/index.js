import {combineReducers, createStore, applyMiddleware} from "redux";
import todos from "./todos";
const rootReducer = combineReducers({
  todos
});

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
