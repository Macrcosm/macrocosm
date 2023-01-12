import Head from "next/head";

import AccountAboutPage from "../../components/containers/account-about-page/AccountAboutPage";

export default function About() {
  return (
    <>
      <Head>
        <title> Account About - Macrocosm </title>
      </Head>
      <AccountAboutPage />
    </>
  );
}
