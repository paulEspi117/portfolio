import { Container } from "./styles";
import VinayakSingh from "../../assets/VinayakSingh.webp";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import moi from "../../assets/moi.png";
import phpLogo from "../../assets/phpIcon.svg";
import javaIcon from "../../assets/javaIcon.svg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>À propos de moi</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Je m'appelle Paul Espinasse, et je suis passionné par l'informatique et les nouvelles technologies. Curieux et toujours en quête d’apprentissage, j’aime explorer différents domaines du développement .
​          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          Depuis mes débuts, j’ai eu l’opportunité de travailler sur plusieurs projets mêlant développement et travail d'équipe. Mon objectif est de créer des solutions innovantes et efficaces tout en continuant à apprendre et à évoluer dans ce domaine en constante évolution.
          ​</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          Sur ce portfolio, vous trouverez quelques-uns de mes projets récents. N’hésitez pas à les explorer et à me contacter pour en discuter !</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          Si vous souhaitez échanger sur un projet ou une collaboration, vous pouvez me contacter via mon email.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Mes languages:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={phpLogo} alt="PHP" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={javaIcon} alt="java" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={moi} alt="Vinayak Singh" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
