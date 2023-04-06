import Head from "next/head";
import Image from "next/image";
import { Inter, Roboto_Mono } from "next/font/google";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import MarqueeAnimation from "./MarqueeAnimation";
import Carousel from "./Carousel";
import Contact from "./Contact";
import DarkThemeSwitch from "./DarkThemeSwitch";
import ScrollToTopButton from "./ScrollToTopButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${inter.variable} font-sans`}>
        <div className="bg-renk_20">
          <NavBar />
          <DarkThemeSwitch />
          <Welcome />
          <MarqueeAnimation />
          <Carousel />
          <Contact />
         <ScrollToTopButton />
        </div>
      </main>
    </>
  );
}
