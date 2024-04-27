import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";
import { categoryReducer } from "./Category/Reducer";

const rooteReducer = combineReducers({
  auth: authReducer,
  categoryStore: categoryReducer,
});

export const store = legacy_createStore(rooteReducer, applyMiddleware(thunk));
