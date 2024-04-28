import Footer from "./Footer"
import Header from "./components/Header"
import BandSection from "./ui/BandSection"
import ContactSection from "./ui/ContacSection"
import ReleaseSection from "./ui/ReleaseSection"
import TourSection from "./ui/TourSection"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col grow items-center justify-between overflow-auto px-4">
        <ReleaseSection />
        <TourSection />
        {/* <BandSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
