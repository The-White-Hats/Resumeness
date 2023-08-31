import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../slices/store";
import DownloadButton from "../download-button/download-button";
import PreviewButton from "../preview-button/preview-button";
import Colors from "./colors/colors";
import "./preview-wrapper.css";
import Preview from "./preview/preview";
import LetterPreview from "../../../cover-letter/sub/preview";
const Wrapper = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { color } = useAppSelector((state) => state.color);
  return (
    <>
      <DownloadButton />
      <div className="wrapper">
        <div className="absolute">
          <Colors />
        </div>
        <div className="container">
          <Preview color={color} />
        </div>
      </div>
      <PreviewButton />
    </>
  );
};

export default Wrapper;
