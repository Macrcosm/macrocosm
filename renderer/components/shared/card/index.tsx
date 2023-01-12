import { HTMLAttributes, ReactNode } from "react";

import classnames from "../../../utils/classnames";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = (props: CardProps) => {
  const { children, className, ...rest } = props;
  return (
    <div {...rest} className={classnames("bg-black rounded-xl p-5", className)}>
      {children}
    </div>
  );
};

export default Card;
