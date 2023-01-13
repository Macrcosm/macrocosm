import Head from "next/head";

import UserArtPage from "../../components/containers/user-art-page/UserArtPage";

export default function MyArt() {
  return (
    <>
      <Head>
        <title>My Art - Macrocosm</title>
      </Head>
      <UserArtPage />
    </>
  );
}
