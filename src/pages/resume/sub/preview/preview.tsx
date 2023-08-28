import { useDispatch, useSelector } from 'react-redux';
import * as form from '../../../../slices/formReducer';


let i = 3;

const Preview = (color: string) => {

  const picURL = useSelector(form.selectPicURL);
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

  {/* FOR TESTING PURPOSES ONLY */   /*THIS CODE BELONGS TO FORM COMPONENT (HAMED PART)*/ }
  const dispatch = useDispatch();

  const setEmail = (email: string) => dispatch(form.setEmail(email));
  const setPhone = (phone: string) => dispatch(form.setPhone(phone));
  const setAddress = (address: string) => dispatch(form.setAddress(address));
  const setLinkedInURL = (linkedInURL: string) => dispatch(form.setLinkedInURL(linkedInURL));
  const setPortfolioURL = (portfolioURL: string) => dispatch(form.setPortfolioURL(portfolioURL));
  const setProfessionalSummary = (professionalSummary: string) => dispatch(form.setProfessionalSummary(professionalSummary));
  const setExperience = (experience: form.experience[]) => dispatch(form.setExperience(experience));
  const setEducation = (education: form.education[]) => dispatch(form.setEducation(education));

  const setSkills = (skills: form.skill[]) => dispatch(form.setSkills(skills));
  const wrapper = () => {
    return setSkills([...skillArr, { id: i++, skill: 'new skill' }]);
  }
  //setEmail('Johnnnnnnnnn cenaaaaaaaaaa Doe');
  

  return (
    <div className="preview">
      <div className="side-bar" style={{ backgroundColor: color }}>
        <div className="profile">
          <img src={picURL} alt="profile picture" className={(picURL === '') ? "hide":''}/>
          <h1>{name}</h1>
          <hr />
          <h6>{title}</h6>
        </div>
        <div className="contact-info ">
          <h2 className={(email === '' && phone === '' && address === '') ? "hide":''}>Contact</h2>
          <h6>{email}</h6>
          <h6>{phone}</h6>
          <h6>{address}</h6>
        </div>
        <div className={"links" + (linkedInURL === '' && portfolioURL === '') ? "hide":''}>
          <h2>Links</h2>
          <a href={linkedInURL} className={(linkedInURL === '') ? "hide":''}>
            <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="linkedin" /> <h6>LinkedIn</h6>
          </a>
          <a href={portfolioURL} className={(portfolioURL === '') ? "hide":''}>
            <img src="https://img.icons8.com/fluent/48/000000/domain.png" alt="portfolio" />
            <h6>Portfolio</h6>
          </a>
        </div>
        <div className={"skills " + ((skillArr.length === 0) ? "hide":'')}>
          <h2>Skills</h2>
          <ul className="box-of-boxes">
            {skillArr.map((skill) => {
              return (
                <li key={skill.id} id={"sk" + skill.id.toString()}>{skill.skill}</li>
              );
            })}
          </ul>
        </div>
        <div className={"languages " + ((languageArr.length === 0) ? "hide":'')}>
          <h2>Languages</h2>
          {languageArr.map((language) => {
            return (
              <div key={language.id}>
                <h6 key={language.id}>{language.language}</h6>
                <progress key={language.id +1} value={language.fluency} max="100"></progress>
              </div>
            );
          })}
        </div>
        <div className={"interests " + ((interestArr.length === 0) ? "hide":'')}>
          <h2>Interests</h2>
          <ul className="box-of-boxes">
            {interestArr.map((interest) => {
              return (
                <li key={interest.id}>{interest.interest}</li>
              );
            })}
          </ul>
        </div>
        <button onClick={wrapper}>add a new skill</button>
      </div>
      <div className="main">
        <div className="summary">
          <h2>Profile</h2>
          <p>{professionalSummary}</p>
        </div>
        <div className="experience">
          <h2>Experience</h2>
        </div>
      </div>
    </div>
  );
}

export default Preview;
