import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { ComponentRender } from "shared/lib/tests/ComponentRender/ComponentRender";

describe("Sidebar", () => {
  test("Test render", () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Test toggle collapsed state when button is clicked", () => {
    ComponentRender(<Sidebar />);
    const toggleButton = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
