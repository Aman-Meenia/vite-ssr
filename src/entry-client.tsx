import "./index.css";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import Router from "./routes/Routes";
import { HelmetProvider } from "react-helmet-async";

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
