import { useDispatch, useSelector } from 'react-redux';
import * as form from '../../../slices/formReducer';



const Preview = () => {

  const name = useSelector(form.selectName);
  const email = useSelector(form.selectEmail);
  const title = useSelector(form.selectTitle);
  const phone = useSelector(form.selectPhone);
  const address = useSelector(form.selectAddress);
  const linkedInURL = useSelector(form.selectLinkedInURL);
  const portfolioURL = useSelector(form.selectPortfolioURL);
  const professionalSummary = useSelector(form.selectProfessionalSummary);

  const experienceArr = useSelector(form.selectExperience);
  const educationArr = useSelector(form.selectEducation);
  const skillArr = useSelector(form.selectSkills);
  const languageArr = useSelector(form.selectLanguages);
  const certificationArr = useSelector(form.selectCertifications);
  const volunteeringArr = useSelector(form.selectVolunteering);
  const interestArr = useSelector(form.selectInterests);

  const dispatch = useDispatch();

  const setEmail = (email: string) => dispatch(form.setEmail(email));
  const addSkill = (newSkill: any) => dispatch(form.addSkill(newSkill));
  let i = 0;
  const wrapper = () =>
  {
    return addSkill({id:i++, skill:"none"})
  }
  setEmail('Johnnnnnnnnn cenaaaaaaaaaa Doe');
  
  return (
    <div className="preview">
      <div className="side-bar">
        <div className="profile">
          <img src="" alt="profile picture" />
          <h1>hey</h1>
          <hr />
          <h6>{title}</h6>
        </div>
        <div className="contact-info">
          <h2>Contact</h2>
          <h6>{email}</h6>
          <h6>{phone}</h6>
          <h6>{address}</h6>
        </div>
        <div className="links">
          <h2>Links</h2>
          <a href={linkedInURL}><h6>LinkedIn</h6></a>
          <a href={portfolioURL}><h6>Portfolio</h6></a>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          {skillArr.map((skill) => {
            return (
              <h6>{skill.skill}</h6>
            );
          })}
        </div>
        <div className="languages">
          <h2>Languages</h2>
          {languageArr.map((language) => {
            return (
              <>
                <h6>{language.language}</h6>
                <h6>{language.fluency}</h6>
              </>
            );
          })}
        </div>
        <div className="intrests">
          <h2>Interests</h2>
          {interestArr.map((interest) => {
            return (
              <h6>{interest.interest}</h6>
            );
          })}
        </div>
        <button onClick={wrapper}>add a new skill</button>
      </div>
      <div className="main">

      </div>
    </div>
  );
}

export default Preview;
