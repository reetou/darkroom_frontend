import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { createGlobalStyle } from "styled-components";
import { colors, theme } from "../theme";

const GlobalStyles = createGlobalStyle<{
  backgroundColor: string;
  background: string;
}>`
body {
  width: 100%;
  height: 100%;
  font-size: 16px;
  padding: 0;
  margin: 0;
  font-family: ${theme.fontFamily};
  /* background: ${({ background }) => background}; */
}

html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: ${theme.sidebar.backgroundColor};
}

a {
    color: inherit;
    text-decoration: none;
}

h1 {
  color: ${colors.primary};
}

* {
    box-sizing: border-box;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyles
        backgroundColor="black"
        background="black"
      />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
