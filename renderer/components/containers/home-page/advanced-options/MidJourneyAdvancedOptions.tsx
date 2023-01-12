import { Disclosure } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

import Dropdown from "../../../shared/dropdown/Dropdown";
import { mid_journey_options } from "../../../../data/mock";
import InputDropdown from "../../../shared/dropdown/InputDropdown";
import DropdownTrigger from "../DropdownTrigger";

const { quality, yesNo, upscale, sizes, versions } = mid_journey_options;

export default function MidJourneyAdvancedOptions() {
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
            trigger={(option) => (
              <DropdownTrigger selectedOption={option} label="Version" />
            )}
          />
        </div>
        <div className="px-5 py-3.5 du">
          <Dropdown
            options={sizes}
            trigger={(option) => (
              <DropdownTrigger selectedOption={option} label="Height" />
            )}
          />
        </div>
        <div className="px-5 py-3.5 du">
          <Dropdown
            options={sizes}
            trigger={(option) => (
              <DropdownTrigger selectedOption={option} label="Width" />
            )}
          />
        </div>
        <div className="px-5 py-3.5">
          <InputDropdown
            label="Stylize"
            description="625 is off, 2500 Default, 60000 Crazy"
            defaultValue={2500}
          />
        </div>
        <div className="px-5 py-3.5 du">
          <Dropdown
            options={quality}
            trigger={(option) => (
              <DropdownTrigger selectedOption={option} label="Quality" />
            )}
          />
        </div>
        <div className="px-5 py-3.5">
          <InputDropdown
            label="Chaos"
            description="0 - 100 Chaotic / Abstract"
            min={0}
            defaultValue={50}
          />
        </div>
        <div className="px-5 py-3.5">
          <InputDropdown
            label="Seed"
            description="Seed for random latent noise generation Between 0 - 4294967295 or leave empty for random generation"
            min={0.0}
            defaultValue={7.0}
            step={0.1}
          />
        </div>
        <div className="px-5 py-3.5">
          <Dropdown
            options={yesNo}
            trigger={(option) => (
              <DropdownTrigger selectedOption={option} label="Same Seed" />
            )}
          />
        </div>
        <div className="px-5 py-3.5">
          <Dropdown
            options={upscale}
            trigger={(option) => (
              <DropdownTrigger selectedOption={option} label="Upscale" />
            )}
          />
        </div>
        <div className="px-5 py-3.5">
          <Dropdown
            options={yesNo}
            trigger={(option) => (
              <DropdownTrigger selectedOption={option} label="Video" />
            )}
          />
        </div>
        <div className="px-5 py-3.5">
          <Dropdown
            options={yesNo}
            trigger={(option) => (
              <DropdownTrigger selectedOption={option} label="HD" />
            )}
          />
        </div>
        <div className="px-5 py-3.5">
          <Dropdown
            options={yesNo}
            trigger={(option) => (
              <DropdownTrigger selectedOption={option} label="TIle" />
            )}
          />
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
