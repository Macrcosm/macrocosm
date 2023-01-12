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
                "Unlimited Prompt Building",
                "100 Descriptive Prompt Generation",
                "~ 25 Image Generations",
              ]}
              plan="Free"
              price={0}
              action="Sign in"
              type="monthly"
            />
            <PricingCard
              features={[
                "5000 SCredits*",
                "Unlimited Prompt Building",
                "1000 Descriptive Prompt Generation",
                "~ 5000 Stable Diffusion Default Image Generation",
              ]}
              plan="Basic"
              price={15}
              type="monthly"
              action="Buy Now"
            />
            <PricingCard
              isBestPlan
              features={[
                "15000 SCredits*",
                "Unlimited Prompt Building",
                "3000 Descriptive Prompt Generation",
                "~ 15000 Stable Diffusion Default Image Generation",
              ]}
              plan="Premium"
              price={25}
              type="monthly"
              action="Buy Now"
            />
            <PricingCard
              features={[
                "Unlimited SCredits*",
                "Unlimited Prompt Building*",
                "Unlimited Descriptive Prompt Generation",
                "Unlimited Stable Diffusion Default Image Generation",
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
              <Link href="prompt-pricing"> Learn More</Link>
            </p>
          </div>
        </div>
        <div className="w-max mx-auto">
          <div className="flex flex-wrap gap-4 mt-6 justify-center items-start">
            <PricingCard
              features={[
                "Unlimited Prompt Building",
                "100 Descriptive Prompt Generation",
                "~ 25 Image Generations",
              ]}
              plan="Free"
              price={0}
              type="yearly"
              action={"Sign in"}
            />
            <PricingCard
              features={[
                "5000 SCredits*",
                "Unlimited Prompt Building",
                "1000 Descriptive Prompt Generation",
                "~ 5000 Stable Diffusion Default Image Generation",
              ]}
              plan="Basic"
              price={15 * 12}
              type="yearly"
              action="Buy Now"
            />
            <PricingCard
              isBestPlan
              features={[
                "15000 SCredits*",
                "Unlimited Prompt Building",
                "3000 Descriptive Prompt Generation",
                "~ 15000 Stable Diffusion Default Image Generation",
              ]}
              plan="Premium"
              price={25 * 12}
              type="yearly"
              action="Buy Now"
            />
            <PricingCard
              features={[
                "Unlimited SCredits*",
                "Unlimited Prompt Building*",
                "Unlimited Descriptive Prompt Generation",
                "Unlimited Stable Diffusion Default Image Generation",
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
              <Link href="#"> Learn More</Link>
            </p>
          </div>
        </div>
      </Tabs>
    </PricingLayout>
  );
}
