import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Avatar from "../../images/Avatar.png";
// const lorem = new LoremIpsum();
// const text = lorem.generateWords(50);
function Header() {
  const text = `A passionate developer who enjoys turning ideas into interactive, user-friendly web applications.\n 
  
I’m currently strengthening my skills in JavaScript, React, Node.js, and Supabase by building real-world projects from scratch.\n

My goal is to grow into a full-stack developer who builds smooth, user-centered experiences.\n
This portfolio showcases my hands-on learning journey, my curiosity for technology, and my love for solving problems through code.\n

I'm always eager to level up, connect with others in tech, and take on new challenges as I grow.`;

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
