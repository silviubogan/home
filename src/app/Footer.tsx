import { MatrixButton } from "@/components/MatrixButton";
import GitHubIcon from "@/components/icons/GitHubIcon";

const Footer = () => {
  return (
    <footer className="list-footer">
      <p>
        Lucrez cu Manjaro, NeoVim, Git, GitHub, React, Next.js, TypeScript,
        HTML, CSS, JavaScript, Volto.
      </p>
      <p>
        Contactați-mă{" "}
        <MatrixButton
          value="pe X (silviubogan)"
          href="https://x.com/silviubogan"
        />{" "}
        pentru feedback, ajutor sau alte întrebări.
      </p>
      <p>
        Pe{" "}
        <a href="https://www.github.com/silviubogan">
          <GitHubIcon label="GitHub" />
        </a>{" "}
        am câteva depozite interesante și contribuții la Volto.
      </p>
      <p style={{ textAlign: "center" }}>© 2025 Silviu Bogan</p>
    </footer>
  );
};

export default Footer;
