import { FC, PropsWithChildren } from "react";

import Header from "../header/Header";

interface PricingLayoutProps {
  title: string;
}

const PricingLayout: FC<PropsWithChildren<PricingLayoutProps>> = (props) => {
  const { title, children } = props;
  return (
    <div className="min-h-screen">
      <Header transparent />
      <div className="px-10 py-6">
        <h4 className="text-2xl font-medium mb-2.5 text-center mt-20">
          {title}
        </h4>
        {children}
      </div>
    </div>
  );
};

export default PricingLayout;
