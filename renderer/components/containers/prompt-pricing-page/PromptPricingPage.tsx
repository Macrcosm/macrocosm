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
                {
                  name: "Unlimited Prompt Building",
                  isAvailable: true,
                },
                {
                  name: "100 Descriptive Prompt Generation",
                  isAvailable: true,
                },
              ]}
              plan="Free"
              price={0}
              type="monthly"
            />
            <PricingCard
              features={[
                {
                  name: "5000 SCredits",
                  isAvailable: true,
                },
                {
                  name: "2000 Descriptive Prompt Generation",
                  isAvailable: true,
                },
              ]}
              plan="Prompt Basic"
              price={15}
              type="monthly"
              action="Buy Now"
            />
            <PricingCard
              isBestPlan
              features={[
                {
                  name: "15000 SCredits",
                  isAvailable: true,
                },
                {
                  name: "Unlimited Descriptive Prompt Generation",
                  isAvailable: true,
                },
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
                {
                  name: "Unlimited Prompt Building",
                  isAvailable: true,
                },
                {
                  name: "100 Descriptive Prompt Generation",
                  isAvailable: true,
                },
              ]}
              plan="Free"
              price={0}
              type="yearly"
            />
            <PricingCard
              features={[
                {
                  name: "5000 SCredits",
                  isAvailable: true,
                },
                {
                  name: "2000 Descriptive Prompt Generation",
                  isAvailable: true,
                },
              ]}
              plan="Prompt Basic"
              price={5 * 12}
              type="yearly"
              action="Buy Now"
            />
            <PricingCard
              isBestPlan
              features={[
                {
                  name: "15000 SCredits",
                  isAvailable: true,
                },
                {
                  name: "Unlimited Descriptive Prompt Generation",
                  isAvailable: true,
                },
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
