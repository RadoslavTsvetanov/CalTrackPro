import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Layout from "~/components/layout";
import "~/styles/globals.css";
import { CookiesProvider } from "react-cookie";
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    
    <SessionProvider session={session}>
      <CookiesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </CookiesProvider>
    </SessionProvider>
    
  );
};

export default MyApp;