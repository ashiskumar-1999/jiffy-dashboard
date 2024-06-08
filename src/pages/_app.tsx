import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TabProvider } from "@/components/Tab";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TabProvider>
      <Component {...pageProps} />
    </TabProvider>
  );
}
