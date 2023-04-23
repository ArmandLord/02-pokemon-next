import { ReactElement } from "react";
import { Layout } from "@/components/layouts/Layout";

export default function Home() {
  return (
    <>
      <h1>Hola mumas!</h1>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
