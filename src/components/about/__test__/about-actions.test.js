import { ABOUT, defaultState } from "../about-constants";
import {
  setDevelopment,
  setEnhancement,
  asynchronousDevelopment,
  loadCategoires
} from "../about-actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("About Actions", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it("should create setDevelopment action creator", () => {
    expect(setDevelopment()).toEqual({ type: ABOUT.DEVELOPEMNT });
  });
  it("should create setEnhancement action creator", () => {
    expect(setEnhancement()).toEqual({ type: ABOUT.ENHANCEMENT });
  });
  it("should create aysnc developmetn action creator", () => {
    const store = mockStore({
      ...defaultState,
      ...{ about: { isAsyncDevelopment: true } }
    });
    expect(store.dispatch(asynchronousDevelopment())).toEqual({
      type: ABOUT.ASYNC_DEVELOPEMNT
    });
  });

  it("should create aysnc loadCategoires action creator", () => {
    const store = mockStore({
      ...defaultState,
      ...{ about: { isAsyncDevelopment: true } }
    });
    let mock = new MockAdapter(axios);
    mock
      .onGet("http://localhost:3002/mockapi/mycatalogue/categories")
      .reply(200, {
        title: "banking"
      });

    return store.dispatch(loadCategoires()).then(() => {
      expect(store.getActions()[0].type).toEqual("ABOUT/LOAD");
    });
  });
});
