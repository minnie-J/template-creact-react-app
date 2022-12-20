import { render, screen } from "@testing-library/react";
import Home from "./index";

test("renders hello world", () => {
  render(<Home />);
  const element = screen.getByText(/Hello World/i);
  expect(element).toBeInTheDocument();
});
