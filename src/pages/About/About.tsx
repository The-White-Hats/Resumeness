import Reviews from "./sub/Reviews/Reviews";
import './About.css';
import Creators from "./sub/Creators/Creators";

const About = () => {
  return (
    <section id="about">
      <article id="we-are">
        <div>
          <h2>
            Hi, we're Resumeness
          </h2>
          <p>
            We're a team of students from Cairo University, passionate about helping others find jobs or internships for students, and we're excited to help you build your resume!
          </p>
          <p>
            At Resumeness we believe that the first step to get a job is to have a good resume, as the statistics say, on average, each corporate job offer attracts 250 resumes. Of those candidates, 4 to 6 will get called for an interview, and we're here to help you be one of them.
          </p>
        </div>
      </article>
      <Creators />
      <Reviews />
      <section id="across-globe">
        <h2>Winning Hearts Across the Globe</h2>
        <h1>300K+</h1>
        <p>Resumes and Cover-Letters Created daily</p>
      </section>
    </section>
  );
}

export default About;