"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PostBodyProps {
  content: string;
}

export function PostBody({ content }: PostBodyProps) {
  return (
    <div className="mt-8">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="text-xl font-semibold text-text-primary mt-10 mb-4">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-medium text-text-primary mt-8 mb-3">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-text-secondary leading-relaxed mb-4">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="text-text-primary font-medium">{children}</strong>
          ),
          code: ({ children, className }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <code className="text-sm font-mono text-text-secondary">
                  {children}
                </code>
              );
            }
            return (
              <code className="text-sm font-mono text-accent bg-accent-soft px-1 py-0.5 rounded">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="my-4 p-4 rounded-[var(--radius-md)] border border-border bg-bg-secondary overflow-x-auto">
              {children}
            </pre>
          ),
          ul: ({ children }) => (
            <ul className="my-4 space-y-2 list-disc pl-6 text-text-secondary">
              {children}
            </ul>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="my-4 pl-4 border-l-2 border-accent text-text-muted italic">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="my-4 overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-[var(--radius-sm)]">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-bg-secondary">{children}</thead>
          ),
          tr: ({ children }) => (
            <tr className="border-b border-border">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2 text-left text-text-muted font-medium">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2 text-text-secondary">{children}</td>
          ),
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt || ""}
              className="my-6 w-full rounded-[var(--radius-md)] border border-border"
            />
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
