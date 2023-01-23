import { Disclosure } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

import Dropdown from "../../../shared/dropdown/Dropdown";
import { default_modal_options } from "../../../../data/mock";
import InputDropdown from "../../../shared/dropdown/InputDropdown";
import DropdownTrigger from "../DropdownTrigger";

const { outputs, samples, sizes, versions } = default_modal_options;
interface Props {
  advancedData: any;
  setAdvancedData: (value) => void;
}
export default function DefaultAdvancedOptions(props: Props) {
  const {advancedData, setAdvancedData} = props;
  return (
      <Disclosure as="div" className="ring-1 ring-border rounded-xl">
        <Disclosure.Button className="flex items-center justify-between w-full bg-black-chip px-5 py-3.5 ring-1 ring-border rounded-t-xl ui-not-open:rounded-b-xl">
          <div className="flex gap-3 items-center">
            Advanced
            <AiOutlineInfoCircle size={16} />
          </div>
          <BiChevronDown size={24} className="ui-open:rotate-180 transform" />
        </Disclosure.Button>

        <Disclosure.Panel className="divide-y divide-border">
          <div className="px-5 py-5">
            <Dropdown
                options={sizes}
                selectedOption={advancedData.width}
                setSelectedOption={(value) => setAdvancedData({...advancedData, width: value})}
                trigger={(option) => (
                    <DropdownTrigger selectedOption={option} label="Width" />
                )}
            />
          </div>
          <div className="px-5 py-3.5 du">
            <Dropdown
                options={sizes}
                selectedOption={advancedData.height}
                setSelectedOption={(value) => setAdvancedData({...advancedData, height: value})}
                trigger={(option) => (
                    <DropdownTrigger selectedOption={option} label="Height" />
                )}
            />
          </div>
          <div className="px-5 py-3.5">
            <Dropdown
                options={outputs}
                selectedOption={advancedData.imageCount}
                setSelectedOption={(value) => setAdvancedData({...advancedData, imageCount: value})}
                description="No. of output Images"
                trigger={(option) => (
                    <DropdownTrigger selectedOption={option} label="Output" />
                )}
            />
          </div>
          <div className="px-5 py-3.5">
            <InputDropdown
                label="Steps"
                value={advancedData.steps}
                setValue={(value) => setAdvancedData({...advancedData, steps: value})}
                description="Affects the number of diffusion steps performed on the requested generation. Integer between 1-500 "
            />
          </div>
          <div className="px-5 py-3.5">
            <InputDropdown
                label="SFG Scale"
                value={advancedData.sfgScale}
                setValue={(value) => setAdvancedData({...advancedData, sfgScale: value})}
                description="Dictates how closely the engine attempts to match a generation to the provided prompt. Between 1-20"
            />
          </div>
          <div className="px-5 py-3.5">
            <Dropdown
                options={versions}
                selectedOption={advancedData.version}
                setSelectedOption={(value) => setAdvancedData({...advancedData, version: value})}
                trigger={(option) => (
                    <DropdownTrigger selectedOption={option} label="Version" />
                )}
            />
          </div>
          <div className="px-5 py-3.5">
            <Dropdown
                options={samples}
                selectedOption={advancedData.sampler}
                setSelectedOption={(value) => setAdvancedData({...advancedData, sampler: value})}
                trigger={(option) => (
                    <DropdownTrigger selectedOption={option} label="Sampler" />
                )}
            />
          </div>
          <div className="px-5 py-3.5">
            <InputDropdown
                label="Seed"
                value={advancedData.seed}
                setValue={(value) => setAdvancedData({...advancedData, seed: value})}
                min={0}
                description="Seed for random latent noise generation Between 0 - 2147483647 or leave empty for random generation"
            />
          </div>
        </Disclosure.Panel>
      </Disclosure>
  );
}
