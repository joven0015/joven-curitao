import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import image from "../../images/Porfoliopic.png";

function Header() {
  return (
    <section id="header" className="header">
      <div
        style={{
          width: "80%",
          height: "400px",
          display: "flex",
          boxshadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            width: "70%",
          }}
        >
          <h1 className="name">Joven Curitao</h1>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <img
            src={image}
            alt="pic here"
            style={{
              maxWidth: "100%", // Correct camelCase: max-width -> maxWidth
              height: "auto", // Correct camelCase: height remains as it is
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
