import CodeBlock from '@/components/CodeBlock';

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
    <p>
      Fie că lucrați singur ori cu mii de alți dezvoltatori, a folosi React se simte la fel.
      Este proiectat să vă lase să combinați fără să vreți componente scrise de oameni, echipe și organizații independente.
    </p>

    <p><em>Va urma.</em></p>
  </article>;
}