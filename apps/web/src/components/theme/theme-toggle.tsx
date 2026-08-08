"use client";

import { IconButton } from "@bdt/ui";

type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("bdt-theme", theme);
}

export function ThemeToggle() {
  function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  }

  return (
    <IconButton aria-label="Toggle color theme" title="Toggle color theme" onClick={toggleTheme}>
      <span className="dark:hidden" aria-hidden="true">
        ☾
      </span>
      <span className="hidden dark:inline" aria-hidden="true">
        ☀
      </span>
    </IconButton>
  );
}
