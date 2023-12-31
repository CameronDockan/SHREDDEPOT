import products from "@/public/productData"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import LeashesDetails from "@/components/LeashesDetails"

const leashes = products.filter(prod => {
    if (prod.leash === true) return true
})

export function generateStaticParams() {

    const leashIDs = leashes.map(leash => {
        return (
            {leashID: `leash${leash.leashID}`}
        )
    })

    return leashIDs
}

export default function Page ({params}) {


    const {leashID} = params

    return (
        <main>
            <Nav />
            <LeashesDetails
            leashID={leashID}
            />
            <Footer />
        </main>
    )
}