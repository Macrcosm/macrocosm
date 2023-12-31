import { FC } from "react";
import classnames from "../../../utils/classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "bg";
}

const PrimaryButton: FC<ButtonProps> = (props) => {
  const { variant, children, className, ...rest } = props;

  return (
    <button
      {...rest}
      className={classnames(
        "rounded-xl px-5 py-3 hover:opacity-70 font-medium",
        variant === "primary"
          ? "bg-primary"
          : variant === "secondary"
          ? "bg-pink"
          : variant === "tertiary"
          ? "bg-bg"
          : "bg-black-chip",
        className
      )}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
