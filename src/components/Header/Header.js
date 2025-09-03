import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

import Avatar from "../../images/Avatar.png";
import Resume from "../../files/Joven-Curitao-Resume.pdf";
import { FaDownload } from "react-icons/fa";
// import Avatar from "../../images/Avatar.png";
// const lorem = new LoremIpsum();
// const text = lorem.generateWords(50);

function Header() {
  return (
    <header id="header" className="section header">
      <section className="hero">
        <div className="hero_container">
          <div className="intro hi ">
            <h1>Hi I’m</h1>
          </div>
          <div className="intro name center-text">
            <h1>Joven Curitao</h1>
          </div>
          <div className="intro title center-text">
            <p>Chasing elegance through the chaos of creative computation.</p>
          </div>
          <div className="intro description center-text">
            <p>
              I’m an aspiring software engineer focused on creating clean,
              user-friendly digital experiences by turning complex problems into
              simple, elegant solutions and building scalable, intuitive
              softwares.
            </p>
          </div>
          <div className="intro button ">
            <a href={Resume} download>
              <button
                className="resumeBtn"
                style={{
                  borderRadius: 3,
                  color: "white",
                  padding: 5,
                  backgroundColor: "#001833",
                }}
              >
                Resume
                <FaDownload style={{ paddingBottom: 3, margin: 5 }} />
              </button>
            </a>
          </div>
          <div className="intro img">
            <div className="img-container">
              <img src={Avatar} alt="heroImg" className="heroImg" />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
