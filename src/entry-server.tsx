import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import Router from "./routes/Routes";
import { StaticRouter } from "react-router";

export function render(_url: string) {
  console.log("_url is " + _url);
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={_url}>
        <Router />
      </StaticRouter>
    </StrictMode>,
  );
  return { html };
}
