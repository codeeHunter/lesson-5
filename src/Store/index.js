import { Login } from "./Reducers/Login";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Game } from "./Reducers/Game";

const rootReducer = combineReducers({
  Login,
  Game,
});

export const store = createStore(rootReducer, composeWithDevTools());
