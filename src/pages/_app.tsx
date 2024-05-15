import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LogProvider } from "@/context/LogContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LogProvider>
      <Component {...pageProps} />
    </LogProvider>
  );
}
