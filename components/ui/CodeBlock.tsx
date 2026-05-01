interface CodeLine {
  content: string;
  highlight?: boolean;
}

interface CodeBlockProps {
  filename?: string;
  lines: CodeLine[];
}

export function CodeBlock({ filename, lines }: CodeBlockProps) {
  return (
    <div className="rounded-[var(--radius-md)] border border-border bg-bg-secondary p-5 font-[family-name:var(--font-mono)] text-sm leading-relaxed shadow-[var(--shadow-md)]">
      {filename && (
        <div className="mb-4 text-xs text-text-muted">{filename}</div>
      )}
      <code className="block">
        {lines.map((line, i) => (
          <div key={i} className="flex">
            <span className="w-6 shrink-0 text-text-muted select-none">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={
                line.highlight ? "text-accent" : "text-text-secondary"
              }
              dangerouslySetInnerHTML={{ __html: line.content }}
            />
          </div>
        ))}
      </code>
    </div>
  );
}
