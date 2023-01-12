import Link from "../../shared/link";
import PricingCard from "../shared/PricingCard";
import Tabs from "../../shared/tabs";
import PricingLayout from "../../shared/layout/PricingLayout";

export default function PromptPricingPage() {
  return (
    <PricingLayout title="Descriptive Prompt Pricing">
      <Tabs
        tabs={["Monthly", "Yearly"]}
        leftElement={<p className="text-pink">20% Off</p>}
      >
        <div className="w-max mx-auto">
          <div className="flex flex-wrap gap-4 mt-6 justify-center items-start">
            <PricingCard
              features={[
                "Unlimited Prompt Building",
                "100 Descriptive Prompt Generation",
              ]}
              plan="Free"
              price={0}
              action="Sign in"
              type="monthly"
            />
            <PricingCard
              features={[
                "5000 SCredits*",
                "2000 Descriptive Prompt Generation",
              ]}
              plan="Prompt Basic"
              price={15}
              type="monthly"
              action="Buy Now"
            />
            <PricingCard
              isBestPlan
              features={[
                "15000 SCredits*",
                "Unlimited Descriptive Prompt Generation",
              ]}
              plan="Prompt Pro"
              price={25}
              type="monthly"
              action="Buy Now"
            />
          </div>
        </div>
        <div className="w-max mx-auto">
          <div className="flex flex-wrap gap-4 mt-6 justify-center items-start">
            <PricingCard
              features={[
                "Unlimited Prompt Building",
                "100 Descriptive Prompt Generation",
              ]}
              plan="Free"
              price={0}
              action="Sign in"
              type="yearly"
            />
            <PricingCard
              features={[
                "5000 SCredits*",
                "2000 Descriptive Prompt Generation",
              ]}
              plan="Prompt Basic"
              price={5 * 12}
              type="yearly"
              action="Buy Now"
            />
            <PricingCard
              isBestPlan
              features={[
                "15000 SCredits*",
                "Unlimited Descriptive Prompt Generation",
              ]}
              plan="Prompt Pro"
              price={10 * 12}
              type="yearly"
              action="Buy Now"
            />
          </div>
        </div>
      </Tabs>
      <div className="text-center mt-10">
        <Link href="/pricing">Back to Full Pricing</Link>
      </div>
    </PricingLayout>
  );
}
