import { FC, HTMLAttributes, ReactElement, ReactNode } from "react";
import classnames from "../../../utils/classnames";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  variant?: "filled" | "outlined" | "link";
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    leftIcon,
    rightIcon,
    variant = "filled",
    ...rest
  } = props;
  return (
    <button
      {...rest}
      className={classnames(
        "flex  justify-center cursor-pointer w-[335px] hover:opacity-70",
        variant === "filled"
          ? "px-5 py-4 rounded-xl ring-1 ring-border bg-black-chip"
          : "",
        className
      )}
    >
      {leftIcon}
      <div className="w-full">{children}</div>
      {rightIcon}
    </button>
  );
};

export default Button;
