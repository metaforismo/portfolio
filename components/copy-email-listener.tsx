"use client";

import * as React from "react";
import { toast } from "sonner";

import { profile } from "@/lib/data";

const isEditableTarget = (el: EventTarget | null) => {
  if (!(el instanceof HTMLElement)) return false;
  if (el.isContentEditable) return true;
  const tag = el.tagName.toLowerCase();
  return tag === "input" || tag === "textarea" || tag === "select";
};

export function CopyEmailKeyboardListener() {
  React.useEffect(() => {
    const handler = async (event: KeyboardEvent) => {
      if (event.key !== "c" && event.key !== "C") return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (isEditableTarget(event.target)) return;

      try {
        await navigator.clipboard.writeText(profile.email);
        toast.success("Email copied to clipboard", {
          description: profile.email,
          duration: 2200,
        });
      } catch {
        // silent — user can still click the button
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return null;
}
