import { Tab } from "@headlessui/react";
import { FC, ReactNode } from "react";

interface TabsProps {
  tabs: string[];
  children: ReactNode[];
  leftElement?: ReactNode;
}

const Tabs: FC<TabsProps> = (props) => {
  const { tabs, children, leftElement } = props;
  return (
    <Tab.Group>
      <div className="flex gap-2.5 items-center mx-auto w-max">
        <Tab.List className="bg-black-chip rounded-xl p-1.5 flex gap-2.5 ">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              className="rounded-xl px-4 p-1 ui-selected:bg-black "
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        {leftElement}
      </div>
      <Tab.Panels>
        {children.map((child, index) => (
          <Tab.Panel key={index}>{child}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
