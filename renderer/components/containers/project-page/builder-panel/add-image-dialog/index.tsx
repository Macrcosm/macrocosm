import {FC, useRef} from "react";
import {Menu} from "@headlessui/react";
import {BiSearch, BiChevronDown} from "react-icons/bi";
import {RiUploadCloud2Line} from "react-icons/ri";

import Dialog, {DialogProps} from "../../../../shared/dialog/Dialog";
import PrimaryButton from "../../../../shared/button/PrimaryButton";
import MyPictures from "./MyPictures";
import CommunityPictures from "./CommunityPictures";

const options = [
    "My Pictures",
    "Community"
];

interface AddImageDialogProps extends Omit<DialogProps, "children"> {
    onChange: (option: string) => void;
    option: string;
}

const AddImageDialog: FC<AddImageDialogProps> = (props) => {
    const {onClose, open, onChange, option} = props;
    const inputFileRef = useRef<HTMLInputElement>(null);

    const ImageGallery: FC = () => {
        switch (option) {
            case options[0]:
                return <MyPictures/>;
            case options[1]:
                return <CommunityPictures/>;
            default:
                return null;
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <div className="w-[700px] px-3">
                <h3 className="text-2xl font-medium">Pictures</h3>
                <p className="text-sm text-grey-700 mt-1.5">
                    {option === options[0]
                        ? "Your Pictures"
                        : "Search the community for inspiration"}
                </p>
                <div className="mt-5 px-5 py-2.5  bg-black-chip rounded-xl ring-1 ring-border flex gap-5 items-center">
                    {/*<Menu as="div" className="relative text-sm">*/}
                    {/*    <Menu.Button className="rounded-lg px-3 py-2.5 ring-1 ring-border flex gap-2 items-center">*/}
                    {/*        {option}*/}
                    {/*        <BiChevronDown size={24}/>*/}
                    {/*    </Menu.Button>*/}
                    {/*    <Menu.Items*/}
                    {/*        className="absolute mt-2 z-10 bg-black-chip ring-1 ring-border rounded-xl child:px-5 child:py-2 py-2 child:w-full child:text-left">*/}
                    {/*        {options.map((o) => (*/}
                    {/*            <Menu.Item*/}
                    {/*                as="button"*/}
                    {/*                className="ui-active:bg-black/20"*/}
                    {/*                key={o}*/}
                    {/*                onClick={() => onChange(o)}*/}
                    {/*            >*/}
                    {/*                {o}*/}
                    {/*            </Menu.Item>*/}
                    {/*        ))}*/}
                    {/*    </Menu.Items>*/}
                    {/*</Menu>*/}
                    <div className="flex gap-2 items-center flex-1">
                        <BiSearch size={18}/>
                        <input
                            className="text-grey-500 bg-transparent outline-none flex-1"
                            placeholder="Search"
                        />
                        <input type="file" ref={inputFileRef} hidden/>
                    </div>
                    {option === options[0] && (
                        <PrimaryButton
                            variant="secondary"
                            className=" flex gap-2 items-center text-sm"
                            onClick={() => {
                                inputFileRef.current?.click();
                            }}
                        >
                            Upload New
                            <RiUploadCloud2Line size={20}/>
                        </PrimaryButton>
                    )}
                </div>
                <div className="mt-8">
                    <ImageGallery/>
                </div>
            </div>
        </Dialog>
    );
};

export default AddImageDialog;
