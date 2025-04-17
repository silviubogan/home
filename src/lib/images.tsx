export const poze: MyPhoto[] = [
    {
        src: "educationalmemoryblocks_2019-07-28_16-04-31.png",
        width: 1000,
        height: 600,
    },
    {
        src: "educationalmemoryblocks_2019-07-28_16-06-28.png",
        width: 1000,
        height: 600,
    },
    {
        src: "educationalmemoryblocks_2019-07-28_16-06-38.png",
        width: 1000,
        height: 600,
    },
    {
        src: "educationalmemoryblocks_2019-07-28_16-07-32.png",
        width: 1000,
        height: 600,
    },
    {
        src: "educationalmemoryblocks_2019-08-16_14-16-31.png",
        width: 1000,
        height: 600,
    },
    {
        src: "educationalmemoryblocks_2019-08-16_14-18-05.png",
        width: 1000,
        height: 600,
    },
    {
        src: "educationalmemoryblocks_2019-08-16_14-19-17.png",
        width: 1000,
        height: 600,
    },
];

export const deseneManualeCopii: MyPhoto[] = [
    {
        src: "lucru desen/Imagine-0001.png",
        width: 1000,
        height: 600,
    },
    {
        src: "lucru desen/Imagine-0003.png",
        width: 1000,
        height: 600,
    },
    {
        src: "lucru desen/2/Imagine-0002.png",
        width: 1000,
        height: 600,
    },
];

export const screenshot: MyPhoto[] = [
    {
        src: "https://raw.githubusercontent.com/silviubogan/reminder-to-see/refs/heads/main/docs/example-screen.png",
        width: 1000,
        height: 600,
        alt: "captură de ecran"
    },
];

export const deseneDigitaleOriginale: MyPhoto[] = [
    {
        src: "desene originale/1.jpg",
        width: 1000,
        height: 600,
    },
    {
        src: "desene originale/2.jpg",
        width: 1000,
        height: 600,
    },
    {
        src: "desene originale/3.jpg",
        width: 1000,
        height: 600,
    },
    {
        src: "desene originale/4.jpg",
        width: 1000,
        height: 600,
    },
    {
        src: "desene originale/5.jpg",
        width: 1000,
        height: 600,
    },
    {
        src: "desene originale/6.jpg",
        width: 1000,
        height: 600,
    },
    {
        src: "desene originale/7.jpg",
        width: 1000,
        height: 600,
    },
    {
        src: "desene originale/8.jpg",
        width: 1000,
        height: 600,
    },
    {
        src: "desene originale/9.jpg",
        width: 1000,
        height: 600,
    },
    {
        src: "desene originale/10.jpg",
        width: 1000,
        height: 600,
    },
    {
        src: "desene originale/11.jpg",
        width: 1000,
        height: 600,
    },
    {
        src: "desene originale/12.jpg",
        width: 1000,
        height: 600,
    },
    {
        src: "desene originale/13.jpg",
        width: 1000,
        height: 600,
    },
];

export const deseneManualeOriginale: MyPhoto[] = [
    {
        src: "desene originale/14.jpg",
        width: 1000,
        height: 600,
    },
    {
        src: "desene originale/15.jpg",
        width: 1000,
        height: 600,
    },
    {
        src: "desene originale/16.jpg",
        width: 1000,
        height: 600,
    },
    {
        src: "desene originale/17.jpg",
        width: 1000,
        height: 600,
    },
    {
        src: "https://i.imgur.com/OBIJxTY.jpeg",
        width: 1000,
        height: 600,
    },
    {
        src: "https://i.imgur.com/L1esgq4.jpeg",
        width: 0,
        height: 0,
    },
];

export type MyPhoto = { src: string, width: number, height: number, alt?: string };
export type MyImages = { poze?: MyPhoto[], deseneManualeCopii: MyPhoto[], screenshot?: MyPhoto[],
    desene?: MyPhoto[], deseneDigitaleOriginale?: MyPhoto[], deseneManualeOriginale: MyPhoto[] };