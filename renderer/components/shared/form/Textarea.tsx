import { FC, TextareaHTMLAttributes } from "react";
import classnames from "../../../utils/classnames";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea: FC<TextareaProps> = (props) => {
  const { className, label, ...rest } = props;
  return (
    <div className="w-full">
      <p className="mb-2.5">{label}</p>
      <textarea
        className={classnames(
          "bg-black-chip/60 border border-border rounded-lg px-5 py-3 text-grey-50 w-full placeholder-grey-700",
          className
        )}
        {...rest}
      />
    </div>
  );
};

export default TextArea;
