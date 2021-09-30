import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Montserrat";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    outline: none;
  }

  html {
    height: 100%;
  }

  body {
    background-color: #161616;
    height: 100%;
  }
`;

const theme = {
  colors: {
    primary: "#7A326F",
    secondary: "#F87C45",
    subtitles: "#727272",
    secondaryBlack: "#222222",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
