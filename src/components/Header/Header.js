import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Avatar from "../../images/Avatar.png";
// const lorem = new LoremIpsum();
// const text = lorem.generateWords(50);

function Header() {
  const text = ` a curious web developer who loves turning ideas into simple, smooth web experiences.
I'm growing my skills in React, Node, and Supabase by building and learning every day.
This portfolio showcases my hands-on learning journey, my curiosity for technology, and my love for solving problems through code.\n
I'm always eager to level up, connect with others in tech, and take on new challenges as I grow.`;

  return (
    <header id="header" className="header">
      <section className="hero">
        <div className="hero_container">
          <div className="intro hi">
            <h1>Hi I’m</h1>
          </div>
          <div className="intro name">
            <h1>Joven Curitao</h1>
          </div>
          <div className="intro title">
            <p>Chasing elegance through the chaos of creative computation.</p>
          </div>
          <div className="intro description">
            I’m an aspiring software engineer focused on creating clean,
            user-friendly digital experiences by turning complex problems into
            simple, elegant solutions and building scalable, intuitive software.
          </div>
          <div className="intro button">
            <button>button</button>
          </div>
          <div className="intro img">img</div>
        </div>
      </section>
    </header>
  );
}

export default Header;
