import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "../src/components/Footer";
import { ModalProvider } from "../src/contexts/ModalProvider";
import { PortalProvider } from "../src/contexts/PortalProvider";
import Header from "../src/components/Header";
import "../styles/globals.css";
import Script from "next/script";
//  localStorage.setItem("accessToken", "");
// window.getRedirectResult

function MyApp({ Component, pageProps }: AppProps) {
  //
  //
  //
  //  const [queryClient] = useState(() => new QueryClient());
  const queryClient = new QueryClient();

  const [islogin, setIsLogin] = useState(true);
  const login = () => {
    setIsLogin(!islogin);
  };

  return (
    <>
      <Head>
        <script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"></script>
      </Head>
      <PortalProvider>
        <QueryClientProvider client={queryClient}>
          <ModalProvider>
            <div>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </div>
          </ModalProvider>
        </QueryClientProvider>
      </PortalProvider>
    </>
  );
}

export default MyApp;
