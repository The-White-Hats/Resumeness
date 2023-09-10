import { Link } from "react-router-dom";
import previewIcon from "../../../../assets/previewIcon.svg";
import "./preview-button.css";
const PreviewButton = () => {
  return (
    <Link to={`${location.pathname}/preview`}>
      <button className="preview-button button">
        <div className="button-text">Preview</div>
        <img src={previewIcon} alt="preview" className="Icon" />
      </button>
    </Link>
  );
};

export default PreviewButton;
