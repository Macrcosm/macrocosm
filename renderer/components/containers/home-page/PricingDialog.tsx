import useDiscloser from "../../../hooks/useDiscloser";
import Dialog from "../../shared/dialog/Dialog";
import Tabs from "../../shared/tabs";
import PricingCard from "../shared/PricingCard";

const PricingDialog = () => {
    const { close, open, isOpen } = useDiscloser();

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
                                {
                                    name: "Unlimited Prompt Building",
                                    isAvailable: true,
                                },
                                {
                                    name: "100 Descriptive Prompt Generation",
                                    isAvailable: true,
                                },
                                {
                                    name: "~25 Image Generations",
                                    isAvailable: false,
                                    isDisabled: true,
                                },
                            ]}
                            plan="Free"
                            price={0}
                        />
                        <PricingCard
                            features={[
                                {
                                    name: "5000 SD Credits",
                                    isAvailable: true,
                                },
                                {
                                    name: "Unlimited Prompt Building",
                                    isAvailable: true,
                                },
                                {
                                    name: "No Descriptive Prompt Generation",
                                    isAvailable: true,
                                },
                            ]}
                            plan="Basic"
                            price={15}
                            action="Buy Now"
                            type="monthly"
                        />
                        <PricingCard
                            features={[
                                {
                                    name: "15000 SD Credits",
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
                            action="Buy Now"
                            isBestPlan
                            type="monthly"
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
                            type="monthly"
                            action="Buy Now"
                        />
                    </div>
                    <div className="flex gap-3.5 flex-wrap items-start">
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
                                    name: "~25 Image Generations",
                                    isAvailable: false,
                                    isDisabled: true,
                                },
                            ]}
                            plan="Free"
                            price={0}
                        />
                        <PricingCard
                            features={[
                                {
                                    name: "5000 SD Credits",
                                    isAvailable: true,
                                },
                                {
                                    name: "Unlimited Prompt Building",
                                    isAvailable: true,
                                },
                                {
                                    name: "No Descriptive Prompt Generation",
                                    isAvailable: true,
                                },
                            ]}
                            plan="Basic"
                            price={15 * 12}
                            action="Buy Now"
                            type="yearly"
                        />
                        <PricingCard
                            features={[
                                {
                                    name: "15000 SD Credits",
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
                            action="Buy Now"
                            isBestPlan
                            type="yearly"
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
