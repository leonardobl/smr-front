import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  color: ${(props) => props.theme.colors.black}
}

button {
  cursor: pointer;
}


html, body, #root {
  min-height: 100dvh;
  width: 100%;
  font-family: "DM Sans", sans-serif;
}



`;
