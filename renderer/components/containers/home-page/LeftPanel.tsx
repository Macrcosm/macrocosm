import {Tab} from "@headlessui/react";
import {FC} from "react";

import BuilderPanel, {BuilderPanelProps} from "./builder-panel";
import GalleryPanel from "./gallery-panel";

export interface LeftPanelProps {
    mainIdea: string;
    setMainIdea: Function;
    negatives: string;
    setNegatives: Function;
    inTheStyleOf: string[];
    setInTheStyleOf: Function;
}

const LeftPanel: FC<LeftPanelProps> = (props) => {
    return (
        <div className="text-sm bg-black-chip/60 w-[274px] h-[calc(100vh-78px)] overflow-y-auto">
            <Tab.Group>
                <Tab.List className="flex gap-3.5 p-5 border-b border-grey-800">
                    <Tab className="ui-not-selected:text-grey-700 outline-none">
                        <p>Builder</p>
                    </Tab>
                    <Tab className="ui-not-selected:text-grey-700 outline-none">
                        <p className="">Gallery</p>
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <BuilderPanel mainIdea={props.mainIdea} setMainIdea={props.setMainIdea}
                                      negatives={props.negatives} setNegatives={props.setNegatives}
                                      inTheStyleOf={props.inTheStyleOf} setInTheStyleOf={props.setInTheStyleOf}/>
                    </Tab.Panel>
                    <Tab.Panel>
                        <GalleryPanel/>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default LeftPanel;
