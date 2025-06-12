import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { LoremIpsum } from "lorem-ipsum";
import Avatar from "../../images/Avatar.png";
// const lorem = new LoremIpsum();
// const text = lorem.generateWords(50);
function Header() {
  const lorem = new LoremIpsum();
  const text = lorem.generateWords(50);

  return (
    <header id="header" className="header">
      <div id="hero">
        <div id="intro">
          <div>
            <div id="Hi">Hi I’m</div>
            <div id="full_name">Joven Curitao</div>
            <div id="career">Computer Engineer & Developer</div>
            <div id="description">
              <p>{text}</p>
            </div>
          </div>
        </div>
        <div id="intro_img">
          <img src={Avatar} alt="Avatar"></img>
          <div class="ball-shadow"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
