import { useState } from "react";
import { Container, ProjectDetailsOverlay } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import unityLogo from "../../assets/unityLogo.png"
import flappyGame from "../../assets/flappyGame.png"
import flop from "../../assets/flop.png"
import viteLogo from "../../assets/viteLogo.png"
import idiaLogo from "../../assets/idiaLogo.png"
import grimportLogo from "../../assets/grimportLogo.png"
import sigmaPage from "../../assets/sigmaPrime.png"
import phpLogo from "../../assets/phpLogo.png"

export function Project() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Projet Flappy",
      description:
        "Ce projet consistait à apprendre à utiliser le moteur de jeu Unity en reproduisant le jeu Flappy Bird. Le jeu est jouable sur ordinateur.",
      extraText:
        "Dans ce projet, j'ai découvert les bases de la création de jeu en 2D avec Unity. J'ai appris à utiliser les composants de base d'Unity et à gérer les collisions. J'ai également appris à utiliser le langage C# pour programmer les mécaniques du jeu.",
      technologies: ["Unity", "C#"],
      images: [unityLogo, flappyGame],
      links: [],
    },
    {
      title: "Projet Flop",
      description:
        "Ce projet consistait à améliorer le site vitrine de FlopEDT, un logiciel libre de génération automatique et de gestion coopérative des emplois du temps.",
      extraText:
        "Dans le contexte d'un projet universitaire, j'ai eu l'occasion de participer à la refonte du site Flop.org. La refonte de Flop.org a pour but de moderniser le site vitrine de Flop!Edt avec une nouvelle interface, des fonctionnalités améliorées, et une mise à jour complète de la charte graphique. Ce projet vise à promouvoir la nouvelle version du logiciel, dont la publication est prévue pour le printemps 2025.",
      technologies: ["Vitepress", "TypeScript"],
      images: [viteLogo, flop],
      links: [{ url: "https://github.com/CodeVinayak/AI-Chatbot-Assistant", icon: githubIcon }],
    },
    {
      title: "Stage chez IdiaTech",
      description:
        "Ce stage consistait à rédiger des scripts de web-mining pour les clients de l'entreprise, tout en communiquant avec eux pour comprendre leurs demandes.",
      extraText:
        "Durant ce stage, j'ai découvert le concept du web-mining et j'ai appris à utiliser le language Grimport, afin de rédiger des scripts pour automatiser la collecte de données sur le web. J'ai également appris à communiquer avec les clients pour comprendre leurs besoins et à leur fournir des solutions adaptées.",
      technologies: ["Grimport", "HTML", "CSS", "JavaScript"],
      images: [idiaLogo, grimportLogo],
      links: [{ url: "https://github.com/CodeVinayak/Jupyter-Notebook/blob/main/Credit%20Risk%20Analysis/Credit_Risk_Analysis.ipynb", icon: externalLink }],
    },
    {
      title: "Création d'un site e-commerce",
      description:
        "Ce projet consistait à développer un site de e-commerce en équipe de 3 personnes.",
      extraText:
        "Dans le contexte d'un projet universitaire, j'ai du créer un site de e-commerce en équipe de 3 personnes. J'ai travaillé sur la partie back-end du site, en utilisant le langage PHP et une base de données SQL. J'ai également participé à la création de la base de données et à la gestion des produits.",
      technologies: ["PHP", "HTML", "CSS", "SQL"],
      images: [sigmaPage, phpLogo],
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
