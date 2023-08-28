import './Form.css'
import * as form from '../../../../slices/formReducer'
import { useDispatch } from 'react-redux'

const Form = () => {
    const dispatch = useDispatch();

    //const SetPicURL = (pic: string) => dispatch(form.setPicURL(pic));
    const SetFirstName = (fName: string) => dispatch(form.setFirstName(fName));
    const SetLastName = (lName: string) => dispatch(form.setLastName(lName));
    const SetEmail = (email: string) => dispatch(form.setEmail(email));
    const SetTitle = (title: string) => dispatch(form.setTitle(title));
    const SetAddress = (address: string) => dispatch(form.setAddress(address));
    const SetPhone = (phone: string) => dispatch(form.setPhone(phone));
    const SetLinkedInURL = (InURL: string) => dispatch(form.setLinkedInURL(InURL));
    const SetPortfolioURL = (PortURL: string) => dispatch(form.setPortfolioURL(PortURL));
    const SetProfessionalSummary = (PortURL: string) => dispatch(form.setProfessionalSummary(PortURL));


    type setter = (value: string) => void;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, set: setter) => {
        set(event.target.value);
    };

    return (
    <div className="Form">
        <div className="title">Form</div>
        <div className="sub-title">Personal Information</div>
        <form id="personal-info">
            <div className="form-element">
                <label>First Name</label>
                <input type="text" onChange={(event) => handleInputChange(event, SetFirstName)} required/>
            </div>
            <div className="form-element">
                <label>Last Name</label>
                <input type="text" onChange={(event) => handleInputChange(event, SetLastName)} required/>
            </div>
            <div className="form-element">
                <label>Email</label>
                <input type="email" onChange={(event) => handleInputChange(event, SetEmail)} required/>
            </div>
            <div className="form-element">
                <label>Title</label>
                <input type="text" onChange={(event) => handleInputChange(event, SetTitle)} required/>
            </div>
            <div className="form-element">
                <label>Phone Number</label>
                <input type="tel" onChange={(event) => handleInputChange(event, SetPhone)} required/>
            </div>
            <div className="form-element">
                <label>Address</label>
                <input type="text" onChange={(event) => handleInputChange(event, SetAddress)} required/>
            </div>
            <div className="form-element">
                <label>LinkedIn URL (if available)</label>
                <input type="url" onChange={(event) => handleInputChange(event, SetLinkedInURL)} />
            </div>
            <div className="form-element">
                <label>Portfolio URL (if applicable)</label>
                <input type="url" onChange={(event) => handleInputChange(event, SetPortfolioURL)} />
            </div>
            <div className="form-element">
                <label>Professional Summary</label>
                <input type="url" onChange={(event) => handleInputChange(event, SetProfessionalSummary)} />
            </div>
        </form>
    </div>
    )
}

export default Form
