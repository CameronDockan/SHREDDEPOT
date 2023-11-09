import products from "@/public/productData"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import FinsDetails from "@/components/FinsDetails"

const fins = products.filter(prod => {
    if (prod.fins === true) return true
})

export function generateStaticParams() {

    const finIDs = fins.map(fin => {
        return (
            {finID: `fin${fin.finID}`}
        )
    })
    return finIDs
}

export default function Page ({params}) {

    const {finID} = params

    return (
        <main>
            <Nav />
            <FinsDetails
            finID={finID}
            />
            <Footer />
        </main>
    )
}