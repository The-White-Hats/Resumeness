import { useSelector } from "react-redux";
import * as form from "../../../slices/formReducer";
import "./letter-preview.css";

const LetterPreview = () => {
  const fname = useSelector(form.selectFirstName);
  const lname = useSelector(form.selectLastName);
  const email = useSelector(form.selectEmail);
  const title = useSelector(form.selectTitle);
  const phone = useSelector(form.selectPhone);
  const address = useSelector(form.selectAddress);
  const company = useSelector(form.selectCompany);
  const hiringManager = useSelector(form.selectHiringManager);
  const letterDetails = useSelector(form.selectLetterDetails);

  return (
    <div className="letter-preview">
      <div className="letter-header">
        <h1>
          {fname} {lname}
        </h1>
        <h2>{title}</h2>
      </div>
      <div className="letter-body">
        <div className="letter-details">
          <h3 className={company === "" && hiringManager === "" ? "hide" : ""}>
            To: {hiringManager}, {company}
          </h3>
          <p>{letterDetails}</p>
        </div>
        <div className="letter-footer ">
          <h4>
            {address} {address !== "" && (phone !== "" || email !== "") ? "•" : ""} {phone} {phone !== "" && email !== "" ? "•" : ""} {email}
          </h4>
        </div>
      </div>
    </div>
  );
};
export default LetterPreview;
