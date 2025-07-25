import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import Router from "./routes/Routes";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";

export function render(_url: string) {
  console.log("_url is " + _url);
  const helmetContext: any = {};
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={_url}>
          <Router />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  );

  const { helmet } = helmetContext;
  return {
    html,
    head: `
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${helmet.script.toString()}
    `,
  };
}
