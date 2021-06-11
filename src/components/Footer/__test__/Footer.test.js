import React from "react";
import ReactDOM from "react-dom";
import Footer from "../Footer";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer></Footer>, div);
});

it("renders footer crashing", () => {
  const { getByTestId } = render(<Footer></Footer>);
  expect(getByTestId("footer")).toHaveClass("main-footer");
});

it("renders child crashing", () => {
  const { getByTestId } = render(<Footer></Footer>);
  expect(getByTestId("footer").firstChild).toHaveClass("container");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
