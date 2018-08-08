export const ABOUT = {
  DEVELOPEMNT: "ABOUT/DEVELOPMENT",
  ENHANCEMENT: "ABOUT/ENHANCEMENT",
  ASYNC_DEVELOPEMNT: "ABOUT/ASYNC_DEVELOPEMNT",
  LOAD: "ABOUT/LOAD",
  LOAD_ERROR: "ABOUT/LOAD_ERROR"
};

export const defaultState = {
  isDevelopment: false,
  isEnhancement: false,
  isAsyncDevelopment: false,
  isFetching: false,
  isFetched: false,
  isFailed: false,
  data: []
};
