import "./App.css";
import ToggleHookDemo from "./components/ToggleHookDemo";
import ThemeToggleDemo from "./components/ThemeToggleDemo";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <main className={`app-shell ${theme}`}>
      <ToggleHookDemo />
      <ThemeToggleDemo />
    </main>
  );
}

export default App;
