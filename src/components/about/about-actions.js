import { ABOUT } from "./about-constants";
import { getCategories } from "./about-apis";

export const setDevelopment = () => {
  return {
    type: ABOUT.DEVELOPEMNT
  };
};

export const setEnhancement = () => {
  return {
    type: ABOUT.ENHANCEMENT
  };
};

export const asynchronousDevelopment = () => {
  return dispatch => {
    return dispatch({
      type: ABOUT.ASYNC_DEVELOPEMNT
    });
  };
};

export const loadCategoires = () => {
  return async dispatch => {
    try {
      let data = await getCategories();
      if (data) {
        dispatch({
          type: ABOUT.LOAD,
          data
        });
      }
    } catch (err) {
      dispatch({
        type: ABOUT.LOAD_ERROR,
        err
      });
    }
  };
};
