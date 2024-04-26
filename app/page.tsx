import Footer from "./Footer"
import Header from "./components/Header"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between overflow-auto">
        <section>
          <h1 className="text-4xl font-bold text-center mt-10">
            Welcome to your new app
          </h1>
          <p className="text-lg text-center mt-4">
            Get started by editing <code>app/page.tsx</code>
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
