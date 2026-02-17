import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-10 mb-4 text-xl font-bold tracking-tight text-text-primary"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-3 text-lg font-semibold text-text-primary"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="mb-4 leading-relaxed text-text-secondary"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="mb-4 ml-6 list-disc space-y-2 text-text-secondary" {...props} />
  ),
  ol: (props) => (
    <ol
      className="mb-4 ml-6 list-decimal space-y-2 text-text-secondary"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  a: (props) => (
    <a
      className="font-medium text-accent underline underline-offset-2 transition-colors hover:text-accent-hover"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-text-primary" {...props} />
  ),
  em: (props) => <em className="italic" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mb-4 border-l-2 border-accent pl-4 italic text-text-secondary"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm text-accent"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mb-4 overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-sm text-text-secondary"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-border" />,
};
