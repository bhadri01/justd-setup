import "./styles/index.css";

import App from "./App.tsx";
import { StrictMode } from "react";
import { ThemeProvider } from "./components/theme/theme-provider.tsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
