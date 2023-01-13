import Link from "../../shared/link";
import PricingCard from "../shared/PricingCard";
import Tabs from "../../shared/tabs";
import PricingLayout from "../../shared/layout/PricingLayout";

export default function PricingPage() {
  return (
    <PricingLayout title="Pricing">
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
                {
                  name: "~ 25 Image Generations",
                  isAvailable: false,
                  isDisabled: true,
                },
              ]}
              plan="Free"
              price={0}
              type="monthly"
            />
            <PricingCard
              features={[
                {
                  name: "5000 SCredits*",
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
              action="Buy Now"
            />
            <PricingCard
              isBestPlan
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
              type="monthly"
              action="Buy Now"
            />
            <PricingCard
              features={[
                {
                  name: "Unlimited Default Image Credits",
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
              type="monthly"
              action="Buy Now"
            />
          </div>
          <div className="flex flex-col mt-16 gap-4 text-grey-700 max-w-md">
            <p>*SCredits are stable diffusion image generation credits</p>
            <p>
              *Actual number of image generated will depends on the settings and
              quality of image generated.
              <Link href="#"> See Full List</Link>
            </p>
            <p>
              Only want to buy descriptive prompts?
              <Link href="/prompt-pricing"> Learn More</Link>
            </p>
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
                {
                  name: "~ 25 Image Generations",
                  isAvailable: false,
                  isDisabled: true,
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
                  name: "Unlimited Prompt Building",
                  isAvailable: true,
                },
                {
                  name: "No Descriptive Prompt Generation",
                  isAvailable: false,
                  isDisabled: false,
                },
              ]}
              plan="Basic"
              price={15 * 12}
              type="yearly"
              action="Buy Now"
            />
            <PricingCard
              isBestPlan
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
              price={25 * 12}
              type="yearly"
              action="Buy Now"
            />
            <PricingCard
              features={[
                {
                  name: "Unlimited Default Image Credits",
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
              price={50 * 12}
              type="yearly"
              action="Buy Now"
            />
          </div>
          <div className="flex flex-col mt-16 gap-4 text-grey-700 max-w-md">
            <p>*SCredits are stable diffusion image generation credits</p>
            <p>
              *Actual number of image generated will depends on the settings and
              quality of image generated.
              <Link href="#"> See Full List</Link>
            </p>
            <p>
              Only want to buy descriptive prompts?
              <Link href="/prompt-pricing"> Learn More</Link>
            </p>
          </div>
        </div>
      </Tabs>
    </PricingLayout>
  );
}
