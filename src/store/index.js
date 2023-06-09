import { applyMiddleware, combineReducers, createStore } from "redux";
import { mealsReducer } from "./meals/meals";
import { basketReducer } from "./basket/basket";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    meals: mealsReducer,
    basket: basketReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))