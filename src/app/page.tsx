import { getImages } from "@/lib/imageSizes";
import { MegaHome } from "./Home";

export default async function Home() {
  const img = await getImages();
  return <MegaHome images={img} />;
}
