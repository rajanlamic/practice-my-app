import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { About } from "../About";

describe("About", () => {
  let wrapper, props;
  beforeEach(() => {
    props = {
      isDevelopment: true,
      isEnhancement: false
    };
    wrapper = shallow(<About {...props} />);
  });
  afterEach(() => {
    wrapper = null;
  });

  it("should render About properly with snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render development if development props is passed", () => {
    expect(wrapper.find(".development").length).toEqual(1);
  });
  it("should have myProp passed to AboutChild", () => {
    let aboutChild = wrapper.find("AboutChild");
    expect(aboutChild.props().myProp).toEqual("myProp");
  });
});
