import { PropsWithChildren } from "react";
import Head from "next/head";
import { Navbar } from "../Navbar";

interface Props {
  title?: string;
}

export const Layout = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{title || "POKEAPPI"}</title>
        <meta name="description" content="Pokemon App" />
        <meta name="author" content="armandev" />
      </Head>
      <Navbar />
      <h1>valee</h1>
      <main>{children}</main>
    </>
  );
};
