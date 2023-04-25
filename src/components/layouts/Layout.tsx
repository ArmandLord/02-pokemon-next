import { PropsWithChildren } from "react";
import Head from "next/head";
import { Navbar } from "../Navbar";

interface Props {
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{title || "POKEAPPI"}</title>
        <meta name="description" content="Pokemon App" />
        <meta name="author" content="armandev" />
        <meta
          property="og:title"
          content={`Información sobre ${title || "POKEAPPI"}`}
        />
        <meta
          property="og:description"
          content={`Información sobre ${title || "POKEAPPI"}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main className="p-10">{children}</main>
    </>
  );
};
