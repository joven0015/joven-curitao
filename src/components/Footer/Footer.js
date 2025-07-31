import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-Container">
      <div className="bioLinks">
        <ul className="unBioLinks">
          <li>
            <a
              href="https://facebook.com/joven0015"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/joven-curitao-3207ab21a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/joven0015"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <div></div>
      </div>
      <div className="Email">
        <a href="mailto:jovencuritao06@gmail.com">Jovencuritao06@gmail.com</a>
      </div>
    </div>
  );
};

export default Footer;
