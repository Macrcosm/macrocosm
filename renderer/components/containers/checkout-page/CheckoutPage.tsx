import { useState, useEffect, useMemo } from "react";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Header from "../../shared/header/Header";
import PrimaryButton from "../../shared/button/PrimaryButton";
import Card from "../../shared/card";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { useRouter } from "next/router";
import { Feature } from "../shared/PricingCard";
import capitalize from "../../../utils/capitalize";
import BackButton from "../../shared/button/BackButton";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUB_KEY!);
const options = {
  appearance: {
    theme: "night",
    variables: {
      colorPrimary: "#1855f4",
      colorBackground: "rgb(36, 36, 36)",
      borderRadius: "8px",
      spacingTab: "4px",
    },
    rules: {
      ".Input": {
        borderWidth: "0",
      },
    },
  },
} as const;

export default function CheckoutPage({}) {
  const router = useRouter();
  const [clientSecret, setClientSecret] = useState("");

  const pricingPlan = useMemo(() => {
    if (router.query.pricingPlan) {
      return JSON.parse(router.query.pricingPlan as string);
    }
  }, [router.query]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetch("/api/create-payment-intent")
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  return (
    <div className="h-full flex flex-col">
      <Header transparent />
      <div className="container mt-14 flex-1 flex">
        <BackButton />
        {clientSecret && (
          <div className="flex gap-32 h-full items-center justify-center flex-1">
            <Card className="w-72 space-y-2.5 ring-1 ring-primary text-grey-400">
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium text-grey-50">
                  {pricingPlan?.plan}
                </p>
                <p>
                  ${pricingPlan?.price}/{capitalize(pricingPlan?.type)}
                </p>
              </div>
              {pricingPlan?.features?.map((feature: Feature, index: number) => (
                <div key={index} className="flex items-start gap-2.5">
                  <div>
                    {feature?.isAvailable ? (
                      <AiOutlineCheckCircle size={24} />
                    ) : feature?.isDisabled ? (
                      <AiOutlineMinusCircle size={24} />
                    ) : (
                      <AiOutlineCloseCircle size={24} />
                    )}
                  </div>
                  <p>{feature?.name}</p>
                </div>
              ))}
            </Card>

            <div>
              <Elements
                stripe={stripePromise}
                options={{
                  clientSecret,
                  ...options,
                }}
              >
                <div className="bg-black px-12 py-8 rounded-2xl w-[546px]">
                  <form onSubmit={onSubmit}>
                    <label className="mb-5 block">
                      <p className="mb-1 text-sm">Email</p>
                      <input
                        placeholder="Enter your email"
                        className="bg-black-chip rounded-lg py-2.5 px-3 w-full placeholder-grey-700 focus:sripe-shadow outline-none"
                      />
                    </label>
                    <PaymentElement />
                    <PrimaryButton variant="primary" className="mt-5 w-full">
                      Pay now
                    </PrimaryButton>
                  </form>
                </div>
              </Elements>
              <p className="text-lg text-center mt-5">Powered By Stripe</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
