import { combineReducers } from "redux";
import categories from './categories';
import recipes from "./recipes";

export default combineReducers({
    categories,
    recipes,
})