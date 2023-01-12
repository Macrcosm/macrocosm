import { FC, InputHTMLAttributes } from "react";

import classnames from "../../../utils/classnames";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextInput: FC<TextInputProps> = (props) => {
  const { className, label, ...rest } = props;
  return (
    <div className="w-full">
      <p className="mb-2.5">{label}</p>
      <input
        className={classnames(
          "bg-black-chip/60  border border-border rounded-lg px-5 py-3 w-full placeholder-grey-700",
          className
        )}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
