import "./preview-button.css"
import previewIcon from "../../../../assets/previewIcon.svg";
import { Link } from "react-router-dom";

const PreviewButton = ()=>{
    return (
        <Link to="/resume/preview">
        <button className="preview-button">
           <div className="preview-text">Preview</div> 
            <img src={previewIcon} alt="preview" className="previewIcon"/>
        </button>
        </Link>
    );
}

export default PreviewButton;