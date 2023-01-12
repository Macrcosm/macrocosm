import Head from "next/head";

import CommunityProfilePage from "../../../components/containers/community-profile-page/CommunityProfilePage";

export default function CommunityProfile() {
  return (
    <>
      <Head>
        <title> Community Profile - Macrocosm </title>
      </Head>
      <CommunityProfilePage />
    </>
  );
}
