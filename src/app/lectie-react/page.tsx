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
    <h3>Adăugați interactivitate oriunde aveți nevoie</h3>
    <p>Componentele React primesc date și întorc ce ar trebui să apară pe ecran. Puteți să le pasați noi date, cum ar fi când utilizatorul tastează într-un câmp. React apoi va actualiza ecranul să reflecte datele noi.</p>
    <p><strong>ListăVideoCăutabilă.js</strong></p>
    <CodeBlock block={`import { useState } from 'react';

function ListăVideoCăutabilă({ videouri }) {
  const [termen, setTermen] = useState('');
  const videouriGăsite = filtreazăVideouri(videouri, termen);
  return (
    <>
      <CâmpCăutare
        valoare={termen}
        laSchimbare={(termenNou) => setTermen(termenNou)} />
      <ListăVideo
        videouri={videouriGăsite}
        antetGol={\`Niciun rezultat pentru "\${termen}"\`} />
    </>
  );
}`} />
    <p>
      Nu trebuie să construiți întreaga dumneavoastră pagină în React.
      Adăugați React la pagina dumneavoastră existentă HTML, și randați componente React interactive oriunde în ea.
    </p>
    <p><strong><a href="#">Adaugă React în pagina ta (TODO)</a></strong></p>

    <h3>
      Alege <abbr title="full-stack">stiva-plină</abbr> cu o{" "}
      <abbr title="framework">platformă de lucru</abbr>
    </h3>
    <p>
      React este o bibliotecă.
      Vă permite să puneți componente laolaltă, dar ea nu prescrie cum să se facă rutarea și preluarea datelor.
      Ca să construiți o aplicație întreagă cu React, recomandăm o platformă de lucru React stivă-plină cum ar fi <a href="https://nextjs.org/">Next.js</a> ori <a href="https://reactrouter.com/">React Router</a>.
    </p>
    <p><strong>conferințe/[prescurtare].js</strong></p>
    <CodeBlock block={`import { bd } from './baza-de-date.js';
import { Suspense } from 'react';

async function PaginăConferință({ prescurtare }) {
  const conf = await bd.Conferințe.find({ prescurtare });
  return (
    <AspectConferință conf={conf}>
      <Suspense fallback={<ÎncărcareDiscursuri />}
        <Discursuri idConf={conf.id} />
      </Suspense>
    </AspectConferință>
  );
}

async function Discursuri({ idConf }) {
  const discursuri = await bd.Discursuri.findAll({ idConf });
  const videouri = discursuri.map(discurs => discurs.video);
  return <ListăVideoCăutabilă videouri={videouri} />;
}`} />
    <p>
      
    </p>

    <p><em>Va urma.</em></p>
  </article>;
}