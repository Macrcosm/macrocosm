import Head from "next/head";

import UserAboutPage from "../../components/containers/user-about-page/UserAboutPage";

export default function About() {
  return (
    <>
      <Head>
        <title> About - Macrocosm </title>
      </Head>
      <UserAboutPage />
    </>
  );
}
