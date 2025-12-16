import { MatrixButton } from "@/components/MatrixButton";
import GitHubIcon from "@/components/icons/GitHubIcon";

const Footer = () => {
  return (
    <footer className="list-footer">
      <p>
        Lucrez cu Manjaro Linux / Windows, VS Code, Git, GitHub,
        React, Next.js, TypeScript, HTML, CSS, Node.js, NPM.
      </p>
      <p>
        Luați legătura cu mine{" "}
        <MatrixButton
          value="pe X (silviubogan)"
          href="https://x.com/silviubogan"
        />{" "}
        pentru păreri, ajutor ori un site de Internet.
      </p>
      <p>
        Pe{" "}
        <a href="https://www.github.com/silviubogan">
          <GitHubIcon label="GitHub" />
        </a>{" "}
        am unele depozite interesante și contribuții la Volto.
      </p>
      <p style={{ textAlign: "center" }}>© 2025 Silviu Bogan</p>
    </footer>
  );
};

export default Footer;
