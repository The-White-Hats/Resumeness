import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../slices/store";
import LetterPreview from "../../../cover-letter/sub/letter-preview";
import DownloadButton from "../download-button/download-button";
import PreviewButton from "../preview-button/preview-button";
import Colors from "./colors/colors";
import "./preview-wrapper.css";
import Preview from "./preview/preview";
const Wrapper = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { color } = useAppSelector((state) => state.color);
  return (
    <>
      <div className="wrapper">
        {location.pathname === "/resume" ? (
          <div className="absolute">
            <Colors />
          </div>
        ) : null}
        <div className="container">
          {location.pathname === "/resume" ? (
            <Preview color={color} />
            ) : (
              <LetterPreview />
              )}
        </div>
      </div>
      <PreviewButton />
      <DownloadButton style="" />
    </>
  );
};

export default Wrapper;
