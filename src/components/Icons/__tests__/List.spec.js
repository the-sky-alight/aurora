/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import ListIcon from "../List";

describe("ListIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(<ListIcon />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders correctly the large variant", () => {
    const component = renderer.create(<ListIcon size="large" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
