"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[var(--bg-card)] group-[.toaster]:text-[var(--text-primary)] group-[.toaster]:border-[var(--chip-border)] group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[var(--text-secondary)]",
          actionButton:
            "group-[.toast]:bg-[var(--accent-color)] group-[.toast]:text-[var(--bg-primary)]",
          cancelButton:
            "group-[.toast]:bg-[var(--chip-bg)] group-[.toast]:text-[var(--text-secondary)]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
