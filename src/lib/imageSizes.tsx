import {
  MyPhoto,
  pozeJoc,
  deseneManuale,
  screenshot,
  deseneDigitaleOriginale,
  poze,
  graficăÎnGimp,
  temeWordPress,
  artă,
  pozeJocSnake,
  afacereWordPress,
  articoleBlogVechi,
  artăCss,
  diplome,
  MyImages,
} from "@/lib/images";
import { imageSizeFromFile } from "image-size/fromFile";

import { existsSync, mkdirSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { Readable } from "node:stream";

async function downloadFile(url: string, to: string) {
  const res = await fetch(url);
  if (res.body === null) {
    throw new Error("Fetched invalid body");
  } else {
    // @ts-expect-error complex type mismatch
    const stream = Readable.fromWeb(res.body);
    return await writeFile(to, stream);
  }
}

async function imageDataFromUrl(imgUrl: string): Promise<Omit<MyPhoto, "src">> {
  const folder = "image-cache/";
  const n = imgUrl.replace(/\//g, "\\");
  const np = folder + n;
  const v = existsSync(folder);
  if (!v) {
    mkdirSync(folder);
  }
  if (!existsSync(np)) {
    await downloadFile(imgUrl, np);
  }
  const c = await imageSizeFromFile(np);
  return { width: c.width, height: c.height };
}

export const getImages = async (): Promise<MyImages> => {
  const fill = async (x: MyPhoto) => {
    const path = "public/" + x.src;
    const d = await imageSizeFromFile(path);
    x.width = d.width;
    x.height = d.height;
    return { ...x };
  };

  const map = async (arr: MyPhoto[]) => {
    const arr2: Promise<MyPhoto>[] = [];
    const subpromises: Promise<MyPhoto>[] = [];
    arr.forEach((e) => {
      if (e.src.startsWith("https://") || e.src.startsWith("http://")) {
        const i = imageDataFromUrl(e.src);
        const p = i.then(
          async (s) => {
            const pp = new Promise<MyPhoto>((resolve) => {
              resolve({
                src: e.src,
                width: s.width,
                height: s.height,
              });
            });
            arr2.push(pp);
            return await pp;
          },
          (reason) => {
            throw new Error(reason);
          },
        );
        subpromises.push(p);
      } else {
        arr2.push(fill(e));
      }
    });

    await Promise.all<Promise<MyPhoto>>(subpromises);
    const arr3 = await Promise.all(arr2);
    return arr3;
  };

  const obj = {
    poze: await map(poze),
    pozeJoc: await map(pozeJoc),
    deseneManuale: await map(deseneManuale),
    screenshot: await map(screenshot),
    deseneDigitaleOriginale: await map(deseneDigitaleOriginale),
    graficăÎnGimp: await map(graficăÎnGimp),
    temeWordPress: await map(temeWordPress),
    artă: await map(artă),
    artăCss: await map(artăCss),
    pozeJocSnake: await map(pozeJocSnake),
    afacereWordPress: await map(afacereWordPress),
    articoleBlogVechi: await map(articoleBlogVechi),
    diplome: await map(diplome),
  };

  return obj;
};
