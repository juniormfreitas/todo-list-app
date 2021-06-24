import { StrictMode as ReactStrictMode } from "react";
import { render } from "react-dom";
import App from "./App";

render(
  <ReactStrictMode>
    <App />
  </ReactStrictMode>,
  document.getElementById("root")
);
