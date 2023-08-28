import Wrapper from "./sub/preview-wrapper/preview-wrapper";
import Form from "./sub/form/form"
import "./resume.css"
const Resume = ()=>{
     return (
        <div className="resume-container">
            <Form/>
            <Wrapper/>
        </div>
     );
}
export default Resume;