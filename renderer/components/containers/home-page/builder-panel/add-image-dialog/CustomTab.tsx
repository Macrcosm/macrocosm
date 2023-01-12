import { FC, Children, ReactNode } from "react";
import { Tab } from "@headlessui/react";

interface CustomTabProps {
  children: ReactNode[];
  options: string[];
}

const CustomTab: FC<CustomTabProps> = (props) => {
  const { children, options } = props;
  // const childrenArray = Children.toArray(children);

  return (
    <Tab.Group>
      <Tab.List className="flex gap-5 text-lg">
        {options.map((option, index) => (
          <Tab className="ui-selected:underline" key={index}>
            {option}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-4 child:waterfall child:column-count-3 overflow-y-auto max-h-[360px]">
        {children?.map((child, index) => (
          <Tab.Panel key={index}>{child}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default CustomTab;
