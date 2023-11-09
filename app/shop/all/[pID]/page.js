import products from "@/public/productData"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import ProductDetails from "@/components/ProductDetails"

export function generateStaticParams() {
    
    const prodIDs = products.map(prod => {
        return (
            {pID: `product${prod.id}`}
        )
    })
    
    return prodIDs
}

export default function Page ({params}) {

    const {pID} = params

    return (
        <main>
            <Nav />
            <ProductDetails
            pID={pID}
            />
            <Footer />
        </main>
    )
     
}