import { HOME, defualtState } from "./home-constants";
import { defaultState } from "../about/about-constants";

export const home = (state = defaultState, action) => {
  switch (action.type) {
    case HOME.PACIFIC:
      return {
        ...state,
        ...{
          isPacific: true,
          isAtlantic: false
        }
      };
    case HOME.ALTANTIC:
      return {
        ...state,
        ...{
          isAtlantic: true,
          isPacific: false
        }
      };
    default:
      return state;
  }
};
