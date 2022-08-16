import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../src/components/Header";
import React, { useEffect, useState } from "react";
import LoginModal from "../src/modal/loginModal";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Head from "next/head";
import router, { useRouter } from "next/router";
import axios from "axios";
import { access } from "fs";
import { persistQueryClient } from "react-query/types/persistQueryClient-experimental";
import { PortalProvider } from "../src/contexts/PortalProvider";
import Banner from "../src/components/Banner";
import Footer from "../src/components/Footer";
import { ModalProvider } from "../src/contexts/ModalProvider";
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
