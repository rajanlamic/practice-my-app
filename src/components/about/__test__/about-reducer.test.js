import { ABOUT, defaultState } from "../about-constants";
import { about as reducer } from "../about-reducer";

describe("About Reducers", () => {
  it("should create ABOUT.ENHANCEMENT reducer ", () => {
    expect(reducer({}, { type: ABOUT.DEVELOPEMNT })).toEqual({
      isDevelopment: true
    });
  });
  it("should create ABOUT.ENHA ENHANCEMENT ", () => {
    expect(reducer({}, { type: ABOUT.ENHANCEMENT })).toEqual({
      isEnhancement: true
    });
  });
});
