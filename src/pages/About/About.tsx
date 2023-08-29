import Reviews from "./sub/Reviews/Reviews";

const About = () => {
  return (
    <section id="about">
      <article>
        <h2>
          Hi, we're Resumeness
        </h2>
        <p>
          We're a team of students from Cairo University, passionate about helping others find jobs or internships for students, and we're excited to help you build your resume!
          At Resumeness we believe that the first step to get a job is to have a good resume, as the statistics say, on average, each corporate job offer attracts 250 resumes. Of those candidates, 4 to 6 will get called for an interview, and we're here to help you with that.
        </p>
      </article>
      <Reviews />
    </section>
  );
}

export default About;