import { combineReducers } from "redux";
import { getApiConfiguration, getGenres } from "./reducer";

export default combineReducers({ getApiConfiguration, getGenres });
