import { getImages } from "@/lib/imageSizes";
import { MegaHome } from "../components/Home";

export default async function Home() {
  const img = await getImages();
  return <MegaHome images={img} />;
}
