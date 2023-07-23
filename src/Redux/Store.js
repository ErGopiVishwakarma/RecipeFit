import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

// Reducers ******************
import { reducer as RecipeReducer } from "./Recipes/reducer";

// Store *********************
const rootReducer = combineReducers({ RecipeReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
