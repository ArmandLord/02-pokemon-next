import { FC, PropsWithChildren } from "react";
import Head from "next/head";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <meta name="description" content="Pokemon App" />
        <meta name="author" content="armandev" />
      </Head>

      <main>{children}</main>
    </>
  );
};
