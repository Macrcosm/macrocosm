import Head from "next/head";

import CommunityUserCreationPage from "../../../components/containers/community-user-creations-page/CommunityUserCreationsPage";

export default function Creations() {
  return (
    <>
      <Head>
        <title>Creations - Macrocosm</title>
      </Head>
      <CommunityUserCreationPage />
    </>
  );
}
