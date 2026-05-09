import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { ProjectsCarousel } from "@/components/home/ProjectsCarousel";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

vi.mock("@/components/layout/Section", () => ({
  Section: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock("@/components/ui/Button", () => ({
  Button: ({ children, href }: { children: React.ReactNode; href?: string }) => (
    <a href={href}>{children}</a>
  ),
}));

function getCarouselRegion() {
  return screen.getByRole("region", { name: "Projects carousel" });
}

describe("ProjectsCarousel", () => {
  beforeEach(() => {
    render(<ProjectsCarousel />);
  });

  it("renders all 4 carousel cards in the desktop track", () => {
    const region = getCarouselRegion();
    const cards = region.querySelectorAll("[data-card]");
    expect(cards).toHaveLength(4);
  });

  it("ArrowRight advances to next card when carousel is focused", () => {
    const region = getCarouselRegion();
    region.focus();

    // scrollToIndex sets activeIndex directly, which updates the dot styling
    fireEvent.keyDown(region, { key: "ArrowRight" });

    const dots = screen.getAllByRole("button", { name: /Go to project/ });
    // After ArrowRight, second dot should be active
    expect(dots[1]).toHaveClass("text-accent");
    expect(dots[0]).not.toHaveClass("text-accent");
  });

  it("ArrowLeft does nothing at first card", () => {
    const region = getCarouselRegion();
    region.focus();
    fireEvent.keyDown(region, { key: "ArrowLeft" });
    const dots = screen.getAllByRole("button", { name: /Go to project/ });
    expect(dots[0]).toHaveClass("text-accent");
  });

  it("arrow keys do NOT fire when focus is outside carousel", () => {
    // The keydown handler is on the region element, not window,
    // so dispatching on body should have no effect
    fireEvent.keyDown(document.body, { key: "ArrowRight" });
    const dots = screen.getAllByRole("button", { name: /Go to project/ });
    expect(dots[0]).toHaveClass("text-accent");
  });

  it("mousemove < 5px does not set drag mode", () => {
    const region = getCarouselRegion();

    // Simulate a tiny move (< 5px threshold)
    fireEvent.mouseDown(region, { pageX: 100 });
    fireEvent.mouseMove(region, { pageX: 103 });
    fireEvent.mouseUp(region);

    // Click should propagate normally (not suppressed)
    const clickHandler = vi.fn();
    region.addEventListener("click", clickHandler);
    fireEvent.click(region);
    expect(clickHandler).toHaveBeenCalled();
    region.removeEventListener("click", clickHandler);
  });

  it("mousemove > 5px enters drag mode (preventDefault called on mousemove)", () => {
    const region = getCarouselRegion();

    // mouseDown starts potential drag
    fireEvent.mouseDown(region, { pageX: 100 });

    // mousemove beyond threshold — preventDefault is called to prevent text selection
    const moveEvent = new MouseEvent("mousemove", {
      bubbles: true,
      cancelable: true,
      clientX: 120,
    });
    Object.defineProperty(moveEvent, "pageX", { value: 120 });
    const moveNotPrevented = region.dispatchEvent(moveEvent);

    // In drag mode, mousemove gets preventDefault
    expect(moveNotPrevented).toBe(false);

    fireEvent.mouseUp(region);
  });

  it("click fires normally when no drag occurred", () => {
    const region = getCarouselRegion();
    const link = region.querySelector("a")!;
    const clickEvent = new MouseEvent("click", { bubbles: true, cancelable: true });
    const wasNotPrevented = link.dispatchEvent(clickEvent);
    expect(wasNotPrevented).toBe(true);
  });

  it("carousel region is keyboard-focusable", () => {
    const region = getCarouselRegion();
    expect(region).toHaveAttribute("tabindex", "0");
  });

  it("pagination dots navigate to correct card", () => {
    const dots = screen.getAllByRole("button", { name: /Go to project/ });
    fireEvent.click(dots[2]);
    expect(dots[2]).toHaveClass("text-accent");
    expect(dots[0]).not.toHaveClass("text-accent");
  });
});
