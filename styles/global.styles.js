import { css } from "@emotion/react";

import normalizeStyles from "./normalize.styles";
import { generateCSSVarsFromTheme } from "../theme";

import theme from "../theme";

const globalStyles = css`
  ${normalizeStyles}

  :root {
    ${generateCSSVarsFromTheme(theme)}
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  html {
    font-size: 10px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    min-height: 100%;
    text-rendering: optimizelegibility;
    width: 100%;
  }
`;

export default globalStyles;
