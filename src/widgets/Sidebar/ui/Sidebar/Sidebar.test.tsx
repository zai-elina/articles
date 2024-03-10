import { fireEvent, screen } from "@testing-library/react";
import { 
  renderWithTranslation 
} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  test("Test render", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Test toggle collapsed state when button is clicked", () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
