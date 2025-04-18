import {
    MyPhoto, pozeJoc, deseneManualeCopii, screenshot,
    deseneDigitaleOriginale, deseneManualeOriginale, poze,
    citatCuGraficăÎnGimp, temeWordPress, artă, pozeJocSnake,
    MyImages
} from '@/lib/images';
import { imageSizeFromFile } from 'image-size/fromFile';
import { imageSize } from 'image-size';

async function imageSizeFromUrl(imgUrl: string): Promise<Omit<MyPhoto, "src">> {
    let f, c, a;
    try {
        f = await fetch(imgUrl);
        try {
            a = await f.arrayBuffer();
            try {
                c = await imageSize(new Uint8Array(a));
                return { width: c.width, height: c.height };
            } catch {
                throw new Error("Can't get image size for array from array buffer.");
            }
        } catch {
            throw new Error("Can't get array buffer for fetch call.");
        }
    } catch {
        throw new Error("Image URL not reachable.");
    }
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
                const i = imageSizeFromUrl(e.src);
                const p = i.then(async (s) => {
                    const pp = new Promise<MyPhoto>((resolve) => {
                        resolve({
                            src: e.src,
                            width: s.width,
                            height: s.height,
                        });
                    });
                    arr2.push(pp);
                    return await pp;
                }, (reason) => {
                    throw new Error(reason);
                });
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
        deseneManualeCopii: await map(deseneManualeCopii),
        screenshot: await map(screenshot),
        deseneDigitaleOriginale: await map(deseneDigitaleOriginale),
        deseneManualeOriginale: await map(deseneManualeOriginale),
        citatCuGraficăÎnGimp: await map(citatCuGraficăÎnGimp),
        temeWordPress: await map(temeWordPress),
        artă: await map(artă),
        pozeJocSnake: await map(pozeJocSnake),
    };

    return obj;
};