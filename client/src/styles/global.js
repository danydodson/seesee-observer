import { createGlobalStyle } from 'styled-components'
import { primaryColor1 } from './colors'
// import { secondaryColor1 } from './colors'

const GlobalStyle = createGlobalStyle`
  * {}
  
  html {
    line-height: 1.15; 
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  figure,
  article {
    height: 100%;
    width: 100%;
  }

  article,
  aside,
  footer,
  header,
  nav,
  section {
    /* height: 100%; */
    /* width: 100%; */
    display: block;
  }

  figure,
  figcaption,
  main { /* 1 */
    display: block;
  }

  figure {
    margin: 12px 12px;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  a {
    background-color: transparent; /* 1 */
    -webkit-text-decoration-skip: objects; /* 2 */
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  img {
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  /**
   * 1. Prevent a WebKit bug where (2) destroys native audio and video
   *    controls in Android 4.
   * 2. Correct the inability to style clickable types in iOS and Safari.
   */

  button,
  html [type="button"], /* 1 */
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button; /* 2 */
  }

  /**
   * Remove the inner border and padding in Firefox.
   */

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
   * Restore the focus styles unset by the previous rule.
   */

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  progress {
    display: inline-block; /* 1 */
    vertical-align: baseline; /* 2 */
  }

  /**
   * Remove the default vertical scrollbar in IE.
   */

  textarea {
    overflow: auto;
  }

  /**
   * 1. Add the correct box sizing in IE 10-.
   * 2. Remove the padding in IE 10-.
   */

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
   * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
   */

  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to inherit in Safari.
   */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  [hidden] {
    display: none;
  }

  h1, h2, h3, h4, h5, h6, p, ul, ol, li, button, input, strong, small, em {
      margin: 0;
      padding: 0;
      font-size: inherit;
      font-weight: inherit;
      font-style: inherit;
  }

  b {
      font-weight: inherit;
  }

  i {
      font-style: inherit;
  }

  ul, ol, li {
      display: block;
  }

  a {
      text-decoration: none;
      color: inherit;
  }

  button, input, textarea {
      border: none;
      background: none;
      outline: none;
  }

  body {
      font-family: Montserrat, San Francisco,Helvetica Neue,Helvetica,Ubuntu,Roboto,Noto,Segoe UI,Arial,sans-serif;
      /* font-family: -apple-system,BlinkMacSystemFont,San Francisco,Helvetica Neue,Helvetica,Ubuntu,Roboto,Noto,Segoe UI,Arial,sans-serif; */
      font-size: 15px;
      font-weight: 400;
      line-height: 1.6;
      color: ${primaryColor1};
  }

  html, body {
      height: 100%;
  }

  img {
      /* height: 100%; */
      /* width: 100%; */
      max-width: 100%;
  }

  *, :before, :after {
      margin:0;
      box-sizing: border-box;
  }

  /* center component in app like doLogIn */
  /* :global(#app) {
      position: relative;
      height: 100%;
  } */

`

export default GlobalStyle