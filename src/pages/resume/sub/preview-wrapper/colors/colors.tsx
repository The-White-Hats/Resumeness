import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { updateColor } from "../../../../../slices/colorReducer";
import type { RootState } from "../../../../../slices/store";
import "./colors.css";
const colorPalette: string[] = [
  "#313337d6",
  "#224286d6",
  "#008E9Bd6",
  "#2C73D2d6",
  "#845EC2d6",
  "#AB3F80d6",
];

const Colors = () => {
  const dispatch = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const currentColor = useAppSelector((state) => state.color.color);
  const colors = colorPalette.map((color, i) => {
    return (
      <div
        key={i}
        className="color"
        style={{ backgroundColor: color }}
        onClick={() => dispatch(updateColor(color))}
      >
        <div
          className={`small-circle ${color !== currentColor ? "hide" : ""}`}
        ></div>
      </div>
    );
  });
  return <div className="color-container">{colors}</div>;
};

export default Colors;
