import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { test } from "vitest";

test("renders mobile NavBar", () => {
  render(<Home />);

  const menuElement = screen.getByRole("button", {
    name: /menu ✤/i,
  });
  expect(menuElement).toBeInTheDocument();
});
