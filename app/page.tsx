import Footer from "./Footer"
import Header from "./components/Header"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-8 overflow-auto"></main>
      <Footer />
    </>
  )
}
