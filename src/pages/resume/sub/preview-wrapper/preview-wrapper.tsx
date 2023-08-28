import { useState } from "react";
import Colors from "./colors/colors";
import "./preview-wrapper.css";
import Preview from "./preview/preview";
const Wrapper = () => {
  const [color, setColor] = useState("#224286d6");

  const updateColor = (color: string) => {
    setColor(color);
  };
  return (
    <div className="wrapper">
      <div className="container">
      <Preview color={color} />
      <Colors updateColor={updateColor} />
      </div>
    </div>
  );
};

export default Wrapper;
