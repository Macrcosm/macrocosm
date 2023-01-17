import {FC, useEffect, useState} from "react";
import { AiOutlineZoomOut, AiOutlineZoomIn } from "react-icons/ai";
import { FaMousePointer } from "react-icons/fa";
import { TfiHandOpen } from "react-icons/tfi";
import { FiChevronDown } from "react-icons/fi";

import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import LoginDialog from "./LoginDialog";
import PricingDialog from "./PricingDialog";
import Canvas from "./Canvas";
import { AiModalsProvider } from "../../../context/AiModalsContext";
import Header from "../../shared/header/Header";
import ShareImageDialog from "./ShareImageDialog";
import useDiscloser from "../../../hooks/useDiscloser";
import {useRouter} from "next/router";
import {supabase} from "../../../utils/supabase";
import {MacroNotification} from "../../shared/notification/notification";
import illustration from "../../../public/images/image1.jpg";
import ImageFill from "../../shared/image/ImageFill";
import {generateImageApi} from "../../../services/data.service";

const ProjectPage: FC = () => {
  const { close, isOpen, open } = useDiscloser(false);
  const router = useRouter();
  const [notification, setNotification] = useState<{ message: string, title: string, type: string }>();
  const [showNotification, setShowNotification] = useState(false);
  const [mainIdea, setMainIdea] = useState("");
  const [negatives, setNegatives] = useState("");
  const [inTheStyleOf, setInTheStyleOf] = useState([]);
  const[image, setImage] = useState('');
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
  const generateImage = async () => {
    await generateImageApi({prompt: mainIdea})
        .then(res => setImage(res.data.image))
        .catch(error => console.log(error.response));
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
            <Canvas openShareImageDialog={open} image={
              <ImageFill
                  src={image !== '' ? `data:image/png;base64,${image}` : illustration}
                  alt=""
                  className=" object-cover"
                  height={480}
                  width={480}
                  sizes="420px"
              />
            }/>
            <RightPanel mainIdea={mainIdea} negatives={negatives} generateImage={generateImage}/>
          </div>
        </AiModalsProvider>
        <MacroNotification show={showNotification} setShow={setShowNotification} type={notification?.type!}
                           message={notification?.message!} title={notification?.title!}/>
      </div>
    </>
  );
};

export default ProjectPage;
