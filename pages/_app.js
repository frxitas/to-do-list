import { Global, ThemeProvider } from "@emotion/react";
import Head from "next/head";
import { Provider } from "react-redux";

import store from "../store/configureStore";

import globalStyles from "../styles/global.styles";

import theme from "../theme";

function CustomApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Head>
          <title>To Do List</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default CustomApp;
