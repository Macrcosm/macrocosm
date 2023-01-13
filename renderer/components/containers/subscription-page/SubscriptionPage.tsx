import AccountLayout from "../../shared/layout/UserAccountLayout";
import PricingCard from "../shared/PricingCard";

export default function SubscriptionPage() {
  return (
    <AccountLayout>
      <div className="flex gap-3.5 items-start flex-wrap">
        <PricingCard
          features={[
            {
              name: "Unlimited Prompt Building",
              isAvailable: true,
            },
            {
              name: "100 Descriptive Prompt Generation",
              isAvailable: true,
            },
            {
              name: "~ 25 Image Generations",
              isAvailable: false,
              isDisabled: true,
            },
          ]}
          plan="Free"
          price={0}
          type="monthly"
          action="Downgrade"
          isDowngrade
        />
        <PricingCard
          features={[
            {
              name: "5000 SCredits",
              isAvailable: true,
            },
            {
              name: "Unlimited Prompt Building",
              isAvailable: true,
            },
            {
              name: "No Descriptive Prompt Generation",
              isAvailable: false,
            },
          ]}
          plan="Basic"
          price={15}
          type="monthly"
          action="Switch to Yearly"
          isSelected
        />
        <PricingCard
          features={[
            {
              name: "15000 Default Image Credits",
              isAvailable: true,
            },
            {
              name: "Unlimited Prompt Building",
              isAvailable: true,
            },
            {
              name: "3000 Descriptive Prompt Generation",
              isAvailable: true,
            },
          ]}
          plan="Premium"
          price={25}
          isBestPlan
          type="monthly"
          action="Upgrade"
        />
        <PricingCard
          features={[
            {
              name: "Unlimited SD Credits",
              isAvailable: true,
            },
            {
              name: "Unlimited Prompt Building",
              isAvailable: true,
            },
            {
              name: "Unlimited Descriptive Prompt Generation",
              isAvailable: true,
            },
          ]}
          plan="Pro"
          price={50}
          action="Upgrade"
          type="monthly"
        />
      </div>
      <p className="mt-24 mb-3.5">Top Ups</p>
      <div className="flex gap-3.5 items-start flex-wrap">
        <PricingCard
          features={[
            {
              name: "3000 Descriptive Prompt Generation",
              isAvailable: true,
            },
          ]}
          plan="Descriptive Prompt"
          action="Buy Now"
          price={5}
        />
        <PricingCard
          features={[
            {
              name: "5000 SD Credit",
              isAvailable: true,
            },
            {
              name: "~5000 Default Stable Diffusion Image Generation",
              isAvailable: true,
            },
          ]}
          plan="Stable Diffusion"
          action="Buy Now"
          price={10}
        />
      </div>
      <p className="mt-24 mb-3.5">Descriptive Prompt</p>
      <div className="flex gap-3.5 items-start flex-wrap pb-10">
        <PricingCard
          features={[
            {
              name: "Unlimited Prompt Building",
              isAvailable: true,
            },
            {
              name: "1000 Descriptive Prompt Generation",
              isAvailable: true,
            },
          ]}
          plan="Prompt Basic"
          price={5}
          type="monthly"
          action="Downgrade"
          isDowngrade
        />
        <PricingCard
          features={[
            {
              name: "Unlimited Prompt Building",
              isAvailable: true,
            },
            {
              name: "Unlimited Descriptive Prompt Generation",
              isAvailable: true,
            },
          ]}
          plan="Prompt Pro"
          price={10}
          type="monthly"
          action="Downgrade"
          isDowngrade
        />
      </div>
    </AccountLayout>
  );
}
