import "./About.css";
import aboutImg from "../../images/hero.jpg";
function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-img">
          <img src={aboutImg} alt="myImg" />
        </div>
        <div className="about-title">
          <div class="title-line"></div>
          <h2>About Me</h2>
          <div class="title-line"></div>
        </div>
        <div className="about-description">
          <p>
            Hello! I'm Joven. I love building things online and growing with
            every experience and project. I hold a Bachelor's degree in{" "}
            <span className="comEn">Computer Engineering</span> but chose to
            pursue my passion for becoming a professional software engineer.
            Right now, I'm actively deepening my expertise in web development
            and creating projects including this portfolio.
            <br />
            <br />
            I love discovering smarter ways to build seamless user experiences
            through clean, efficient, and scalable code. I see work as a
            continuous learning experience and value opportunities to
            collaborate with those who are as generous with their knowledge as I
            am eager to learn. Ultimately, my goal is to build beautiful,
            meaningful things with people who inspire me to do my best work.
            <br />
            <br />
            I’m excited to connect, collaborate, and continue growing in this
            ever-evolving field. If you’d like to work together or just say hi,
            feel free to reach out!
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
