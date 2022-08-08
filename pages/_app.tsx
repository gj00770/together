import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../src/components/header";
import React, { useEffect, useState } from "react";
import LoginModal from "../src/modal/loginModal";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Head from "next/head";
import router, { useRouter } from "next/router";
import axios from "axios";
import { access } from "fs";
import { persistQueryClient } from "react-query/types/persistQueryClient-experimental";
import { PortalProvider } from "../src/contexts/PortalProvider";
import Banner from "../src/components/banner";
import Footer from "../src/components/Footer";
//  localStorage.setItem("accessToken", "");
// window.getRedirectResult

function MyApp({ Component, pageProps }: AppProps) {
  //
  //
  //
  //  const [queryClient] = useState(() => new QueryClient());
  const queryClient = new QueryClient();

  //queryClient.setQueryData("username", "네이버");
  // const { data: username } = useQuery("username", {
  //   initialData: "",
  //   staleTime: Infinity,
  // });
  //console.log(username);
  const [islogin, setIsLogin] = useState(true);
  const login = () => {
    setIsLogin(!islogin);
    console.log(login);
  };

  return (
    <>
      <Head>
        <script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"></script>
      </Head>
      <PortalProvider>
        <QueryClientProvider client={queryClient}>
          <div>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
        </QueryClientProvider>
      </PortalProvider>
    </>
  );
}

export default MyApp;
