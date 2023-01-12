import { FC, ReactNode } from "react";
import { Dialog as HLDialog } from "@headlessui/react";
import { MdClose } from "react-icons/md";

export interface DialogProps {
  onClose: () => void;
  open: boolean;
  children: ReactNode;
}

const Dialog: FC<DialogProps> = (props) => {
  const { onClose, open, children } = props;

  return (
    <HLDialog open={open} onClose={onClose} className="relative h-screen">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="fixed inset-0 grid place-items-center px-5 py-10">
        <HLDialog.Panel className="bg-bg py-10 px-16 relative rounded-xl max-h-full overflow-y-auto">
          <button aria-label="close" onClick={onClose}>
            <MdClose size={28} className="absolute m-6 right-0 top-0" />
          </button>
          {children}
        </HLDialog.Panel>
      </div>
    </HLDialog>
  );
};

export default Dialog;
