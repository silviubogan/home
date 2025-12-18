import CodeBlock from '@/components/CodeBlock';
import Image from 'next/image';

export default function Home() {
  return <article>
    <h2>Ce este React?</h2>
    <p><strong>Biblioteca pentru interfețe de utilizator în navigator și native</strong></p>
    <h3>Creează interfețe de utilizator din componente</h3>
    <p>
      React îți permite să construiești interfețe de utilizator din piese individuale numite componente.
      Creează-ți propriile componente ca <code>Miniatură</code>, <code>ButonÎmiPlace</code> și <code>Video</code>.
      Apoi combină-le în ecrane, pagini și aplicații întregi.
    </p>
    <p><strong>Video.js</strong></p>
    <CodeBlock block={`function Video({ video }) {
  return (
    <div>
      <Miniatură video={video} />
      <a href={video.url}>
        <h3>{video.titlu}</h3>
        <p>{video.descriere}</p>
      </a>
      <ButonÎmiPlace video={video} />
    </div>
  );
}`} />
    <p><em>Va urma.</em></p>

    <form action="https://www.paypal.com/ncp/payment/D6U2KM8LALZLJ" method="post" target="_blank"
        style={{ display: "inline-grid", justifyItems: "center", alignContent: "start", gap: "0.5rem" }}>
      <input className="pp-D6U2KM8LALZLJ" type="submit" value="Cumpără-mi o cafea" />
      <Image src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" width={100} height={100} />
      <section style={{ fontSize: "0.75rem" }}> Prin <Image src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" width={100} height={100} style={{ height: "0.875rem", verticalAlign: "middle" }} /></section>
    </form>
  </article>;
}