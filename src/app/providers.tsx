"use client";

// Path: src/app/providers.tsx
// Use this component to wrap our entire app in any providers we need.

import { ThemeProvider } from "@/providers/theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
