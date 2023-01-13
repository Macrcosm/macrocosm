import Head from "next/head";

import CommunityCreationPage from "../../../components/containers/community-creation-page/CommunityCreationPage";

export default function CommunityDetails() {
  return (
    <>
      <Head>
        <title>Creation Details - Macrocosm </title>
      </Head>
      <CommunityCreationPage />
    </>
  );
}
