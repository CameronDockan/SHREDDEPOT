// index
import Carousel from "@/components/Carousel"
import IndexNewArrivals from "@/components/IndexNewArrivals"
import IndexProdLinks from "@/components/indexProdLinks"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Nav />
      <Carousel />
      <IndexProdLinks />
      <IndexNewArrivals />
      <Footer />
    </main>
  )
}
