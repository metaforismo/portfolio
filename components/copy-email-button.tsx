"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

import { useCopyEmail } from "@/lib/hooks/use-copy-email";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "footer" | "inline";

export function CopyEmailButton({
  email,
  className,
  variant = "ghost",
}: {
  email: string;
  className?: string;
  variant?: Variant;
}) {
  const copy = useCopyEmail();
  const [copied, setCopied] = React.useState(false);

  const onClick = React.useCallback(async () => {
    await copy();
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }, [copy]);

  if (variant === "inline") {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "group inline-flex items-center gap-1 text-[var(--text)] transition-colors hover:text-[var(--accent-yellow)]",
          className,
        )}
      >
        <span className="link-underline">{email}</span>
        {copied ? (
          <Check className="h-3 w-3 text-[var(--callout-green-text)]" strokeWidth={2} />
        ) : (
          <Copy
            className="h-3 w-3 opacity-40 transition-opacity group-hover:opacity-100"
            strokeWidth={1.75}
          />
        )}
      </button>
    );
  }

  if (variant === "footer") {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "group inline-flex items-center gap-2 text-lg font-medium transition-colors hover:text-[var(--accent-yellow)]",
          className,
        )}
      >
        <span className="link-underline">{email}</span>
        {copied ? (
          <Check className="h-4 w-4 text-[var(--callout-green-text)]" strokeWidth={2} />
        ) : (
          <Copy className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" strokeWidth={1.75} />
        )}
      </button>
    );
  }

  if (variant === "primary") {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md border border-[var(--border-line)] bg-[var(--bg-soft)] px-2.5 py-1 text-[13px] text-[var(--text)] transition-all hover:bg-[var(--bg-hover)]",
          className,
        )}
      >
        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3 opacity-70" />}
        {copied ? "Copied" : "Copy email"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-[var(--border-line)] bg-[var(--bg-soft)] px-2.5 py-1 text-[13px] text-[var(--text)] transition-all hover:bg-[var(--bg-hover)]",
        className,
      )}
    >
      {copied ? <Check className="h-3 w-3 text-[var(--callout-green-text)]" /> : <Copy className="h-3 w-3 opacity-70" />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
