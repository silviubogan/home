import { getImages } from "@/lib/imageSizes";
import { MyHome } from "../components/MyHome";
import { MyParticles } from "../components/MyParticles";
import Script from "next/script";

export default async function Home() {
  const img = await getImages();

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/cmatrix"
        strategy="beforeInteractive"
      />
      <MyParticles />
      <MyHome images={img} />
    </>
  );
}
