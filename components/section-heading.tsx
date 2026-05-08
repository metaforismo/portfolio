import { cn } from "@/lib/utils";

export function SectionHeading({
  emoji,
  children,
  className,
  hint,
  level = 2,
}: {
  emoji?: string;
  children: React.ReactNode;
  className?: string;
  hint?: React.ReactNode;
  level?: 2 | 3;
}) {
  const Tag = level === 2 ? "h2" : "h3";
  const sizing =
    level === 2
      ? "text-[24px] sm:text-[28px] font-semibold tracking-tight leading-tight"
      : "text-[18px] font-semibold leading-tight";

  return (
    <div className={cn("flex items-baseline justify-between gap-4 group", className)}>
      <Tag className={cn("flex items-baseline gap-2 text-[var(--text)]", sizing)}>
        {emoji && (
          <span aria-hidden className="text-[1em] leading-none translate-y-[2px]">
            {emoji}
          </span>
        )}
        <span>{children}</span>
      </Tag>
      {hint && (
        <span className="hidden sm:inline-block text-[12px] text-[var(--muted)] font-mono">
          {hint}
        </span>
      )}
    </div>
  );
}

/** Notion-style colored callout block. */
export function Callout({
  emoji,
  color = "default",
  children,
  className,
}: {
  emoji: string;
  color?: "default" | "yellow" | "blue" | "green" | "purple" | "orange" | "red" | "gray";
  children: React.ReactNode;
  className?: string;
}) {
  const styles: Record<string, { bg: string; border: string; text: string }> = {
    default: {
      bg: "var(--callout-default-bg)",
      border: "transparent",
      text: "var(--callout-default-text)",
    },
    yellow: {
      bg: "var(--callout-yellow-bg)",
      border: "var(--callout-yellow-border)",
      text: "var(--callout-yellow-text)",
    },
    blue: {
      bg: "var(--callout-blue-bg)",
      border: "var(--callout-blue-border)",
      text: "var(--callout-blue-text)",
    },
    green: {
      bg: "var(--callout-green-bg)",
      border: "var(--callout-green-border)",
      text: "var(--callout-green-text)",
    },
    purple: {
      bg: "var(--callout-purple-bg)",
      border: "var(--callout-purple-border)",
      text: "var(--callout-purple-text)",
    },
    orange: {
      bg: "var(--callout-orange-bg)",
      border: "var(--callout-orange-border)",
      text: "var(--callout-orange-text)",
    },
    red: {
      bg: "var(--callout-red-bg)",
      border: "var(--callout-red-border)",
      text: "var(--callout-red-text)",
    },
    gray: {
      bg: "var(--callout-gray-bg)",
      border: "var(--callout-gray-border)",
      text: "var(--callout-gray-text)",
    },
  };

  const palette = styles[color];

  return (
    <div
      className={cn("flex gap-3 rounded-md border px-3 py-2.5", className)}
      style={{
        background: palette.bg,
        borderColor: palette.border,
      }}
    >
      <span className="text-[18px] leading-[1.4] shrink-0">{emoji}</span>
      <div
        className="flex-1 text-[14px] leading-[1.6]"
        style={{ color: color === "default" ? "var(--text)" : palette.text }}
      >
        {children}
      </div>
    </div>
  );
}
