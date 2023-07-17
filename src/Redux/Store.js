import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

// Reducers ******************
import { reducer as ProductReducer } from "./Products/reducer";

// Store *********************
const rootReducer = combineReducers({ ProductReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
