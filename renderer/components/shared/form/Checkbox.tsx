import { FC, InputHTMLAttributes } from "react";

import classnames from "../../../utils/classnames";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

const Checkbox: FC<CheckboxProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <input
      type="checkbox"
      className={classnames(
        "h-3.5 w-3.5  outline-1 outline-grey-50 outline-offset-2 checked:bg-none outline-none text-primary border-none bg-transparent form-checkbox",
        className
      )}
      {...rest}
    />
  );
};

export default Checkbox;
