import Image from "next/image";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import { MyPhoto } from "./images";

// am scris poezii, inclusiv optimiste, în exportul de pe Facebook și silviubogan.com

export default function Home({ images: { poze, desene, screenshot, deseneOriginale } }: {
  images: {
    poze: MyPhoto[];
    desene: MyPhoto[];
    screenshot: MyPhoto[];
    deseneOriginale: MyPhoto[];
  }
}) {
  const [index, setIndex] = useState(-1);
  const [indexDesen, setIndexDesen] = useState(-1);
  const [screenshotIndex, setScreenshotIndex] = useState(-1);
  const [desenOriginalIndex, setDesenOriginalIndex] = useState(-1);

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
      <li>
        5.
        <MasonryPhotoAlbum photos={screenshot} onClick={({ index }) => setScreenshotIndex(index)} />

        <Lightbox
          slides={screenshot}
          open={screenshotIndex >= 0}
          index={screenshotIndex}
          close={() => setScreenshotIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
        <p>
          Am realizat în Electron <a href="https://github.com/silviubogan/reminder-to-see">un program</a> testat pe Linux și Windows care pune periodic utilizatorul să facă clic pentru a continua, evitând orbecăirea.
        </p>
      </li>
      <li>
        6. Am realizat în WPF un joc educațional de tip blocuri de memorie:
        <MasonryPhotoAlbum photos={poze} onClick={({ index }) => setIndex(index)} />

        <Lightbox
          slides={poze}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </li>
      <li>
        7. Am realizat copii ale unor desene:
        <MasonryPhotoAlbum photos={desene} onClick={({ index }) => setIndexDesen(index)} />

        <Lightbox
          slides={desene}
          open={indexDesen >= 0}
          index={indexDesen}
          close={() => setIndexDesen(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </li>
      <li>
        8. Am realizat desene digitale:
        <MasonryPhotoAlbum photos={deseneOriginale} onClick={({ index }) => setDesenOriginalIndex(index)} />

        <Lightbox
          slides={deseneOriginale}
          open={desenOriginalIndex >= 0}
          index={desenOriginalIndex}
          close={() => setDesenOriginalIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </li>
    </ol>
    <p>
      Vezi și <a href="https//www.github.com/silviubogan">www.github.com/silviubogan</a>.
    </p>
  </main>;
};

import { poze, desene, screenshot, deseneOriginale } from './images';
import imageSizeFromFile from 'image-size';

export const revalidate = 60;
export const dynamicParams = true;

export const generateStaticParams = async (/* context */) => {
  const fill = async (x: MyPhoto) => {
    const d = await imageSizeFromFile(Uint8Array.from(x.src));
    x.width = d.width;
    x.height = d.height;
    return { ...x };
  };

  const map = async (arr: MyPhoto[]) => {
    const arr2: MyPhoto[] = [];
    arr.forEach(async (e) => {
      arr2.push(await fill(e));
    });
    return arr2;
  };

  return {
    images: {
      poze: await map(poze),
      desene: await map(desene),
      screenshot: await map(screenshot),
      deseneOriginale: await map(deseneOriginale)
    }
  };
};