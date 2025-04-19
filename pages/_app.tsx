import { ThemeProvider } from "@/components/theme-provider";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Crabbio - AI Without Compromising Your Data</title>
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <main className={`${inter.variable} ${poppins.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
