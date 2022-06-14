import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../src/components/header";
import React, { useState } from "react";
import Login from "../src/modal/login";

function MyApp({ Component, pageProps }: AppProps) {
  const [islogin, setIsLogin] = useState(true);
  const login = () => {
    setIsLogin(!islogin);
    console.log(login);
  };

  return (
    <div>
      {islogin ? <Login login={login} /> : null}

      <Header login={login} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
