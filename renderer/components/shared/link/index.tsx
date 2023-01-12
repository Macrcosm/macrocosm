import { ComponentProps, FC } from "react";
import NextLink from "next/link";

const Link: FC<ComponentProps<typeof NextLink>> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <NextLink {...rest} className={className}>
      {children}
    </NextLink>
  );
};

export default Link;
