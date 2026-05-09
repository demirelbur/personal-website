"use client";

import { useState, useEffect, useRef, useCallback, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { createPortal } from "react-dom";

interface Source {
  title: string;
  section: string;
  url: string;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
}

function cleanAnswerText(text: string): string {
  let cleaned = text;

  // Remove labeled source sections and everything after them
  cleaned = cleaned.replace(
    /\n?\s*(Relevant source URLs?|Source URLs?|Sources?|References?)\s*:[\s\S]*$/gi,
    ""
  );

  // Remove markdown links: [Title](https://...)
  cleaned = cleaned.replace(/\[.*?\]\(https?:\/\/[^\)]+\)/g, "");

  // Remove raw URLs (with optional leading bullet/dash)
  cleaned = cleaned.replace(/\s*[-*·]?\s*https?:\/\/[^\s)]+/g, "");

  // Clean up leftover bullet prefixes on now-empty lines
  cleaned = cleaned.replace(/\n\s*[-*·]\s*$/gm, "");

  // Clean up multiple consecutive newlines
  cleaned = cleaned.replace(/\n{3,}/g, "\n\n");

  // Remove trailing punctuation artifacts like ".- " left at end
  cleaned = cleaned.replace(/\.\s*-\s*$/, ".");

  return cleaned.trim();
}

const SUGGESTED_QUESTIONS = [
  "What kind of reinforcement learning work has Burak done?",
  "What is Burak's research about?",
  "What projects has Burak worked on?",
  "What is Burak's experience in AI-native networks?",
];

export function AskAIButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-muted hover:text-text-primary border border-border rounded-[var(--radius-sm)] hover:bg-bg-elevated transition-colors duration-[var(--duration-fast)] cursor-pointer"
      aria-label="Ask AI"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
        <path d="M9 21h6" />
        <path d="M10 21v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1" />
      </svg>
      Ask AI
    </button>
  );
}

export function AskAIPanel({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const loadingRef = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Portal must render only after client mount.
    setMounted(true);
    return () => { abortRef.current?.abort(); };
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const submit = useCallback(
    async (q: string) => {
      const trimmed = q.trim();
      if (!trimmed || loadingRef.current) return;

      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      const userMessage: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: trimmed,
      };

      setMessages((prev) => [...prev, userMessage]);
      setQuestion("");
      setLoading(true);
      loadingRef.current = true;
      setError(null);

      try {
        const resp = await fetch("/api/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: trimmed }),
          signal: controller.signal,
        });

        if (!resp.ok) {
          const text = await resp.text();
          throw new Error(text || `Error ${resp.status}`);
        }

        const data = await resp.json();
        const assistantMessage: Message = {
          id: crypto.randomUUID(),
          role: "assistant",
          content: cleanAnswerText(data.answer),
          sources: data.sources,
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (e) {
        if (e instanceof DOMException && e.name === "AbortError") return;
        setError(e instanceof Error ? e.message : "Something went wrong");
      } finally {
        if (abortRef.current === controller) {
          loadingRef.current = false;
          setLoading(false);
          abortRef.current = null;
        }
      }
    },
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(question);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit(question);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setError(null);
    setQuestion("");
  };

  const handleTabTrap = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab") return;
    const panel = panelRef.current;
    if (!panel) return;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'button, [href], textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  if (!mounted) return null;

  const panel = (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        onKeyDown={handleTabTrap}
        className={`fixed top-0 right-0 z-[999] h-full w-full md:w-[420px] bg-bg-primary border-l border-border shadow-lg flex flex-col transition-transform duration-300 ease-[var(--ease-out)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal={isOpen || undefined}
        aria-label="Ask AI"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
          <div className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent"
            >
              <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
              <path d="M9 21h6" />
            </svg>
            <h2 className="text-sm font-semibold text-text-primary">Ask AI</h2>
          </div>
          <div className="flex items-center gap-1">
            {messages.length > 0 && (
              <button
                type="button"
                onClick={handleNewChat}
                className="p-1.5 rounded-[var(--radius-sm)] text-text-muted hover:text-text-primary hover:bg-bg-elevated transition-colors cursor-pointer"
                aria-label="New chat"
                title="New chat"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-[var(--radius-sm)] text-text-muted hover:text-text-primary hover:bg-bg-elevated transition-colors cursor-pointer"
              aria-label="Close"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-4" aria-live="polite" aria-atomic="false">
          {/* Suggested questions (only when no messages) */}
          {messages.length === 0 && !loading && !error && (
            <div className="mb-4">
              <p className="text-[10px] font-medium text-text-muted uppercase tracking-widest mb-3">
                Suggested questions
              </p>
              <div className="space-y-2">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => submit(q)}
                    className="w-full text-left px-3 py-2.5 text-xs text-text-secondary hover:text-text-primary border border-border rounded-[var(--radius-sm)] hover:bg-bg-elevated transition-colors cursor-pointer leading-relaxed"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          {messages.map((msg) => (
            <div key={msg.id} className="mb-4">
              {msg.role === "user" ? (
                <div className="flex justify-end">
                  <div className="max-w-[85%] px-3 py-2.5 rounded-[var(--radius-sm)] bg-accent/10 border border-accent/20 text-sm text-text-primary">
                    {msg.content}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {msg.content ? (
                    <div className="text-sm text-text-secondary leading-relaxed whitespace-pre-wrap">
                      {msg.content}
                    </div>
                  ) : (
                    <div className="text-sm text-text-muted italic">
                      I could not find relevant information on the website.
                    </div>
                  )}
                  {msg.sources && msg.sources.length > 0 && (
                    <div>
                      <p className="text-[10px] font-medium text-text-muted uppercase tracking-widest mb-2">
                        Sources
                      </p>
                      <div className="space-y-1.5">
                        {msg.sources.map((source) => (
                          <a
                            key={source.url + source.title}
                            href={source.url}
                            className="block px-3 py-2 rounded-[var(--radius-sm)] border border-border hover:bg-bg-elevated transition-colors"
                          >
                            <p className="text-xs font-medium text-text-primary truncate">
                              {source.title}
                            </p>
                            <p className="text-[10px] text-text-muted">
                              {source.section}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Loading */}
          {loading && (
            <div className="flex items-center gap-2 py-4">
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse [animation-delay:0.2s]" />
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse [animation-delay:0.4s]" />
              <span className="text-xs text-text-muted ml-1">Thinking...</span>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="py-3 px-3 rounded-[var(--radius-sm)] border border-error/30 bg-error/5 text-xs text-error">
              {error}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="shrink-0 border-t border-border px-5 py-4"
        >
          <div className="flex items-end gap-2">
            <textarea
              ref={inputRef}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Burak's work..."
              rows={1}
              className="flex-1 resize-none px-3 py-2.5 text-sm text-text-primary bg-bg-secondary border border-border rounded-[var(--radius-sm)] placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="p-2.5 rounded-[var(--radius-sm)] bg-accent text-white hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer shrink-0"
              aria-label="Submit question"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-[10px] text-text-muted">
            Press Enter to send · Cmd+I to toggle
          </p>
        </form>
      </div>
    </>
  );

  return createPortal(panel, document.body);
}

export function useAskAI() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "i") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
}
