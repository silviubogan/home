import { MatrixButton } from "@/components/MatrixButton";
import GitHubIcon from "@/components/icons/GitHubIcon";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="list-footer">
      <form
        action="https://www.paypal.com/ncp/payment/D6U2KM8LALZLJ"
        method="post"
        target="_blank"
        style={{
          display: "inline-grid",
          justifyItems: "center",
          alignContent: "start",
          gap: "0.5rem",
          marginTop: "1rem",
        }}
      >
        <input
          className="pp-D6U2KM8LALZLJ"
          type="submit"
          value="Cumpără-mi o cafea"
        />
        <Image
          src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg"
          alt="cards"
          width={140}
          height={20}
        />
        <section style={{ fontSize: "0.75rem" }}>
          {" "}
          Prin <strong>PayPal</strong>
        </section>
      </form>
      <p>
        Lucrez cu VS Code, Git, GitHub, React, Next.js, TypeScript, HTML, CSS,
        Node.js, NPM. (În trecut cu foarte multe altele.)
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
      <p>
        Raportați probleme ale site-ului (și dați-mi steluță!){" "}
        <a href="https://github.com/silviubogan/home/issues/new">
          <GitHubIcon label="pe GitHub" />
        </a>
        .
      </p>
      <p style={{ textAlign: "center" }}>© 2025 Silviu Bogan</p>
    </footer>
  );
};

export default Footer;
