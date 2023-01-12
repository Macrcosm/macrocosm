import {FC, useEffect, useState} from "react";
import {AiOutlineZoomOut, AiOutlineZoomIn} from "react-icons/ai";
import {FaMousePointer} from "react-icons/fa";
import {TfiHandOpen} from "react-icons/tfi";
import {FiChevronDown} from "react-icons/fi";

import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import LoginDialog from "./LoginDialog";
import PricingDialog from "./PricingDialog";
import Canvas from "./Canvas";
import {AiModalsProvider} from "../../../context/AiModalsContext";
import Header from "../../shared/header/Header";
import {supabase} from "../../../utils/supabase";
import {useRouter} from "next/router";
import {MacroNotification} from "../../shared/notification/notification";

const HomePage: FC = () => {
    const router = useRouter();
    const [notification, setNotification] = useState<{ message: string, title: string, type: string }>();
    const [showNotification, setShowNotification] = useState(false);
    const [mainIdea, setMainIdea] = useState("");
    const [negatives, setNegatives] = useState("");
    const [inTheStyleOf, setInTheStyleOf] = useState([]);
    useEffect(() => {
        supabase.auth.getUser().then(userData => {
            console.log(userData.data.user);
        });
    }, []);
    useEffect(() => {
        if (Object.keys(router.query).length && Object.keys(router.query).includes('error')) {
            setNotification({
                title: router?.query?.error?.toString() || '',
                type: "error",
                message: router?.query?.error_description?.toString() || ''
            });
            setShowNotification(true);
        }
    }, [router.query]);
    return (
        <>
            {/*<LoginDialog />*/}
            {/*<PricingDialog />*/}
            <div className="flex flex-col h-screen overflow-hidden relative">
                <Header>
                    <div className="flex gap-6 items-center fill-none stroke-grey-50 ">
                        <button>
                            <FaMousePointer size={24}/>
                        </button>
                        <button>
                            <TfiHandOpen size={28}/>
                        </button>
                        <button>
                            <AiOutlineZoomOut size={28}/>
                        </button>
                        <button>
                            <AiOutlineZoomIn size={28}/>
                        </button>
                        <div className="flex gap-1.5 items-center">
                            <p className="text-sm">100%</p>
                            <FiChevronDown size={12}/>
                        </div>
                    </div>
                </Header>
                <AiModalsProvider>
                    <div className="flex items-stretch flex-1 border-t border-border">
                        <LeftPanel mainIdea={mainIdea} setMainIdea={setMainIdea} negatives={negatives}
                                   setNegatives={setNegatives} inTheStyleOf={inTheStyleOf}
                                   setInTheStyleOf={setInTheStyleOf}/>
                        <Canvas/>
                        <RightPanel mainIdea={mainIdea} negatives={negatives}/>
                    </div>
                </AiModalsProvider>
                <MacroNotification show={showNotification} setShow={setShowNotification} type={notification?.type!}
                                   message={notification?.message!} title={notification?.title!}/>
            </div>
        </>
    );
};

export default HomePage;