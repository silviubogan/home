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
    <h3>Scrieți componente cu cod și limbaj de marcare</h3>
    <p>
      Componentele React sunt funcții JavaScript.
      Vreți să afișați condițional niște conținut?
      Folosiți o instrucțiune <code>if</code>.
      Afișați o listă?
      Folosiți funcția <code>map()</code> a tabloului.
      Învățați React învățând programare.
    </p>
    <p><strong>ListăVideo.js</strong></p>
    <CodeBlock block={`function ListăVideo({ videouri, antetGol }) {
  const număr = videouri.length;
  let antet = antetGol;
  if (număr > 0) {
    const substantiv = număr > 1 ? 'Videouri' : 'Video';
    antet = număr + ' ' + substantiv;
  }
  return (
    <section>
      <h2>{antet}</h2>
      {videouri.map(video =>
        <Video key={video.id} video={video} />
      )}
    </section>
  );
}`} />
    <p>
      Această sintaxă de marcare se cheamă JSX.
      Ea este o extensie a sintaxei JavaScript popularizată de React.
      Punând marcajul JSX aproape de conexa logică de randare face componentele React ușor de creat, menținut și șters.
    </p>

    <p><em>Va urma.</em></p>
  </article>;
}