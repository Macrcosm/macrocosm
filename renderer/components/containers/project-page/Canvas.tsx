import { FC } from "react";

import ProgressBar from "../shared/ProgressBar";
import CanvasContextMenu, { CanvasContextMenuProps } from "./CanvasContextMenu";

interface CanvasProps extends CanvasContextMenuProps {}

const Canvas: FC<CanvasProps> = (props) => {
  const { openShareImageDialog } = props;

  return (
    <div className="flex-1 flex flex-col justify-between h-[calc(100vh-78px)] overflow-hidden">
      <div className="grid place-content-center flex-1 place-items-center">
        <CanvasContextMenu openShareImageDialog={openShareImageDialog} />
      </div>
      <div className="w-[400px] self-center mb-10">
        <ProgressBar progress={40} />
      </div>
    </div>
  );
};

export default Canvas;
