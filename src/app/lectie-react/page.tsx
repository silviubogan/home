"use client";

import CodeBlock from "@/components/CodeBlock";
import React, { useCallback, useRef } from "react";
import useAnchor from "react-use-anchor";

function TocToggleButton({ showToc, setShowToc }: { showToc: boolean; setShowToc: () => void }) {
  return (
    <button
      onClick={() => {
        setShowToc();
      }}
    >
      {showToc ? "Închide »" : "Afișează «"}
    </button>
  );
}

export default function Home() {
  const viewPortRef = useRef<HTMLDivElement>(null);
  const [showAside, setShowAside] = React.useState(false);
  const [containerRef2, visibleIds2, allAnchors2] = useAnchor({
    heading: "h2",
    options: { rootMargin: "0% 0% 0% 0%" },
  });
  const [containerRef3, visibleIds3, allAnchors3] = useAnchor({
    heading: "h3",
    options: { rootMargin: "0% 0% 0% 0%" },
  });

  const onToggleToc = useCallback(() => {
    setShowAside(!showAside);
  }, [showAside]);
  const tocActiveClassName = "toc-active";
  const tocInactiveClassName = "toc-inactive";

  return (
    <>
      <aside className="toc-aside">
        <nav
          className="current-toc"
          style={{
            display: showAside ? "block" : "none",
          }}
        >
          {allAnchors2.map((heading) => (
            <React.Fragment key={heading.id}>
              <a
                key={heading.id}
                href={`#${heading.id}`}
                /* Multiple sections may be visible in the viewport simultaneously.
                The visibleIds array is ordered according to their position from top to bottom.
                Therefore, visibleIds[0] will always represent the first section visible in the viewport.
              */
                className={`${
                  visibleIds2[0] === heading.id ? tocActiveClassName : tocInactiveClassName
                }`}
              >
                {heading.title}
              </a>
              <div style={{ marginLeft: "1rem" }}>
                {allAnchors3
                  .filter((x) => x.id.startsWith(heading.id + "-"))
                  .map((h) => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      /* Multiple sections may be visible in the viewport simultaneously.
                      The visibleIds array is ordered according to their position from top to bottom.
                      Therefore, visibleIds[0] will always represent the first section visible in the viewport.
                    */
                      className={`${
                        visibleIds3[0] === h.id ? tocActiveClassName : tocInactiveClassName
                      }`}
                    >
                      {h.title}
                    </a>
                  ))}
              </div>
            </React.Fragment>
          ))}
        </nav>
        <TocToggleButton showToc={showAside} setShowToc={onToggleToc} />
      </aside>
      <div className="viewport" ref={viewPortRef}>
        <div ref={containerRef3}>
          <article ref={containerRef2}>
            <h2 id="ce-este-react">Ce este React?</h2>
            <p>
              <strong>
                Biblioteca pentru interfețe de utilizator în navigator și native
              </strong>
            </p>
            <h3 id="ce-este-react-creeati-interfete">
              Creeați interfețe de utilizator din componente
            </h3>
            <p>
              React vă permite să construiți interfețe de utilizator din piese
              individuale numite componente. Creeați-vă propriile componente ca{" "}
              <code>Miniatură</code>, <code>ButonÎmiPlace</code> și{" "}
              <code>Video</code>. Apoi combinați-le în ecrane, pagini și
              aplicații întregi.
            </p>
            <p>
              <strong>Video.js</strong>
            </p>
            <CodeBlock
              block={`function Video({ video }) {
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
}`}
            />
            <p>
              Fie că lucrați singur ori cu mii de alți dezvoltatori, a folosi
              React se simte la fel. Este proiectat să vă lase să combinați fără
              să vreți componente scrise de oameni, echipe și organizații
              independente.
            </p>
            <h3 id="ce-este-react-scrieti-componente">
              Scrieți componente cu cod și limbaj de marcare
            </h3>
            <p>
              Componentele React sunt funcții JavaScript. Vreți să afișați
              condițional niște conținut? Folosiți o instrucțiune{" "}
              <code>if</code>. Afișați o listă? Folosiți funcția{" "}
              <code>map()</code> a tabloului. Învățați React învățând
              programare.
            </p>
            <p>
              <strong>ListăVideo.js</strong>
            </p>
            <CodeBlock
              block={`function ListăVideo({ videouri, antetGol }) {
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
}`}
            />
            <p>
              Această sintaxă de marcare se cheamă JSX. Ea este o extensie a
              sintaxei JavaScript popularizată de React. Punând marcajul JSX
              aproape de conexa logică de randare face componentele React ușor
              de creat, menținut și șters.
            </p>
            <h3 id="ce-este-react-adaugati-interactivitate">
              Adăugați interactivitate oriunde aveți nevoie
            </h3>
            <p>
              Componentele React primesc date și întorc ce ar trebui să apară pe
              ecran. Puteți să le pasați noi date, cum ar fi când utilizatorul
              tastează într-un câmp. React apoi va actualiza ecranul să reflecte
              datele noi.
            </p>
            <p>
              <strong>ListăVideoCăutabilă.js</strong>
            </p>
            <CodeBlock
              block={`import { useState } from 'react';

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
}`}
            />
            <p>
              Nu trebuie să construiți întreaga dumneavoastră pagină în React.
              Adăugați React la pagina dumneavoastră existentă HTML, și randați
              componente React interactive oriunde în ea.
            </p>
            <p>
              <strong>
                <a href="#">Adaugă React în pagina ta (TODO)</a>
              </strong>
            </p>

            <h3 id="ce-este-react-alegeti-stiva-plina">
              Alegeți <abbr title="full-stack">stiva-plină</abbr> cu o{" "}
              <abbr title="framework">platformă de lucru</abbr>
            </h3>
            <p>
              React este o bibliotecă. Vă permite să puneți componente laolaltă,
              dar ea nu prescrie cum să se facă rutarea și preluarea datelor. Ca
              să construiți o aplicație întreagă cu React, recomandăm o
              platformă de lucru React stivă-plină cum ar fi{" "}
              <a href="https://nextjs.org/">Next.js</a> ori{" "}
              <a href="https://reactrouter.com/">React Router</a>.
            </p>
            <p>
              <strong>conferințe/[prescurtare].js</strong>
            </p>
            <CodeBlock
              block={`import { bd } from './baza-de-date.js';
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
}`}
            />
            <p>
              React este și o arhitectură. Platformele de lucru care o
              implementează vă permit să preluați date în componente asincrone
              care se execută pe server ori chiar în timpul{" "}
              <abbr title="build">construcției</abbr>. Citiți date dintr-un
              fișier ori o bază de date, și pasați-le în jos componentelor
              dumneavoastră interactive.
            </p>
            <p>
              <strong>
                <a href="#">Începeți cu o platformă de lucru (TODO)</a>
              </strong>
            </p>

            <p>
              <em>Va urma.</em>
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
