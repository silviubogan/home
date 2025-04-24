import { getImages } from "@/lib/imageSizes";
import { MegaHome as Home } from "../components/Home";
import { MyParticles } from "../components/MyParticles";
import Script from "next/script";

export default async function MyHome() {
  const img = await getImages();

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/cmatrix"
        strategy="beforeInteractive"
      />
      ;
      <MyParticles />
      <Home images={img} />
    </>
  );
}
