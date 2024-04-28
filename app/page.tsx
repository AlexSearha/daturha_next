import Footer from "./Footer"
import Header from "./Header"
import BandSection from "./ui/BandSection"
import ContactSection from "./ui/ContacSection"
import ReleaseSection from "./ui/ReleaseSection"
import TourSection from "./ui/TourSection"
import VideoSection from "./ui/VideoSection"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col grow items-center justify-between overflow-auto">
        <ReleaseSection />
        <VideoSection />
        <TourSection />
        {/* <BandSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
