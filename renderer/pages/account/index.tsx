import Head from "next/head";
import UserAccountPage from "../../components/containers/user-account-page/UserAccountPage";

export default function Account() {
  return (
    <>
      <Head>
        <title>Account - Macrocosm </title>
      </Head>
      <UserAccountPage />
    </>
  );
}
