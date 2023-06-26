"use client";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const { user } = pageProps;

  useEffect(() => {
    import("preline");
  }, []);

  return (
    <UserProvider user={user}>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default App;
