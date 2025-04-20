"use client";

import { MyPhoto } from "../lib/images";
import { FC, useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import { renderNextImage } from "./GalleryNextImage";

export const Gallery: FC<{ images?: MyPhoto[] }> = ({ images }: { images?: MyPhoto[] }) => {
  const [idx, setIdx] = useState(-1);

  if (typeof images === 'undefined') {
    return <></>;
  }

  return <>
    <MasonryPhotoAlbum
      key={images[0].src}
      photos={images.map(x => ({
        src: x.src,
        width: x.width || 0,
        height: x.height || 0,
        alt: x.alt || undefined
      }))}
      onClick={({ index }) => setIdx(index)}
      render={{ image: renderNextImage }} />
    <Lightbox
      key={images[0].src + "_lightbox"}
      slides={images}
      open={idx >= 0}
      index={idx}
      close={() => setIdx(-1)}
      // enable optional lightbox plugins
      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
    />
  </>
};
