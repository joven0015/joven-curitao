import "./Experience.css";
import useInView from "../../hooks/useInView.js";
import BLS from "../../images/BLS.jpg";
import logoBLS from "../../images/logoBLS.svg";

function Header() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="experience"
      className={`experience  fade-section ${isVisible ? "visible" : ""}`}
    >
      <div className="econtainer">
        <div className="etitle-container">
          <div class="title-line"></div>
          <h2>My Experience</h2>
          <div class="title-line"></div>
        </div>
        <div className="eh1Flex">
          <h1>
            <span className="BLS">BLS</span> International Philippines Inc.
          </h1>
        </div>
        <div className="flexImg">
          <div className="eImg-container">
            <img src={BLS} alt="bls img"></img>
            <img src={logoBLS} alt="bls img" className="BLSlogo"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
