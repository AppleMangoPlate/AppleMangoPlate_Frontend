import Layout from "@/components/Layout/layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          {/* <Layout> */}
          <Component {...pageProps} />
          {/* </Layout> */}
        </QueryClientProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}
