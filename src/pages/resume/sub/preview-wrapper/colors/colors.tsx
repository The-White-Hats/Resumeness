import "./colors.css";
const colorPalette: string[] = [ "#313337d6","#224286d6", "#008E9Bd6", "#2C73D2d6","#845EC2d6", "#AB3F80d6"];

type ColorProps = {
 setColor: (color: string) => void;
};

const Colors = ({ setColor }: ColorProps) => {
  return (
    <div className="color-container">
      {colorPalette.map((color, i) => {
        return (
          <div
            key={i}
            className="color"
            style={{ backgroundColor: color }}
            onClick={() => setColor(color)}
          ></div>
        );
      })}
    </div>
  );
};

export default Colors;
