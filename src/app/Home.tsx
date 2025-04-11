"use client";

import Image from "next/image";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import { Gallery } from "@/components/Gallery";
import { MyPhoto } from "@/lib/images";

type MyImages = { poze?: MyPhoto[], screenshot?: MyPhoto[], desene?: MyPhoto[], deseneOriginale?: MyPhoto[] };

// am scris poezii, inclusiv optimiste, în exportul de pe Facebook și silviubogan.com

export function MegaHome({ images }: { images: MyImages }) {
    return <main>
      <h1>Portofoliu: Silviu Bogan</h1>
      <Image src="avatar.jpg" width={250} height={150} alt="avatar" />
      <ol>
        <li>
          1. Am tradus <a href="https://wiki.manjaro.org/index.php/Main_Page/ro">pagina principală a Wiki-ului Linux Manjaro</a> și <a href="https://wiki.manjaro.org/index.php/Manjaro/ro">https://wiki.manjaro.org/index.php/Manjaro/ro</a> din engleză în română.
        </li>
        <li>
          2. Am postat câteva articole pe blogurile <a href="https//calealinux.wordpress.com">calealinux.wordpress.com</a> și <a href="https://silviubogan.blogspot.com/">https://silviubogan.blogspot.com/</a>.
        </li>
        <li>
          3. <a href="https://stackexchange.com/users/94724">
            <Image src="https://stackexchange.com/users/flair/94724.png" width="208" height="58" alt="profile for silviubogan on Stack Exchange, a network of free, community-driven Q&amp;A sites" title="profile for silviubogan on Stack Exchange, a network of free, community-driven Q&amp;A sites" />
          </a>
        </li>
        <li>
          4. Am realizat video cu un început de proiect Turnurile din Hanoi în Unity.<br />
          <LiteYouTubeEmbed
            id="itq3OVe3pqs"
            title="început de proiect Turnurile din Hanoi în Unity"
          />
        </li>
        {images && (
          <><li>
            5.
            <Gallery images={images.screenshot!} />
            <p>
              Am realizat în Electron <a href="https://github.com/silviubogan/reminder-to-see">un program</a> testat pe Linux și Windows care pune periodic utilizatorul să facă clic pentru a continua, evitând orbecăirea.
            </p>
          </li><li>
              6. Am realizat în WPF un joc educațional de tip blocuri de memorie:
              <Gallery images={images.poze!} />
            </li><li>
              7. Am realizat copii ale unor desene:
              <Gallery images={images.desene!} />
            </li><li>
              8. Am realizat desene digitale:
              <Gallery images={images.deseneOriginale!} />
            </li></>
        )}
      </ol>
      <p>
        Vezi și <a href="https//www.github.com/silviubogan">www.github.com/silviubogan</a>.
      </p>
    </main>;
  };