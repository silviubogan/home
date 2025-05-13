import Image from "next/image";

export default function Header() {
  return (
    <header>
      <h1>Portofoliu: Silviu Bogan</h1>
      <Image src="avatar.jpg" width={250} height={150} alt="avatar" />
    </header>
  );
}
