import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: ${({ theme }) => theme.colors.white};
    --red: ${({ theme }) => theme.colors.red};
    --black: ${({ theme }) => theme.colors.black};
    --gray: ${({ theme }) => theme.colors.gray};
    --darkGray: ${({ theme }) => theme.colors.darkGray};
  }
  
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

export default GlobalStyle;
