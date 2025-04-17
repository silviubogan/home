import { MyPhoto, poze, deseneManualeCopii, screenshot, deseneDigitaleOriginale, deseneManualeOriginale } from '@/lib/images';
import { imageSizeFromFile } from 'image-size/fromFile';

export const getImages = async (/* context */) => {
    const fill = async (x: MyPhoto) => {
        const path = x.src.startsWith("https://") ? x.src : "public/" + x.src;
        const d = await imageSizeFromFile(path);
        x.width = d.width;
        x.height = d.height;
        return { ...x };
    };

    const map = async (arr: MyPhoto[]) => {
        const arr2: Promise<MyPhoto>[] = [];
        arr.forEach((e) => {
            if (e.src.startsWith("https://")) {
                arr2.push(new Promise((resolve) => resolve(e)));
                return;
            }
            arr2.push(fill(e));
        });
        const arr3 = await Promise.all(arr2);
        return arr3;
    };

    const obj = {
        poze: await map(poze),
        deseneManualeCopii: await map(deseneManualeCopii),
        screenshot: await map(screenshot),
        deseneDigitaleOriginale: await map(deseneDigitaleOriginale),
        deseneManualeOriginale: await map(deseneManualeOriginale),
    };

    return obj;
};