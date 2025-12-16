import { getImages } from "@/lib/imageSizes";
import { MyHome } from "./MyHome";

export default async function Home() {
  const img = await getImages();

  return (
    <>
      <MyHome images={img} />
    </>
  );
}
