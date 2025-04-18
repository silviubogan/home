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
        Am realizat video cu un început de proiect Turnurile din Hanoi în Unity.<br />
        <LiteYouTubeEmbed
          id="itq3OVe3pqs"
          title="început de proiect Turnurile din Hanoi în Unity"
        />
      </li>
      {images && (
        <><li>
          <p>
            Am realizat în Electron <a href="https://github.com/silviubogan/reminder-to-see">un program</a> testat pe Linux și Windows care pune periodic utilizatorul să facă clic pentru a continua, evitând orbecăirea.
          </p>
          <Gallery images={images.screenshot!} />
        </li><li>
            Am realizat în WPF un joc educațional de tip blocuri de memorie:
            <Gallery images={images.pozeJoc!} />
          </li><li>
            Am realizat copii ale unor desene:
            <Gallery images={images.deseneManualeCopii!} />
          </li><li>
            Am realizat desene digitale:
            <Gallery images={images.deseneDigitaleOriginale!} />
          </li>
          <li>
            Am realizat desene manuale:
            <Gallery images={images.deseneManualeOriginale!} /></li>
          <li>
            Am realizat poze:
            <Gallery images={images.poze!} /></li>
          <li>
            Am realizat grafică cu citat în GIMP:
            <Gallery images={images.citatCuGraficăÎnGimp} />
          </li>
          <li>Am realizat teme WordPress:
            <Gallery images={images.temeWordPress} /></li>
          <li>Am realizat artă:
            <Gallery images={images.artă} /></li></>
      )}
    </ol>
    <p className="list-footer">
      Pe <a href="https//www.github.com/silviubogan">www.github.com/silviubogan</a> am
      câteva depozite și contribuții la Volto.
    </p>
  </main>;
};