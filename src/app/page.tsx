import { getImages } from "@/lib/imageSizes";
import { MegaHome as Home } from "../components/Home";
import { MyParticles } from "../components/MyParticles";

export default async function MyHome() {
  const img = await getImages();

  return (
    <>
      <MyParticles />
      <Home images={img} />
    </>
  );
}
