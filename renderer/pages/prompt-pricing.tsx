import Head from "next/head";

import PromptPricingPage from "../components/containers/prompt-pricing-page/PromptPricingPage";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Prompt Pricing - Macrocosm</title>
      </Head>
      <PromptPricingPage />
    </>
  );
}
