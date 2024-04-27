import Footer from "./Footer"
import Header from "./components/Header"
import MusicSection from "./ui/MusicSection"
import ReleaseSection from "./ui/ReleaseSection"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col grow items-center justify-between overflow-auto px-4">
        <ReleaseSection />
        <MusicSection />
      </main>
      <Footer />
    </>
  )
}
