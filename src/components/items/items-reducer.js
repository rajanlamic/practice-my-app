import { ITEMS, defaultState } from "./items-constants";

export const items = (state = defaultState, action) => {
  switch (action.type) {
    case ITEMS.DEVELOPEMNT:
      return {
        ...state,
        ...{
          isDevelopment: true
        }
      };
    case ITEMS.ENHANCEMENT:
      return {
        ...state,
        ...{
          isEnhancement: true
        }
      };

    default:
      return state;
  }
};
