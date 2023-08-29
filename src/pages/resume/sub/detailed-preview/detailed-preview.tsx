import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import plus from "../../../../assets/plus-solid.svg";
import type { RootState } from "../../../../slices/store";
import Colors from "../preview-wrapper/colors/colors";
import Preview from "../preview-wrapper/preview/preview";
import "./detailed-preview.css";

import { updateColor } from "../../../../slices/colorReducer";

const DetailedPreview = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { color } = useAppSelector((state) => state.color);
  const dispatch = useDispatch();
  return (
    <>
      <div className="fixed">
        <Colors  />
        <div className="customize-container">
          <input
            type="color"
            className="customize"
            onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(updateColor(event.target.value))
            }
          />
          <div className="colored-circle">
            <div className="black-circle">
              <img src={plus} alt="plus" className="plus" />
            </div>
          </div>
        </div>
      </div>
      <div className="detailed-preview-wrapper">
        <div className="scale">
          <Preview color={color} />
        </div>
      </div>
    </>
  );
};

export default DetailedPreview;
