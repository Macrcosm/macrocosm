import Head from "next/head";

import CommunityCreationsPage from "../../../components/containers/community-creations-page/CommunityCreationsPage";

export default function Creations() {
  return (
    <>
      <Head>
        <title>Community Creations - Macrocosm</title>
      </Head>
      <CommunityCreationsPage />
    </>
  );
}
