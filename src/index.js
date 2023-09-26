import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/react";

import App from "./App";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@400;700&display=swap");
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  input,
  textarea {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }

  body {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 32px;
    background: linear-gradient(
      180deg,
      hsla(343, 78%, 89%, 1) 0%,
      hsla(0, 0%, 60%, 1) 100%
    );
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Global styles={globalStyles} />
    <App />
  </StrictMode>,
  rootElement
);
