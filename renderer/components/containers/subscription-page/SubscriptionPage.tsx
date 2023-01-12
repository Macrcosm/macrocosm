import AccountLayout from "../../shared/layout/AccountLayout";
import PricingCard from "../shared/PricingCard";

export default function SubscriptionPage() {
  return (
    <AccountLayout>
      <div className="flex gap-3.5 items-start flex-wrap">
        <PricingCard
          features={[
            "Unlimited Prompt Building",
            "100 Descriptive Prompt Generation",
            "~ 25 Image Generations",
          ]}
          plan="Free"
          price={0}
          type="monthly"
          action="Downgrade"
          isDowngrade
        />
        <PricingCard
          features={[
            "5000 SD Credits*",
            "Unlimited Prompt Building",
            "1000 Descriptive Prompt Generation",
            "~ 5000 Stable Diffusion Default Image Generation",
          ]}
          plan="Basic"
          price={15}
          type="monthly"
          action="Switch to Yearly"
          isSelected
        />
        <PricingCard
          features={[
            "15000 SD Credits*",
            "Unlimited Prompt Building",
            "3000 Descriptive Prompt Generation",
            "~ 15000 Stable Diffusion Default Image Generation",
          ]}
          plan="Premium"
          price={25}
          isBestPlan
          type="monthly"
          action="Upgrade"
        />
        <PricingCard
          features={[
            "Unlimited SD Credits*",
            "Unlimited Prompt Building*",
            "Unlimited Descriptive Prompt Generation",
            "Unlimited Stable Diffusion Default Image Generation",
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
          features={["3000 Descriptive Prompt Generation"]}
          plan="Descriptive Prompt"
          action="Buy Now"
          price={5}
        />
        <PricingCard
          features={[
            "5000 SD Credit",
            "~5000 Default Stable Diffusion Image Generation",
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
            "Unlimited Prompt Building",
            "1000 Descriptive Prompt Generation",
          ]}
          plan="Prompt Basic"
          price={5}
          type="monthly"
          action="Downgrade"
          isDowngrade
        />
        <PricingCard
          features={[
            "Unlimited Prompt Building",
            "Unlimited Descriptive Prompt Generation",
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
