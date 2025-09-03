import "./Project.css";
import useInView from "../../hooks/useInView.js";
import Avatar from "../../images/Avatar.png";
import eStore from "../../images/eStore.png";
function Header() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  const projects = [
    {
      id: 1,
      title: "My Portfolio",
      description: "A showcase of my projects and skills.",
      image: Avatar,
      link: "https://joven-curitao.vercel.app/",
    },
    {
      id: 2,
      title: "E-STORE(Still Working on it.)",
      description: "An e-commerce app with React & Supabase.",
      image: eStore,
      link: "https://joven-e-store.vercel.app/",
    },
  ];
  return (
    <section
      ref={ref}
      id="projects"
      className={`projects fade-section ${isVisible ? "visible" : ""}`}
    >
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Header;
