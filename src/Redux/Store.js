import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

// Reducers ******************
import { reducer as ProductReducer } from "./Products/reducer";
import {reducer as articleReducer} from './Articles/reducer'

// Store *********************
const rootReducer = combineReducers({ ProductReducer,articleReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
