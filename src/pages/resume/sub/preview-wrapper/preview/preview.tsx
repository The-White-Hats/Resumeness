import { useSelector } from "react-redux";
import * as form from "../../../../../slices/formReducer";
import "./style.css"

type PreviewProps = {
  color: string;
};
const Preview = ({ color }: PreviewProps) => {
  const img = useSelector(form.selectImg);
  const picURL = useSelector(form.selectPicURL);
  const firstName = useSelector(form.selectFirstName);
  const lastName = useSelector(form.selectLastName);
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
  const interestArr = useSelector(form.selectInterests);

  return (
    <div className="preview">
      <div className="side-bar" style={{ backgroundColor: color }}>
        <div className="profile">
          {img&&(<img
            src={img}
            alt="profile picture"
            className={img === null ? "hide" : ""}
          />)}
          <h1>{firstName} {lastName}</h1>
          <hr />
          <h6>{title}</h6>
        </div>
        <div className="contact-info ">
          <h2
            className={
              email === "" && phone === "" && address === "" ? "hide" : ""
            }
          >
            Contact
          </h2>
          <h6>{email}</h6>
          <h6>{phone}</h6>
          <h6>{address}</h6>
        </div>
        <div
          className={
            "links " + ((linkedInURL === "" && portfolioURL === "") ? "hide" : "")
          }
        >
          <h2>Links</h2>
          <a href={linkedInURL}>
            <img
              className={linkedInURL === "" ? " hide" : ""}
              src="https://img.icons8.com/fluent/48/000000/linkedin.png"
              alt="linkedin"
            />
            <h6
              className={linkedInURL === "" ? " hide" : ""}
            > LinkedIn</h6>
          </a>
          <a href={portfolioURL}>
            <img
              className={portfolioURL === "" ? " hide" : ""}
              src="https://img.icons8.com/fluent/48/000000/domain.png"
              alt="portfolio"
            />
            <h6
              className={portfolioURL === "" ? " hide" : ""}
            > Portfolio</h6>
          </a>
        </div>
        <div className={"skills " + (skillArr.length === 0 ? "hide" : "")}>
          <h2>Skills</h2>
          <ul className="box-of-boxes">
            {skillArr.map((skill) => {
              return (
                <li key={skill.id} id={"sk" + skill.id.toString()}>
                  {skill.skill}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={"languages " + (languageArr.length === 0 ? "hide" : "")}
        >
          <h2>Languages</h2>
          {languageArr.map((language) => {
            return (
              <div key={language.id}>
                <h6 >{language.language}</h6>
                <progress
                  value={language.fluency}
                  max="100"
                ></progress>
              </div>
            );
          })}
        </div>
        <div
          className={"interests " + (interestArr.length === 0 ? "hide" : "")}
        >
          <h2>Interests</h2>
          <ul className="box-of-boxes">
            {interestArr.map((interest) => {
              return <li key={interest.id}>{interest.interest}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="main">
        <div className="summary">
          <h2>Profile</h2>
          <p>{professionalSummary}</p>
        </div>
        <div
          className={"experience " + (experienceArr.length === 0 ? "hide" : "")}
        >
          <h2>Experience</h2>
          {experienceArr.map((experience) => {
            return (
              <div key={experience.id}>
                <h3 className={(experience.jobTitle === "" && experience.company === "") ? "hide" : ""}>
                  {experience.jobTitle}, {experience.company}
                </h3>
                <h3 className={(experience.startDate === "" && experience.endDate === "") ? "hide" : ""}>
                  <i>
                    {experience.startDate} - {experience.endDate}
                  </i>
                </h3>
                <p>{experience.jobDescription}</p>
                <h3
                  className={experience.achievements.length === 0 ? "hide" : ""}
                >
                  Achievements
                </h3>
                <ul>
                  {experience.achievements.map((achievement) => {
                    return <li key={Math.random()}>{achievement}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div
          className={"education " + (educationArr.length === 0 ? "hide" : "")}
        >
          <h2>Education</h2>
          {educationArr.map((education) => {
            return (
              <div key={education.id}>
                <h3>
                  {education.degree}, {education.studyField}
                </h3>
                <h3>{education.school}</h3>
                <h3>
                  <i>{education.graduationDate}</i>
                </h3>
                <h3 className={education.awards.length === 0 ? "hide" : ""}>
                  Awards
                </h3>
                <ul>
                  {education.awards.map((award) => {
                    return <li key={Math.random()}>{award}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div
          className={
            "certifications " + (certificationArr.length === 0 ? "hide" : "")
          }
        >
          <h2>Certifications</h2>
          {certificationArr.map((certification) => {
            return (
              <div key={certification.id}>
                <h3>{certification.certification}</h3>
                <h3>
                  <i>{certification.date}</i>
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Preview;
