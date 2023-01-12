import { FC } from "react";
import classnames from "../../../utils/classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const BillButton: FC<ButtonProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <button
      {...rest}
      className={classnames(
        "rounded-full px-5 py-2.5 hover:opacity-70 text-sm font-medium bg-black",
        className
      )}
    />
  );
};

export default BillButton;
