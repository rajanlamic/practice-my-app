import { combineReducers } from "redux";
import { about } from "./components/about/about-reducer";
import { home } from "./components/home/home-reducer";

const CombinedReducers = combineReducers({
  about,
  home
});

export default CombinedReducers;
