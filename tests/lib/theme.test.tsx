import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { ThemeProvider, useTheme } from "@/lib/theme";

function ThemeConsumer() {
  const { theme, toggle } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

function renderWithProvider() {
  return render(
    <ThemeProvider>
      <ThemeConsumer />
    </ThemeProvider>
  );
}

describe("ThemeProvider", () => {
  beforeEach(() => {
    localStorage.removeItem("theme");
    document.documentElement.removeAttribute("data-theme");
  });

  it("defaults to dark theme", () => {
    renderWithProvider();
    expect(screen.getByTestId("theme")).toHaveTextContent("dark");
  });

  it("reads stored theme from localStorage on mount", () => {
    localStorage.setItem("theme", "light");
    renderWithProvider();
    expect(screen.getByTestId("theme")).toHaveTextContent("light");
  });

  it("toggle switches dark to light and updates localStorage", () => {
    renderWithProvider();
    act(() => {
      screen.getByText("Toggle").click();
    });
    expect(screen.getByTestId("theme")).toHaveTextContent("light");
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("toggle switches light back to dark", () => {
    localStorage.setItem("theme", "light");
    renderWithProvider();
    act(() => {
      screen.getByText("Toggle").click();
    });
    expect(screen.getByTestId("theme")).toHaveTextContent("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("sets data-theme attribute on documentElement", () => {
    renderWithProvider();
    act(() => {
      screen.getByText("Toggle").click();
    });
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });
});
