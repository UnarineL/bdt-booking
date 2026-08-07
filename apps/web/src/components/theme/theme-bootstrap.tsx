const bootstrapTheme = `
(() => {
  try {
    const stored = localStorage.getItem("bdt-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.classList.remove("dark");
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export function ThemeBootstrap() {
  return <script dangerouslySetInnerHTML={{ __html: bootstrapTheme }} />;
}
