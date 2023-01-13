import { FC } from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineCheckCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";

import Card from "../../shared/card";
import PrimaryButton from "../../shared/button/PrimaryButton";
import { useRouter } from "next/router";
import { useAuthContext } from "../../../hooks/useContext";

export interface Feature {
  name: string;
  isAvailable: boolean;
  isDisabled?: boolean;
}

interface PricingCardProps {
  plan: string;
  price: number;
  features: Feature[];
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
  const router = useRouter();
  const { authUser } = useAuthContext();

  const onClick = () => {
    if (authUser) {
      router.push({
        pathname: "/checkout",
        query: { pricingPlan: JSON.stringify(props) },
      });
    } else {
      router.push("/login");
    }
  };

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
        <div key={index} className="flex items-start gap-2.5">
          <div>
            {feature.isAvailable ? (
              <AiOutlineCheckCircle size={24} />
            ) : feature.isDisabled ? (
              <AiOutlineMinusCircle size={24} />
            ) : (
              <AiOutlineCloseCircle size={24} />
            )}
          </div>
          <p>{feature.name}</p>
        </div>
      ))}
      {(!authUser || action) && (
        <PrimaryButton
          variant={
            isBestPlan ? "secondary" : isDowngrade ? "tertiary" : "primary"
          }
          className="w-max text-sm"
          onClick={onClick}
        >
          {authUser ? action : "Sign In"}
        </PrimaryButton>
      )}
    </Card>
  );
};

export default PricingCard;
