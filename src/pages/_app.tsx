import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Partials/Navigation/Navbar";
import Footer from "@/components/Partials/Navigation/Footer";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  //Session provider for next/auth to handle sessions
  //Query client for ReactQuery
  //!These are both contexts
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </SessionProvider>
      </QueryClientProvider>
    </main>
  );
}
