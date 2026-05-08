"use client";

import * as React from "react";
import { toast } from "sonner";

import { profile } from "@/lib/data";

export function useCopyEmail() {
  return React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast.success("Email copied to clipboard", {
        description: profile.email,
        duration: 2200,
      });
    } catch {
      toast.error("Couldn't copy — long-press the email instead.");
    }
  }, []);
}
