import { FC } from "react";
import { Popover } from "@headlessui/react";
import { AiOutlineSend, AiOutlineMenu } from "react-icons/ai";
import { Float } from "@headlessui-float/react";
import { BiHash } from "react-icons/bi";

const MidJourneyDiscordPopover: FC = () => {
  return (
    <Popover className="border-none mx-5 sticky bottom-5">
      <Float offset={0} placement="top-end" portal shift>
        <Popover.Button className="w-full flex justify-between items-center  text-sm text-grey-600 bg-black-chip ring-border ui-not-open:ring-1 rounded-xl ui-not-open:px-5 ui-not-open:py-3.5 ui-open:h-0 ui-open:overflow-hidden">
          Paste prompt here <AiOutlineSend size={18} className="text-grey-50" />
        </Popover.Button>
        <Popover.Panel className="w-[404px] h-[564px] flex flex-col bg-black-chip/60 backdrop-blur-xl rounded-xl ring-1 ring-border divide-y divide-border">
          <div className="flex gap-5 items-center p-5">
            <button>
              <AiOutlineMenu size={18} />
            </button>
            <div className="flex gap-2 items-center">
              <BiHash size={24} className="text-grey-600" />
              <p>Your Private Channel</p>
            </div>
          </div>
          <div className="flex-1"></div>
          <div className="p-5 flex items-center gap-5">
            <input
              className="flex-1 bg-transparent outline-none"
              placeholder="Paste prompt here"
            />
            <AiOutlineSend size={18} />
          </div>
        </Popover.Panel>
      </Float>
    </Popover>
  );
};

export default MidJourneyDiscordPopover;
