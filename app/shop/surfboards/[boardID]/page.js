
import products from "@/public/productData"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import SurfboardDetails from "@/components/SurfboardDetails"

const surfboards = products.filter (prod => {
    if (prod.surfboard === true) return true
})

export function generateStaticParams() {

    const surfboardIDs = surfboards.map(board => {
        return (
            {boardID: `board${board.id}`}
        )
    })

    return surfboardIDs
    // return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default function Page ({params}) {

    const {boardID} = params;

    return (
        <main>
            <Nav />
            <SurfboardDetails
            boardID={boardID}
            />
            <Footer />
        </main>
    ) 
}