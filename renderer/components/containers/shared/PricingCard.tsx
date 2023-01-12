import { FC } from "react";

import CheckCircleIcon from "../../../icons/CheckCircle";
import Card from "../../shared/card";
import PrimaryButton from "../../shared/button/PrimaryButton";

interface PricingCardProps {
  plan: string;
  price: number;
  features: string[];
  isBestPlan?: boolean;
  type?: "monthly" | "yearly";
  action?: string;
  isDowngrade?: boolean;
  isSelected?: boolean;
}

const PricingCard: FC<PricingCardProps> = (props) => {
  const {
    plan,
    price,
    features,
    isBestPlan,
    type,
    action,
    isDowngrade,
    isSelected,
  } = props;
  return (
    <Card
      className={`flex flex-col gap-2.5 w-72 ${
        isSelected ? "ring-1 ring-primary" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-medium">{plan}</h4>
        <p>
          ${price}
          {plan !== "Free" && type && (type === "monthly" ? "/Month" : "/Year")}
        </p>
      </div>
      {features?.map((feature, index) => (
        <div key={index} className="flex items-center gap-2.5">
          <CheckCircleIcon />
          <p>{feature}</p>
        </div>
      ))}
      {action && (
        <PrimaryButton
          variant={
            isBestPlan ? "secondary" : isDowngrade ? "tertiary" : "primary"
          }
          className="w-max text-sm"
        >
          {action}
        </PrimaryButton>
      )}
    </Card>
  );
};

export default PricingCard;
