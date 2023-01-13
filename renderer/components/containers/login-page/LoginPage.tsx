import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import DiscordIcon from "../../../icons/Discord";
import Button from "../../shared/button/Button";
import Image from "../../shared/image";
import illustration from "../../../public/images/image1.jpg";
import { useAuthContext } from "../../../hooks/useContext";
import {useEffect} from "react";
import {supabase} from "../../../utils/supabase";
import Logo from "../../shared/logo";

interface Props {
    loggedIn: boolean;
}
export default function LoginPage(props: Props) {
    const router = useRouter();
    const { loginUser } = useAuthContext();
    useEffect(() => {
        if (props.loggedIn) {
            router.replace('/');
        }
    }, [props.loggedIn]);
    const loginWithDiscord = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'discord'
        });
    }
    const loginWithGoogle = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google'
        });
    }
    return (
        <div className="px-10 py-6 min-h-screen">
            <Logo />
            <div className="flex justify-around items-center h-full ">
                <div className="flex gap-6 flex-col items-center h-full">
                    <h2 className="flex flex-row text-[40px] font-medium">
                        Sign Up / Sign In
                    </h2>
                    <Button leftIcon={<FcGoogle size={24} />} onClick={loginWithGoogle}>
                        Continue with Google
                    </Button>
                    <Button onClick={loginWithDiscord} leftIcon={<DiscordIcon />}>
                        Continue with Discord
                    </Button>
                    <Button variant="link" onClick={() => router.push("/")}>
                        Skip for now
                    </Button>
                </div>
                <div>
                    <Image
                        src={illustration}
                        alt=""
                        width={420}
                        height={824}
                        priority
                        className="h-auto"
                    />
                    <p className="text-grey-700 max-w-[549px] mt-3">
                        A young girl stands at the edge of the macrocosm, brightly-colored
                        universe, her anime-inspired aesthetic glowing in the surreal and
                        vibrant art style
                    </p>
                </div>
            </div>
        </div>
    );
}