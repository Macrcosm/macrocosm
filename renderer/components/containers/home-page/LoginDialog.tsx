import { FcGoogle } from "react-icons/fc";

import useDiscloser from "../../../hooks/useDiscloser";
import Dialog from "../../shared/dialog/Dialog";
import Image from "../../shared/image";
import illustration from "../../../public/images/image2.jpg";
import Button from "../../shared/button/Button";
import DiscordIcon from "../../../icons/Discord";

const LoginDialog = () => {
    const { close, isOpen, open } = useDiscloser();

    return (
        <Dialog onClose={close} open={isOpen}>
            <Image alt="" src={illustration} className="object-cover" />
            <div className="grid place-items-center gap-6 mt-8">
                <h2 className="text-title font-medium">Oops!!</h2>
                <p className="text-grey-700 max-w-[300px] text-center font-inter">
                    Please sign in or sign up to access descriptive text generation.
                </p>
                <Button leftIcon={<FcGoogle size={24} />}>Continue with Google</Button>
                <Button leftIcon={<DiscordIcon />}>Continue with Discord</Button>
            </div>
        </Dialog>
    );
};

export default LoginDialog;