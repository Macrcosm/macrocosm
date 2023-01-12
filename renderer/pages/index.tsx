import Head from "next/head";

import HomePage from "../components/containers/home-page/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Macrocosm</title>
      </Head>
      <HomePage />
    </>
  );
}
