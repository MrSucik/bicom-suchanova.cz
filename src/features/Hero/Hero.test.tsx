import * as React from "react";
import { expect } from "chai";
import { render } from "@testing-library/react";
import { Hero } from "./Hero";

describe("<Hero />", () => {
  it("renders hero section", () => {
    const { getByRole } = render(<Hero />);
    const actionButton = getByRole("button");

    expect(document.body.contains(actionButton));
    expect(actionButton.textContent).equal("CO JE TO BIOREZONANCE");
  });
});
