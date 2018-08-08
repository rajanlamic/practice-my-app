import { ABOUT, defaultState } from "./about-constants";

export const about = (state = defaultState, action) => {
  switch (action.type) {
    case ABOUT.DEVELOPEMNT:
      return {
        ...state,
        ...{
          isDevelopment: true
        }
      };
    case ABOUT.ENHANCEMENT:
      return {
        ...state,
        ...{
          isEnhancement: true
        }
      };
    case ABOUT.ASYNC_DEVELOPEMNT:
      return {
        ...state,
        ...{
          isAsyncDevelopment: true
        }
      };
    case ABOUT.LOAD:
      return {
        ...state,
        ...{
          isFetched: true,
          data:
            action.data &&
            action.data.data &&
            action.data.data.response &&
            action.data.data.response.payload
        }
      };

    case ABOUT.LOAD_ERROR:
      return {
        ...state,
        ...{
          isFailed: true,
          isFetched: false,
          err: action.err
        }
      };

    default:
      return state;
  }
};
