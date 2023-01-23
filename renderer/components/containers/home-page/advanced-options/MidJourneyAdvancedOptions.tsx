import { Disclosure } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

import Dropdown from "../../../shared/dropdown/Dropdown";
import { mid_journey_options } from "../../../../data/mock";
import InputDropdown from "../../../shared/dropdown/InputDropdown";
import DropdownTrigger from "../DropdownTrigger";

const { quality, yesNo, upscale, sizes, versions } = mid_journey_options;

interface Props {
  advancedData: any;
  setAdvancedData: (value) => void;
}
export default function MidJourneyAdvancedOptions(props: Props) {
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
                options={versions}
                selectedOption={advancedData.version}
                setSelectedOption={(value) => setAdvancedData({...advancedData, version: value})}
                trigger={(option) => (
                    <DropdownTrigger selectedOption={option} label="Version" />
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
          <div className="px-5 py-3.5 du">
            <Dropdown
                options={sizes}
                selectedOption={advancedData.width}
                setSelectedOption={(value) => setAdvancedData({...advancedData, width: value})}
                trigger={(option) => (
                    <DropdownTrigger selectedOption={option} label="Width" />
                )}
            />
          </div>
          <div className="px-5 py-3.5">
            <InputDropdown
                label="Stylize"
                value={advancedData.stylize}
                setValue={(value) => setAdvancedData({...advancedData, stylize: value})}
                description="625 is off, 2500 Default, 60000 Crazy"
            />
          </div>
          <div className="px-5 py-3.5 du">
            <Dropdown
                options={quality}
                selectedOption={advancedData.quality}
                setSelectedOption={(value) => setAdvancedData({...advancedData, quality: value})}
                trigger={(option) => (
                    <DropdownTrigger selectedOption={option} label="Quality" />
                )}
            />
          </div>
          <div className="px-5 py-3.5">
            <InputDropdown
                label="Chaos"
                value={advancedData.chaos}
                setValue={(value) => setAdvancedData({...advancedData, chaos: value})}
                description="0 - 100 Chaotic / Abstract"
                min={0}
            />
          </div>
          <div className="px-5 py-3.5">
            <InputDropdown
                label="Seed"
                value={advancedData.seed}
                setValue={(value) => setAdvancedData({...advancedData, seed: value})}
                description="Seed for random latent noise generation Between 0 - 4294967295 or leave empty for random generation"
                min={0}
                step={0.1}
            />
          </div>
          <div className="px-5 py-3.5">
            <Dropdown
                options={yesNo}
                selectedOption={advancedData.sameSeed}
                setSelectedOption={(value) => setAdvancedData({...advancedData, sameSeed: value})}
                trigger={(option) => (
                    <DropdownTrigger selectedOption={option} label="Same Seed" />
                )}
            />
          </div>
          <div className="px-5 py-3.5">
            <Dropdown
                options={upscale}
                selectedOption={advancedData.upscale}
                setSelectedOption={(value) => setAdvancedData({...advancedData, upscale: value})}
                trigger={(option) => (
                    <DropdownTrigger selectedOption={option} label="Upscale" />
                )}
            />
          </div>
          <div className="px-5 py-3.5">
            <Dropdown
                options={yesNo}
                selectedOption={advancedData.video}
                setSelectedOption={(value) => setAdvancedData({...advancedData, video: value})}
                trigger={(option) => (
                    <DropdownTrigger selectedOption={option} label="Video" />
                )}
            />
          </div>
          <div className="px-5 py-3.5">
            <Dropdown
                options={yesNo}
                selectedOption={advancedData.hd}
                setSelectedOption={(value) => setAdvancedData({...advancedData, hd: value})}
                trigger={(option) => (
                    <DropdownTrigger selectedOption={option} label="HD" />
                )}
            />
          </div>
          <div className="px-5 py-3.5">
            <Dropdown
                options={yesNo}
                selectedOption={advancedData.tile}
                setSelectedOption={(value) => setAdvancedData({...advancedData, tile: value})}
                trigger={(option) => (
                    <DropdownTrigger selectedOption={option} label="Tile" />
                )}
            />
          </div>
        </Disclosure.Panel>
      </Disclosure>
  );
}
