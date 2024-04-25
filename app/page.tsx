import Image from "next/image";
import NavMenu from "./ui/NavMenu";
import varianceCover from "@/public/variances-cover.jpg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 overflow-auto">
     <header>
      <NavMenu />
      <div className="shadow-md">
        <Image src={varianceCover} alt="variance-Logo" width={500} height={500} />
      </div>
     </header>
    </main>
  );
}
