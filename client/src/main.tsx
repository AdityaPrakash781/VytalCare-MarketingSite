import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@/components/theme-provider";
import { ColorBlindProvider } from "@/components/color-blind-provider";

createRoot(document.getElementById("root")!).render(
    <ThemeProvider defaultTheme="system" storageKey="vytal-theme">
        <ColorBlindProvider>
            <App />
        </ColorBlindProvider>
    </ThemeProvider>
);
