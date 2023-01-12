import useDiscloser from "../../../hooks/useDiscloser";
import Dialog from "../../shared/dialog/Dialog";
import Tabs from "../../shared/tabs";
import PricingCard from "../shared/PricingCard";

const PricingDialog = () => {
  const { close, open, isOpen } = useDiscloser(false);

  return (
    <Dialog open={isOpen} onClose={close}>
      <div className="flex flex-col gap-6 items-center">
        <p className="text-title font-medium">Oops!!</p>
        <p className="max-w-[300px] text-grey-700 text-center">
          You have exhausted your credits. Purchase a plan to keep dreaming.
        </p>
        <Tabs
          tabs={["Monthly", "Yearly"]}
          leftElement={<p className="text-pink">20% Off</p>}
        >
          <div className="flex gap-3.5 flex-wrap items-start">
            <PricingCard
              features={[
                "Unlimited Prompt Building",
                "100 Descriptive Prompt Generation",
                "~25 Image Generations",
              ]}
              plan="Free"
              price={0}
            />
            <PricingCard
              features={[
                "5000 SD Credits",
                "Unlimited Prompt Building",
                "1000 Descriptive Prompt Generation",
                "5000 Stable Diffusion Default Image Generation",
              ]}
              plan="Basic"
              price={15}
              action="Buy Now"
              type="monthly"
            />
            <PricingCard
              features={[
                "15000 SD Credits",
                "Unlimited Prompt Building",
                "3000 Descriptive Prompt Generation",
                "15000 Stable Diffusion Default Generation",
              ]}
              plan="Premium"
              price={25}
              action="Buy Now"
              isBestPlan
              type="monthly"
            />
            <PricingCard
              features={[
                "Unlimited SD Credits*",
                "Unlimited Prompt Building",
                "Unlimited Descriptive Prompt Generation",
                "Unlimited Stable Diffusion Default Image Generation",
              ]}
              plan="Pro"
              price={50}
              type="monthly"
              action="Buy Now"
            />
          </div>
          <div className="flex gap-3.5 flex-wrap items-start">
            <PricingCard
              features={[
                "Unlimited Prompt Building",
                "100 Descriptive Prompt Generation",
                "~25 Image Generations",
              ]}
              plan="Free"
              price={0}
            />
            <PricingCard
              features={[
                "5000 SD Credits",
                "Unlimited Prompt Building",
                "1000 Descriptive Prompt Generation",
                "5000 Stable Diffusion Default Image Generation",
              ]}
              plan="Basic"
              price={15 * 12}
              action="Buy Now"
              type="yearly"
            />
            <PricingCard
              features={[
                "15000 SD Credits",
                "Unlimited Prompt Building",
                "3000 Descriptive Prompt Generation",
                "15000 Stable Diffusion Default Generation",
              ]}
              plan="Premium"
              price={25 * 12}
              action="Buy Now"
              isBestPlan
              type="yearly"
            />
            <PricingCard
              features={[
                "Unlimited SD Credits*",
                "Unlimited Prompt Building",
                "Unlimited Descriptive Prompt Generation",
                "Unlimited Stable Diffusion Default Image Generation",
              ]}
              plan="Pro"
              price={50 * 12}
              type="yearly"
              action="Buy Now"
            />
          </div>
        </Tabs>
      </div>
    </Dialog>
  );
};

export default PricingDialog;
