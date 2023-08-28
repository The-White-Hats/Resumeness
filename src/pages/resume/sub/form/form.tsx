import './Form.css'
const Form = () => {
  return (
    <div className="Form">
        <div className="title">Form</div>
        <div className="sub-title">Personal Information</div>
        <form id="personal-info">
            <div className="form-element">
                <label>First Name</label>
                <input type="text" required/>
            </div>
            <div className="form-element">
                <label>Last Name</label>
                <input type="text" required/>
            </div>
            <div className="form-element">
                <label>Email</label>
                <input type="email" required/>
            </div>
            <div className="form-element">
                <label>Phone Number</label>
                <input type="tel" required/>
            </div>
            <div className="form-element">
                <label>Address</label>
                <input type="text" required/>
            </div>
            <div className="form-element">
                <label>LinkedIn URL (if available)</label>
                <input type="url" />
            </div>
            <div className="form-element">
                <label>Website/Portfolio URL (if applicable)</label>
                <input type="url" />
            </div>
        </form>
    </div>
    )
}

export default Form
