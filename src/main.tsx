import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Hide critical hero placeholder once React renders
const criticalHero = document.getElementById("critical-hero");
if (criticalHero) {
  criticalHero.style.display = "none";
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
