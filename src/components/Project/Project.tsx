import { useState } from "react";
import { Container, ProjectDetailsOverlay } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import unityLogo from "../../assets/unityLogo.png"
import flappyGame from "../../assets/flappyGame.png"

export function Project() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Projet Flappy",
      description:
        "Ce projet consistait à apprendre à utiliser le moteur de jeu Unity en reproduisant le jeu Flappy Bird. Le jeu est jouable sur ordinateur.",
      extraText:
        "Dans ce projet, j'ai découvert la physique des jeux et comment gérer les collisions. J'ai également travaillé sur les animations et l'intégration de sons.",
      technologies: ["Unity", "C#"],
      images: [unityLogo, flappyGame],
      links: [],
    },
    {
      title: "Projet Flop",
      description:
        "Ce projet consistait à améliorer le site vitrine de FlopEDT, un logiciel libre de génération automatique et de gestion coopérative des emplois du temps.",
      extraText:
        "J'ai principalement travaillé sur la refonte du design et l'optimisation des performances du site. J'ai aussi amélioré l'accessibilité et la compatibilité mobile.",
      technologies: ["Vitepress", "TypeScript"],
      images: ["/images/flop1.png", "/images/flop2.png"],
      links: [{ url: "https://github.com/CodeVinayak/AI-Chatbot-Assistant", icon: githubIcon }],
    },
    {
      title: "Stage chez IdiaTech",
      description:
        "Ce stage consistait à rédiger des scripts de web-mining pour les clients de l'entreprise, tout en communiquant avec eux pour comprendre leurs demandes.",
      extraText:
        "J'ai utilisé des outils de scraping avancés et appris à structurer des bases de données pour stocker et analyser les informations collectées.",
      technologies: ["Grimport", "HTML", "CSS", "JavaScript"],
      images: ["/images/idia1.png", "/images/idia2.png"],
      links: [{ url: "https://github.com/CodeVinayak/Jupyter-Notebook/blob/main/Credit%20Risk%20Analysis/Credit_Risk_Analysis.ipynb", icon: externalLink }],
    },
    {
      title: "Création d'un site e-commerce",
      description:
        "Ce projet consistait à développer un site de e-commerce en équipe de 3 personnes.",
      extraText:
        "J'ai travaillé sur l'architecture backend et la gestion des transactions. Ce projet m'a permis d'apprendre à gérer la sécurité des paiements en ligne.",
      technologies: ["PHP", "HTML", "CSS", "SQL"],
      images: ["/images/ecommerce1.png", "/images/ecommerce2.png"],
      links: [],
    },
  ];

  return (
    <Container id="project">
      <h2>Mes projets</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation animateIn="flipInX" key={index}>
            <div
              className="project"
              onClick={() => setSelectedProject(index)}
            >
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  {project.links.map((link, linkIndex) => (
                    <a key={linkIndex} href={link.url} target="_blank" rel="noreferrer">
                      <img src={link.icon} alt="Visit site" />
                    </a>
                  ))}
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {selectedProject !== null && (
        <ProjectDetailsOverlay>
          <div className="details-container">
            <button className="close-btn" onClick={() => setSelectedProject(null)}>
              ✖
            </button>
            <h2>{projects[selectedProject].title}</h2>
            <p>{projects[selectedProject].description}</p>
            {/* <ul className="tech-list">
              {projects[selectedProject].technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul> */}
            <div className="images">
              {projects[selectedProject].images.map((image, imgIndex) => (
                <img key={imgIndex} src={image} alt={`Screenshot ${imgIndex + 1}`} />
              ))}

            </div>
            {projects[selectedProject].extraText && <p className="extra-text">{projects[selectedProject].extraText}</p>}

          </div>
        </ProjectDetailsOverlay>
      )}
    </Container>
  );
}
