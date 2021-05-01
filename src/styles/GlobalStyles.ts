import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  html, body {
    width: 100%;
    height: 100%;

    margin: 0;

    font-family: 'Noto Sans KR', sans-serif;
  }

  a {
    text-decoration: none;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
