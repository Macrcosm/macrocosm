import Head from "next/head";
import AccountPage from "../../components/containers/account-page/AccountPage";

export default function Account() {
  return (
    <>
      <Head>
        <title>Account - Macrocosm </title>
      </Head>
      <AccountPage />
    </>
  );
}
