import { FC, useMemo } from "react";
import classnames from "../../../utils/classnames";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: FC<ProgressBarProps> = (props) => {
  const { progress } = props;

  return (
    <div className="w-80 bg-black-chip h-4 rounded-full ring-1 ring-border">
      <div
        className="h-full rounded-full bg-primary"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
