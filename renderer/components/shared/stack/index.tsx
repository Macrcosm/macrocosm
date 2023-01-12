import { HTMLAttributes, ReactNode } from "react";

import classnames from "../../../utils/classnames";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Stack = ({ children, className, ...props }: StackProps) => {
  return (
    <div {...props} className={classnames("flex ", className)}>
      {children}
    </div>
  );
};

export default Stack;
