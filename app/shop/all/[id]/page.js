"use client"

import products from "@/public/productData"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
// import { useEffect } from "react"
import Link from 'next/link'
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../../globalRedux/features/cart/cartSlice"

export function generateStaticParams() {

    const prodIDs = products.map(prod => {
        return (
            {id: `product${prod.id}`}
        )
    })

    return prodIDs
    // return [{ id: '1' }, { id: '2' }, { id: '3' }]

}

export default function Page ({params}) {

    const cartItems = useSelector(state => state.cartItems)
    const totalQuantity = useSelector(state => state.totalQuantity)
    const totalPrice = useSelector(state => state.totalPrice)
    const dispatch = useDispatch()
    const {id} = params

    // useEffect(() => {
    //     console.log(numbOfProducts)
    // })

    const selectedProdArr = products.filter(prod => {
        let prodID = `product${prod.id}`
        if (id === prodID) return true
    })

    // const selectedProd = selectedProdArr[0]

    const prodNav = selectedProdArr.map(prod => {
        let prevProd;
        if (prod.id <= 1 ) prevProd = products.length
        else prevProd = prod.id -1

        let nextProd;
        if (prod.id >= products.length) nextProd = 1
        else nextProd = prod.id + 1

        return (
            <nav key={`prodNav${prod.id}`} id="product_page_nav">
                <ul id="product_path">
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <ion-icon name="arrow-forward-sharp"></ion-icon>
                    </li>
                    <li>
                        <Link href="/shop/all">SHOP</Link>
                    </li>
                    <li>
                        <ion-icon name="arrow-forward-sharp"></ion-icon>
                    </li>
                    <li>
                        <p id="current_page_rep">{prod.name}</p>
                    </li>
                </ul>
                <ul id="to-and-fro_product_nav">
                    <li>
                        <Link href={`/shop/all/product${prevProd}`}>Prev</Link>
                    </li>
                    <li>
                        <p>|</p>
                    </li>
                    <li>
                        <Link href={`/shop/all/product${nextProd}`}>Next</Link>
                    </li>
                </ul>
            </nav>
        )
    })

    const prodInfo = selectedProdArr.map(prod => {
        return (
            <div key={`prodd${prod.id}`} id="product_info_container">
                <div id="product_img_container">
                    <Image
                        src={prod.imgSrc}
                        width={prod.imgW/2}
                        height={prod.imgH/2}
                        alt="product"
                    />
                </div>
                <div id="product_specs_container">
                        <h1>{prod.name}</h1>
                        <p id="price">{`$${prod.price} USD`}</p>
                        <div className="cart_button_container" id="add_product_one">
                            <button onClick={() => dispatch(addToCart(
                                {
                                id: prod.id,
                                name: prod.name,
                                quantity: prod.quantity,
                                price: prod.price,
                                shaper: prod.shaper,
                                imgSrc: prod.imgSrc,
                                imgW: prod.imgW,
                                imgH: prod.imgH,
                                }
                                ))}>ADD TO CART</button>
                            <p>{JSON.stringify(cartItems)}</p>
                            <p>{totalQuantity}</p>
                            <p>{JSON.stringify(totalPrice)}</p>
                        </div>
                        <p>Shaper: {prod.shaper}</p>
                        <p>Dimensions - {prod.dimensions}</p>
                        <p>{prod.description}</p>
                        <p id="disclaimer">*サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン</p>
                </div>
            </div>
        )
    })
  

    return (
        <main>
            <Nav />
            {/* <div>{id}</div> */}
            {prodNav}
            {prodInfo}
            <Footer />
        </main>
    )
     
}