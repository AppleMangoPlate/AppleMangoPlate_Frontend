import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "../../axiosConfig";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 1000 * 60 * 10,
      cacheTime: 1000 * 60 * 15,
      retry: 1,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
