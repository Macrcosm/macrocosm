import Head from "next/head";

import CheckoutPage from "../components/containers/checkout-page/CheckoutPage";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Checkout - Macrocosm </title>
      </Head>
      <CheckoutPage />
    </>
  );
}
