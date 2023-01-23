import { FC } from "react";

import ProgressBar from "../shared/ProgressBar";
import CanvasContextMenu, { CanvasContextMenuProps } from "./CanvasContextMenu";
import illustration from "../../../public/images/image1.jpg";
import ImageFill from "../../shared/image/ImageFill";

interface CanvasProps extends CanvasContextMenuProps {
  percent: number;
  images: any[];
}

const Canvas: FC<CanvasProps> = (props) => {
  const { openShareImageDialog } = props;

  return (
    <div className="flex-1 flex flex-col justify-between h-[calc(100vh-78px)] overflow-hidden">
      <div className={`flex-1 flex gap-3 mx-3 overflow-auto items-center ${props.images.length === 0 ? "justify-center" : "justify-between"}`}>
          {
              props.images.map((image, index) => {
                return (
                    <CanvasContextMenu key={index} openShareImageDialog={openShareImageDialog} image={<ImageFill
                        src={`data:image/png;base64,${image}`}
                        alt=""
                        className=" object-cover"
                        height={480}
                        width={480}
                        sizes="420px"
                    />}/>
                )
              })
          }
          {
              props.images.length === 0 &&
              <CanvasContextMenu openShareImageDialog={openShareImageDialog} image={<ImageFill
                  src={illustration}
                  alt=""
                  className=" object-cover"
                  height={480}
                  width={480}
                  sizes="420px"
              />}/>
          }
      </div>
      {
        props.percent !== 0 && props.percent !== 100 &&
        <div className="w-[400px] self-center mb-10">
          <ProgressBar progress={props.percent} />
        </div>
      }
    </div>
  );
};

export default Canvas;
