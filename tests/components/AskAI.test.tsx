import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { AskAIPanel } from "@/components/AskAI";

const mockFetch = vi.fn();
global.fetch = mockFetch;

function renderPanel(isOpen = true) {
  const onClose = vi.fn();
  const result = render(<AskAIPanel isOpen={isOpen} onClose={onClose} />);
  return { onClose, ...result };
}

describe("AskAIPanel", () => {
  beforeEach(() => {
    mockFetch.mockReset();
    document.body.style.overflow = "";
  });

  afterEach(() => {
    document.body.style.overflow = "";
  });

  it("submits a question and renders the answer", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({
          answer: "Burak works on RL systems.",
          sources: [{ title: "RL Project", section: "Projects", url: "/projects/rl" }],
        }),
    });

    renderPanel();
    const textarea = screen.getByPlaceholderText("Ask about Burak's work...");

    await act(async () => {
      fireEvent.change(textarea, { target: { value: "What does Burak do?" } });
      fireEvent.keyDown(textarea, { key: "Enter" });
    });

    await waitFor(() => {
      expect(screen.getByText("Burak works on RL systems.")).toBeInTheDocument();
    });
    expect(screen.getByText("RL Project")).toBeInTheDocument();
  });

  it("prevents double submit via loading guard", async () => {
    let resolveFirst!: (v: unknown) => void;
    const firstCall = new Promise((r) => { resolveFirst = r; });

    mockFetch.mockImplementation(() => firstCall);

    renderPanel();
    const textarea = screen.getByPlaceholderText("Ask about Burak's work...");

    await act(async () => {
      fireEvent.change(textarea, { target: { value: "Question 1" } });
      fireEvent.keyDown(textarea, { key: "Enter" });
    });

    // Try submitting again while first is in-flight
    await act(async () => {
      fireEvent.change(textarea, { target: { value: "Question 2" } });
      fireEvent.keyDown(textarea, { key: "Enter" });
    });

    // Only one fetch call should have been made
    expect(mockFetch).toHaveBeenCalledTimes(1);

    // Clean up
    await act(async () => {
      resolveFirst({ ok: true, json: () => Promise.resolve({ answer: "done", sources: [] }) });
    });
    await waitFor(() => expect(screen.getByText("done")).toBeInTheDocument());
  });

  it("swallows AbortError without showing error", async () => {
    const abortError = new DOMException("Aborted", "AbortError");
    mockFetch.mockRejectedValueOnce(abortError);

    renderPanel();
    const textarea = screen.getByPlaceholderText("Ask about Burak's work...");

    await act(async () => {
      fireEvent.change(textarea, { target: { value: "test" } });
      fireEvent.keyDown(textarea, { key: "Enter" });
    });

    // Wait for the catch to fire
    await act(async () => {
      await new Promise((r) => setTimeout(r, 50));
    });

    // No error message should be visible
    expect(screen.queryByText(/something went wrong/i)).not.toBeInTheDocument();
  });

  it("Escape key closes the panel", () => {
    const { onClose } = renderPanel();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("locks body scroll when open and restores on close", () => {
    document.body.style.overflow = "auto";
    const { rerender } = render(<AskAIPanel isOpen={true} onClose={() => {}} />);
    expect(document.body.style.overflow).toBe("hidden");

    rerender(<AskAIPanel isOpen={false} onClose={() => {}} />);
    expect(document.body.style.overflow).toBe("auto");
  });

  it("has aria-live region on content area", () => {
    renderPanel();
    const liveRegion = document.querySelector('[aria-live="polite"]');
    expect(liveRegion).toBeInTheDocument();
  });

  it("panel has onKeyDown handler for focus trapping", () => {
    renderPanel();
    const dialog = screen.getByRole("dialog");

    // Verify that the dialog has focusable elements for the trap to work with
    const focusable = dialog.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], textarea, [tabindex]:not([tabindex="-1"])'
    );
    expect(focusable.length).toBeGreaterThan(1);

    // Verify Tab keydown doesn't throw and is handled
    expect(() => {
      fireEvent.keyDown(dialog, { key: "Tab", shiftKey: true });
      fireEvent.keyDown(dialog, { key: "Tab", shiftKey: false });
    }).not.toThrow();
  });
});
