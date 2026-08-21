import GitHubIcon from "@/components/icons/GitHubIcon";
import Image from "next/image";
import FacebookIcon from "@/components/icons/FacebookIcon"; 

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
        Puteți lua legătura cu mine <a href="https://www.facebook.com/lprAqjj87310luLXY88V">
          <FacebookIcon label="pe Facebook" />
        </a> pentru păreri, ajutor ori un site de Internet.
      </p>
      <p>
        Raportați probleme ale site-ului (și dați-mi steluță!){" "}
        <a href="https://github.com/silviubogan/home/issues/new">
          <GitHubIcon label="pe GitHub" />
        </a>
        .
      </p>
      <p style={{ textAlign: "center" }}>© 2025-2026 Silviu Bogan</p>
    </footer>
  );
};

export default Footer;
