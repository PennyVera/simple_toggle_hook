import { useTheme } from "../context/ThemeContext";

export default function ThemeToggleDemo() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <section className="theme-demo-card">
      <h3>Theme Toggle Demo</h3>
      <p>Current theme: {theme}</p>

      <button type="button" onClick={toggleTheme} className="theme-toggle-btn">
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <p className="theme-hint">Tip: click the button and observe the background and text colors.</p>
    </section>
  );
}
