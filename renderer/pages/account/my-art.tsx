import Head from "next/head";

import AccountArtPage from "../../components/containers/account-art-page/AccountArtPage";

export default function MyArt() {
  return (
    <>
      <Head>
        <title>My Art - Macrocosm</title>
      </Head>
      <AccountArtPage />
    </>
  );
}
