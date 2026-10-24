import { GlobeIcon, LinkedInIcon } from "../components/Logos";
import AuroraBackground from "../components/Aurora";

const base = import.meta.env.BASE_URL;

export default function Home() {
  return (
    <>
      <AuroraBackground />

      <section className="hero">
        <img
          src={`${base}mepfp.JPG`}
          className="pfp"
          width="100"
          height="100"
          alt="Bianca Schutz"
        />
        <div className="content">
          <h1 className="name">Bianca Schutz</h1>
          <p className="caption">
            Building interactive, accessible visuals using D3.
          </p>
          <div className="links">
            <a className="link-button" href="https://www.biancaschutz.com">
              <GlobeIcon />
              Portfolio
            </a>
            <a
              className="btn link-button"
              href="https://www.linkedin.com/in/biancaschutz"
            >
              <LinkedInIcon />
              Linkedin
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
