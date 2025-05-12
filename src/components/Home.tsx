"use client";

import Image from "next/image";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import { Gallery } from "@/components/Gallery";
import { MatrixButton } from "@/components/MatrixButton";
import { MyImages } from "@/lib/images";

// am scris poezii, inclusiv optimiste, în exportul de pe Facebook și silviubogan.com

export function MegaHome({ images }: { images: MyImages }) {
  return (
    <main>
      <h1>Portofoliu: Silviu Bogan</h1>
      <Image src="avatar.jpg" width={250} height={150} alt="avatar" />
      <ol>
        <li>
          <p>Am tradus din engleză în română:</p>
          <ol>
            <li>
              <a href="https://wiki.manjaro.org/index.php/Main_Page/ro">
                pagina principală a Wiki-ului Linux Manjaro
              </a>
            </li>
            <li>
              <a href="https://wiki.manjaro.org/index.php/Manjaro/ro">
                https://wiki.manjaro.org/index.php/Manjaro/ro
              </a>
            </li>
            <li>
              <a href="https://wiki.manjaro.org/index.php/About_Manjaro/ro">
                https://wiki.manjaro.org/index.php/About_Manjaro/ro
              </a>
            </li>
          </ol>
        </li>
        <li>
          Am postat câteva articole pe blogurile{" "}
          <a href="https//calealinux.wordpress.com">calealinux.wordpress.com</a>{" "}
          și{" "}
          <a href="https://silviubogan.blogspot.com/">
            https://silviubogan.blogspot.com/
          </a>
          .
        </li>
        <li>
          <a href="https://stackexchange.com/users/94724">
            <Image
              src="https://stackexchange.com/users/flair/94724.png"
              width="208"
              height="58"
              alt="profile for silviubogan on Stack Exchange, a network of free, community-driven Q&amp;A sites"
              title="profile for silviubogan on Stack Exchange, a network of free, community-driven Q&amp;A sites"
            />
          </a>
        </li>
        <li>
          <p>Am realizat filme pe YouTube:</p>
          <ol>
            <li>
              Controlul versiunilor cu Git (teorie)
              <LiteYouTubeEmbed
                id="EWXL0Xjh0P0"
                title="Controlul versiunilor cu Git (teorie)"
              />
            </li>
            <li>
              Un început de proiect Turnurile din Hanoi în Unity
              <LiteYouTubeEmbed
                id="itq3OVe3pqs"
                title="Un început de proiect Turnurile din Hanoi în Unity"
              />
            </li>
            <li>
              Truc pentru a scrie repede mesajele de commit Git
              <LiteYouTubeEmbed
                id="gioabeN6O4A"
                title="Truc pentru a scrie repede mesajele de commit Git"
              />
            </li>
            <li>
              Câteva minute despre NPM
              <LiteYouTubeEmbed
                id="EYhT94V9Kas"
                title="Câteva minute despre NPM"
              />
            </li>
            <li>
              Versuri recitate: Poezie picată din Cer
              <LiteYouTubeEmbed
                id="rNs7LWg2wdc"
                title="Poezie picată din Cer"
              />
            </li>
            <li>
              Introducere în CodeSandbox, prototip
              <LiteYouTubeEmbed
                id="w24QZSyYNmE"
                title="WIP Video 20.12.2020 (primul din 2021)"
              />
            </li>
            <li>
              Tutorial Unity pentru crearea unui ecran cu numărătoare inversă
              <LiteYouTubeEmbed
                id="vio7nzu0sBg"
                title="Tutorial Unity pentru crearea unui ecran cu numărătoare inversă"
              />
            </li>
            <li>
              Tutorial Unity pentru crearea unui indicator de sănătate
              <LiteYouTubeEmbed
                id="Zdz6NFnfFwA"
                title="Tutorial Unity pentru crearea unui indicator de sănătate"
              />
            </li>
            <li>
              Tutorial Unity pentru crearea unei animații de glisare
              <LiteYouTubeEmbed
                id="L3ePQSttC2s"
                title="Tutorial Unity pentru crearea unei animații de glisare"
              />
            </li>
            <li>
              Scurt video de prezentare a unui prototip de gestionar de fișiere
              bazat pe Qt (Qt Widgets)
              <LiteYouTubeEmbed
                id="fuwDizAz6j0"
                title="qt-file-manager 2017 08 26 01 12 19"
              />
            </li>
            <li>
              Analiza aplicației Weather pe Windows 10 (25.09.2016)
              <LiteYouTubeEmbed
                id="CmmkqpDIs0M"
                title="Analiza aplicației Weather pe Windows 10 (25.09.2016)"
              />
            </li>
          </ol>
        </li>
        <li>
          <p>
            Am realizat în Electron{" "}
            <a href="https://github.com/silviubogan/reminder-to-see">
              un program
            </a>{" "}
            testat pe Linux și Windows care pune periodic utilizatorul să facă
            clic pentru a continua, evitând orbecăirea.
          </p>
          <Gallery images={images.screenshot} />
        </li>
        <li>
          Am realizat în WPF un joc educațional de tip blocuri de memorie:
          <Gallery images={images.pozeJoc} />
        </li>
        <li>
          Am realizat în WPF un joc educațional de tip snake:
          <Gallery images={images.pozeJocSnake} />
        </li>
        <li>
          Am realizat desene manuale:
          <Gallery images={images.deseneManuale} />
        </li>
        <li>
          Am realizat desene digitale:
          <Gallery images={images.deseneDigitaleOriginale} />
        </li>
        <li>
          Am realizat poze:
          <Gallery images={images.poze} />
        </li>
        <li>
          Am realizat grafică în GIMP:
          <Gallery images={images.graficăÎnGimp} />
        </li>
        <li>
          Am realizat teme WordPress:
          <Gallery images={images.temeWordPress} />
          și câteva site-uri pentru o afacere:
          <Gallery images={images.afacereWordPress} />
        </li>
        <li>
          Am realizat artă CSS:
          <Gallery images={images.artăCss} />
        </li>
        <li>
          Am realizat artă:
          <Gallery images={images.artă} />
        </li>
        <li>
          Pentru realizări am primit diplome, de exemplu:
          <Gallery images={images.diplome} />
        </li>
        <li>
          Am realizat postări pe blogul vechi:
          <Gallery images={images.articoleBlogVechi} />
        </li>
        <li>
          Am realizat cover-uri la melodii, ca:
          <p>Vama Veche - Epilog (cover)</p>
          <LiteYouTubeEmbed
            id="YOHbc14l54c"
            title="Vama Veche - Epilog (cover)"
          />
        </li>
      </ol>
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
            <svg
              width="1rem"
              height="1rem"
              viewBox="0 0 48 48"
              style={{ display: "inline" }}
            >
              <path d="M24,1.9a21.6,21.6,0,0,0-6.8,42.2c1,.2,1.8-.9,1.8-1.8V39.4c-6,1.3-7.9-2.9-7.9-2.9a6.5,6.5,0,0,0-2.2-3.2C6.9,31.9,9,32,9,32a4.3,4.3,0,0,1,3.3,2c1.7,2.9,5.5,2.6,6.7,2.1a5.4,5.4,0,0,1,.5-2.9C12.7,32,9,28,9,22.6A10.7,10.7,0,0,1,11.9,15a6.2,6.2,0,0,1,.3-6.4,8.9,8.9,0,0,1,6.4,2.9,15.1,15.1,0,0,1,5.4-.8,17.1,17.1,0,0,1,5.4.7,9,9,0,0,1,6.4-2.8,6.5,6.5,0,0,1,.4,6.4A10.7,10.7,0,0,1,39,22.6C39,28,35.3,32,28.5,33.2a5.4,5.4,0,0,1,.5,2.9v6.2a1.8,1.8,0,0,0,1.9,1.8A21.7,21.7,0,0,0,24,1.9Z" />
            </svg>{" "}
            GitHub
          </a>{" "}
          am câteva depozite interesante și contribuții la Volto.
        </p>
      </footer>
    </main>
  );
}
