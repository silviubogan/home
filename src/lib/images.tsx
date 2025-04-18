export type MyPhoto = {
    src: string,
    width?: number, height?: number, alt?: string
};
export type MyImages = {
    poze: MyPhoto[],
    pozeJoc: MyPhoto[],
    deseneManualeCopii: MyPhoto[],
    screenshot: MyPhoto[],
    deseneDigitaleOriginale: MyPhoto[],
    deseneManualeOriginale: MyPhoto[],
    citatCuGraficăÎnGimp: MyPhoto[],
};

export const pozeJoc: MyPhoto[] = [
    {
        src: "educationalmemoryblocks_2019-07-28_16-04-31.png",
    },
    {
        src: "educationalmemoryblocks_2019-07-28_16-06-28.png",
    },
    {
        src: "educationalmemoryblocks_2019-07-28_16-06-38.png",
    },
    {
        src: "educationalmemoryblocks_2019-07-28_16-07-32.png",
    },
    {
        src: "educationalmemoryblocks_2019-08-16_14-16-31.png",
    },
    {
        src: "educationalmemoryblocks_2019-08-16_14-18-05.png",
    },
    {
        src: "educationalmemoryblocks_2019-08-16_14-19-17.png",
    },
];

export const poze: MyPhoto[] = [
    { src: "https://i.imgur.com/dZrFUhH.jpeg" },
    { src: "https://i.imgur.com/BjPWmEC.jpeg" },
]

export const deseneManualeCopii: MyPhoto[] = [
    {
        src: "lucru desen/Imagine-0001.png",
    },
    {
        src: "lucru desen/Imagine-0003.png",
    },
    {
        src: "lucru desen/2/Imagine-0002.png",
    },
];

export const screenshot: MyPhoto[] = [
    {
        src: "https://raw.githubusercontent.com/silviubogan/reminder-to-see/refs/heads/main/docs/example-screen.png",
        alt: "captură de ecran"
    },
];

export const deseneDigitaleOriginale: MyPhoto[] = [
    {
        src: "desene originale/1.jpg",
    },
    {
        src: "desene originale/2.jpg",
    },
    {
        src: "desene originale/3.jpg",
    },
    {
        src: "desene originale/4.jpg",
    },
    {
        src: "desene originale/5.jpg",
    },
    {
        src: "desene originale/6.jpg",
    },
    {
        src: "desene originale/7.jpg",
    },
    {
        src: "desene originale/8.jpg",
    },
    {
        src: "desene originale/9.jpg",
    },
    {
        src: "desene originale/10.jpg",
    },
    {
        src: "desene originale/11.jpg",
    },
    {
        src: "desene originale/12.jpg",
    },
    {
        src: "desene originale/13.jpg",
    },
];

export const deseneManualeOriginale: MyPhoto[] = [
    {
        src: "desene originale/14.jpg",
    },
    {
        src: "desene originale/15.jpg",
    },
    {
        src: "desene originale/16.jpg",
    },
    {
        src: "desene originale/17.jpg",
    },
    {
        src: "https://i.imgur.com/OBIJxTY.jpeg",
    },
    {
        src: "https://i.imgur.com/L1esgq4.jpeg",
    },
];

export const citatCuGraficăÎnGimp: MyPhoto[] = [
    { src: "https://i.imgur.com/uy8k5cB.jpeg" },
];