export type MyPhoto = {
    src: string,
    width?: number, height?: number, alt?: string
};
export type MyImages = {
    poze: MyPhoto[],
    pozeJoc: MyPhoto[],
    pozeJocSnake: MyPhoto[],
    deseneManualeCopii: MyPhoto[],
    screenshot: MyPhoto[],
    deseneDigitaleOriginale: MyPhoto[],
    deseneManualeOriginale: MyPhoto[],
    citatCuGraficăÎnGimp: MyPhoto[],
    temeWordPress: MyPhoto[],
    artă: MyPhoto[],
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

export const pozeJocSnake: MyPhoto[] = [
    { src: "https://i.imgur.com/DeNb68o.png" },
    { src: "https://i.imgur.com/HZPOUu0.png" },
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
    { src: "https://i.imgur.com/jQoNfHT.jpeg" },
    { src: "https://i.imgur.com/ZG2nlpO.jpeg" },
    { src: "https://i.imgur.com/TFK45qv.jpeg" },
    { src: "https://i.imgur.com/hw3YPWO.jpeg" },
    { src: "https://i.imgur.com/kzhTGcF.jpeg" },
    { src: "https://i.imgur.com/brCiwjP.jpeg" },
    { src: "https://i.imgur.com/pdwtDe2.jpeg" },
    { src: "https://i.imgur.com/KUVBrFu.jpeg" },
    { src: "https://i.imgur.com/MXs4zdW.jpeg" },
    { src: "https://i.imgur.com/B1AuFaJ.jpeg" },
    { src: "https://i.imgur.com/ah0MgOV.jpeg" },
    { src: "https://i.imgur.com/nlU3uiK.jpeg" },
    { src: "https://i.imgur.com/6UmrEtW.jpeg" },
    { src: "https://i.imgur.com/PPiYBa8.jpeg" },
    { src: "https://i.imgur.com/RIvCcyP.jpeg" },
    { src: "https://i.imgur.com/l50vZZV.jpeg" },
];

export const citatCuGraficăÎnGimp: MyPhoto[] = [
    { src: "https://i.imgur.com/uy8k5cB.jpeg" },
];

export const temeWordPress: MyPhoto[] = [
    { src: "https://i.imgur.com/KbbriSx.png" },
    { src: "https://i.imgur.com/Bw12Grt.png" },
];

export const artă: MyPhoto[] = [
    { src: "https://i.imgur.com/rcyplGP.jpeg" }
];