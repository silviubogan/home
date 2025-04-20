"use client";

import Image from "next/image";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import { Gallery } from "@/components/Gallery";
import { MyImages } from "@/lib/images";

// am scris poezii, inclusiv optimiste, în exportul de pe Facebook și silviubogan.com

export function MegaHome({ images }: { images: MyImages }) {
  return <main>
    <h1>Portofoliu: Silviu Bogan</h1>
    <Image src="avatar.jpg" width={250} height={150} alt="avatar" />
    <ol>
      <li>
        <p>Am tradus din engleză în română:</p>
        <ol>
          <li><a href="https://wiki.manjaro.org/index.php/Main_Page/ro">pagina principală a Wiki-ului Linux Manjaro</a></li>
          <li><a href="https://wiki.manjaro.org/index.php/Manjaro/ro">https://wiki.manjaro.org/index.php/Manjaro/ro</a></li>
          <li><a href="https://wiki.manjaro.org/index.php/About_Manjaro/ro">https://wiki.manjaro.org/index.php/About_Manjaro/ro</a></li>
        </ol>
      </li>
      <li>
        Am postat câteva articole pe blogurile <a href="https//calealinux.wordpress.com">calealinux.wordpress.com</a> și <a href="https://silviubogan.blogspot.com/">https://silviubogan.blogspot.com/</a>.
      </li>
      <li>
        <a href="https://stackexchange.com/users/94724">
          <Image src="https://stackexchange.com/users/flair/94724.png" width="208" height="58" alt="profile for silviubogan on Stack Exchange, a network of free, community-driven Q&amp;A sites" title="profile for silviubogan on Stack Exchange, a network of free, community-driven Q&amp;A sites" />
        </a>
      </li>
      <li>
        <p>Am realizat filme pe YouTube:</p>
        <ol>
          <li>
            Controlul versiunilor cu Git (teorie)
            <LiteYouTubeEmbed id="EWXL0Xjh0P0"
              title="Controlul versiunilor cu Git (teorie)" />
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
            <LiteYouTubeEmbed id="gioabeN6O4A"
              title="Truc pentru a scrie repede mesajele de commit Git" />
          </li>
          <li>
            Câteva minute despre NPM
            <LiteYouTubeEmbed id="EYhT94V9Kas"
              title="Câteva minute despre NPM" />
          </li>
          <li>Versuri recitate: Poezie picată din Cer
            <LiteYouTubeEmbed id="rNs7LWg2wdc"
              title="Poezie picată din Cer" /></li>
          <li>Introducere în CodeSandbox, prototip
            <LiteYouTubeEmbed id="w24QZSyYNmE"
              title="WIP Video 20.12.2020 (primul din 2021)" /></li>
          <li>
            Tutorial Unity pentru crearea unui ecran cu numărătoare inversă
            <LiteYouTubeEmbed id="vio7nzu0sBg"
              title="Tutorial Unity pentru crearea unui ecran cu numărătoare inversă" />
          </li>
          <li>Tutorial Unity pentru crearea unui indicator de sănătate
            <LiteYouTubeEmbed id="Zdz6NFnfFwA"
              title="Tutorial Unity pentru crearea unui indicator de sănătate" />
          </li>
          <li>Tutorial Unity pentru crearea unei animații de glisare
            <LiteYouTubeEmbed id="L3ePQSttC2s"
              title="Tutorial Unity pentru crearea unei animații de glisare" />
          </li>
          <li>
            Scurt video de prezentare a unui prototip de gestionar de fișiere bazat pe Qt (Qt Widgets)
            <LiteYouTubeEmbed id="fuwDizAz6j0"
              title="qt-file-manager 2017 08 26 01 12 19" />
          </li>
          <li>
            Analiza aplicației Weather pe Windows 10 (25.09.2016)
            <LiteYouTubeEmbed id="CmmkqpDIs0M"
              title="Analiza aplicației Weather pe Windows 10 (25.09.2016)" />
          </li>
        </ol>
      </li>
      <li>
        <p>
          Am realizat în Electron <a href="https://github.com/silviubogan/reminder-to-see">un program</a> testat pe Linux și Windows care pune periodic utilizatorul să facă clic pentru a continua, evitând orbecăirea.
        </p>
        <Gallery images={images.screenshot} />
      </li><li>
        Am realizat în WPF un joc educațional de tip blocuri de memorie:
        <Gallery images={images.pozeJoc} />
      </li><li>
        Am realizat în WPF un joc educațional de tip snake:
        <Gallery images={images.pozeJocSnake} />
      </li><li>
        Am realizat copii ale unor desene:
        <Gallery images={images.deseneManualeCopii} />
      </li><li>
        Am realizat desene digitale:
        <Gallery images={images.deseneDigitaleOriginale} />
      </li>
      <li>
        Am realizat desene manuale:
        <Gallery images={images.deseneManualeOriginale} /></li>
      <li>
        Am realizat poze:
        <Gallery images={images.poze} /></li>
      <li>
        Am realizat grafică în GIMP:
        <Gallery images={images.graficăÎnGimp} />
      </li>
      <li>Am realizat teme WordPress:
        <Gallery images={images.temeWordPress} />
        și câteva site-uri pentru o afacere:
        <Gallery images={images.afacereWordPress} />
      </li>
      <li>Am realizat artă CSS:
        <Gallery images={images.artăCss} />
      </li>
      <li>Am realizat artă:
        <Gallery images={images.artă} /></li>
      <li>Pentru realizări am primit diplome, de exemplu:
        <Gallery images={images.diplome} />
      </li>
      <li>Am realizat postări pe blogul vechi:
        <Gallery images={images.articoleBlogVechi} />
      </li>
    </ol>
    <p className="list-footer">
      Pe <a href="https//www.github.com/silviubogan">www.github.com/silviubogan</a> am
      câteva depozite și contribuții la Volto.
    </p>
  </main>;
};