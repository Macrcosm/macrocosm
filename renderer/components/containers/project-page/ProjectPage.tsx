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
import ShareImageDialog from "./ShareImageDialog";
import useDiscloser from "../../../hooks/useDiscloser";
import {useRouter} from "next/router";
import {supabase} from "../../../utils/supabase";
import {MacroNotification} from "../../shared/notification/notification";
import illustration from "../../../public/images/image1.jpg";
import ImageFill from "../../shared/image/ImageFill";
import {generateImageApi, getCurrentImagePercent} from "../../../services/data.service";
import {useAiModalsContext} from "../../../hooks/useContext";
import {default_modal_options, mid_journey_options} from "../../../data/mock";
import {ipcRenderer} from "electron";
import {setupMainEventHandlers} from "../../../services/electron.service";

const {quality, yesNo, upscale, sizes: midSizes, versions: midVersions} = mid_journey_options;
const {outputs, samples, sizes, versions} = default_modal_options;

interface ProjectProps {
    id: string;
}
const ProjectPage: FC<ProjectProps> = (props) => {
    const {close, isOpen, open} = useDiscloser(false);
    const router = useRouter();
    const [notification, setNotification] = useState<{ message: string, title: string, type: string }>();
    const [showNotification, setShowNotification] = useState(false);
    const [mainIdea, setMainIdea] = useState("");
    const [percent, setPercent] = useState(0);
    const [negatives, setNegatives] = useState("");
    const [inTheStyleOf, setInTheStyleOf] = useState([]);
    const [images, setImages] = useState<string[]>([]);
    const {selectedModal} = useAiModalsContext();
    const [advancedData, setAdvancedData] = useState<any>({
        width: sizes[0],
        height: sizes[0],
        steps: 50,
        sfgScale: 9,
        version: versions[0],
        sampler: samples[0],
        seed: 0,
        imageCount: outputs[0],
    });
    useEffect(() => {
        if (selectedModal && selectedModal.value === "Midjourney") {
            setAdvancedData({
                width: midSizes[0],
                height: midSizes[0],
                version: midVersions[0],
                stylize: 2500,
                quality: quality[0],
                chaos: 50,
                seed: 0,
                sameSeed: yesNo[0],
                video: yesNo[0],
                hd: yesNo[0],
                tile: yesNo[0],
                upscale: upscale[0],
            });
        } else {
            setAdvancedData({
                width: sizes[0],
                height: sizes[0],
                steps: 50,
                sfgScale: 9,
                version: versions[0],
                sampler: samples[0],
                seed: 0,
                imageCount: outputs[0],
            });
        }
    }, [selectedModal]);
    const getAdvancedData = () => {
        const finalAdvancedData: any = {};
        for (const key of Object.keys(advancedData)) {
            if (typeof advancedData[key] =='object') {
                finalAdvancedData[key] = advancedData[key].value;
            } else {
                finalAdvancedData[key] = advancedData[key];
            }
        }
        return finalAdvancedData;
    }
    useEffect(() => {
        supabase.auth.getUser().then(userData => {
            console.log(userData.data.user);
        });
        getImages();
        setupMainEventHandlers('get-project-images', (evt, data) => {
          console.log(data);
          setImages(data.project.images);
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
    const getProgress = async () => {
        const res = await getCurrentImagePercent();
        if (res.data.current_percent) {
            setPercent(res.data.current_percent);
        }
    }
    const generateImage = async () => {
        setPercent(3);
        const interval = setInterval(() => {
            getProgress();
        }, 2000);
        const res = await generateImageApi({prompt: mainIdea, negative_prompt: negatives, ...getAdvancedData()})
            .catch(error => {
                clearInterval(interval);
                setPercent(0);
                console.log(error.response)
            });
        setPercent(0);
        clearInterval(interval);
        if (res && res.data && res.data.images) {
            const finalImages = [...res.data.images, ...images];
            setPercent(0);
            setImages(finalImages);
            setImagesIntoProject(finalImages)
        }
    }
    const setImagesIntoProject = (imagesData) => {
        ipcRenderer.send("add-images-to-project", {id: props.id, images: imagesData});
    }
    const getImages = () => {
        ipcRenderer.send("get-project-images", {id: props.id});
    }
    return (
        <>
            {/*<LoginDialog />*/}
            {/*<PricingDialog />*/}
            {/*<ShareImageDialog close={close} open={isOpen} />*/}
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
                        <Canvas openShareImageDialog={open} images={images} percent={percent}/>
                        <RightPanel mainIdea={mainIdea} negatives={negatives} generateImage={generateImage}
                                    setAdvancedData={setAdvancedData} advancedData={advancedData}
                                    selectedModal={selectedModal}/>
                    </div>
                </AiModalsProvider>
                <MacroNotification show={showNotification} setShow={setShowNotification} type={notification?.type!}
                                   message={notification?.message!} title={notification?.title!}/>
            </div>
        </>
    );
};

export default ProjectPage;
