import type { ReactNode } from "react";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { headingId } from "@/lib/notes";

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) {
    const props = node.props as { children?: ReactNode };
    return textOf(props.children);
  }
  return "";
}

const components: Components = {
  h1: ({ children }) => (
    <h1 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl">{children}</h1>
  ),
  h2: ({ children }) => {
    const id = headingId(textOf(children));
    return (
      <h2 id={id} className="scroll-mt-24 font-serif text-2xl leading-snug tracking-tight sm:text-3xl">
        <a href={`#${id}`} className="no-underline">
          {children}
        </a>
      </h2>
    );
  },
  h3: ({ children }) => {
    const id = headingId(textOf(children));
    return (
      <h3 id={id} className="scroll-mt-24 font-serif text-xl leading-snug">
        {children}
      </h3>
    );
  },
  p: ({ children }) => <p className="leading-8">{children}</p>,
  ul: ({ children }) => <ul className="list-disc space-y-2 pl-5 leading-8">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal space-y-2 pl-5 leading-8">{children}</ol>,
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-primary/50 bg-primary/5 px-4 py-1 text-sm leading-7 text-foreground/80">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
      {...(href?.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  code: ({ children }) => (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em]">{children}</code>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto rounded-xl border border-border bg-card">
      <table className="w-full min-w-[36rem] border-collapse text-left text-sm leading-6">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-muted/70">{children}</thead>,
  th: ({ children }) => <th className="px-3 py-2 font-semibold">{children}</th>,
  td: ({ children }) => <td className="border-t border-border px-3 py-2 align-top">{children}</td>,
  hr: () => <hr className="border-border" />,
};

export function TalkNotes({ markdown }: { markdown: string }) {
  return (
    <article className="space-y-5 text-base text-foreground/90">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
