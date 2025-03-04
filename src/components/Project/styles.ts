import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;
      cursor: pointer;

      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;

        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        a > img {
          width: 5.0rem;
        }
      }

      h3 {
        margin-bottom: 2rem;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;

        a {
          color: #fff;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;

          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;

// Style de l'overlay des détails du projet
export const ProjectDetailsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .details-container {
    position: relative;
    width: 90%;
    max-width: 1000px;
    background: #2b2b2b;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    overflow-y: auto;
    max-height: 80vh;
    display: flex;
    flex-direction: column; /* Assure que les éléments sont dans un flux vertical */
    gap: 1rem; /* Ajoute de l'espace entre les éléments */
  }

  .close-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
  }

  .images {
    display: flex; /* Les images sont en ligne */
    gap: 1rem;
    overflow-x: auto; /* Permet un défilement horizontal si nécessaire */
    justify-content: center; /* Centrer les images horizontalement */
    margin-bottom: 1.5rem; /* Ajoute un espace sous les images */
    margin-top: 1rem; /* Ajoute un espace au-dessus des images */
    
    img {
    
      height: auto;
      max-width: 100%;
      object-fit: contain;
      border-radius: 1.2rem;
    }
  }

  .extra-text {
    font-size: 1.2rem;
    color: #555;
    margin-top: 0; /* Plus besoin d'un grand écart avec les images */
    margin-bottom: 1rem; /* Ajoute un espace sous le texte supplémentaire */
  }
`;

