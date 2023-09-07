"use client"

import products from "@/public/productData"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
// import { useEffect } from "react"
import Link from 'next/link'
import Image from "next/image"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../../globalRedux/features/cart/cartSlice"


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
    // return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default function Page ({params}) {

    const cartItems = useSelector(state => state.cartItems)
    const totalQuantity = useSelector(state => state.totalQuantity)
    const totalPrice = useSelector(state => state.totalPrice)
    const dispatch = useDispatch()
    const {finID} = params

    useEffect(() => {
        console.log(finID)
    })

    const selectedFinsArr = fins.filter(fin => {
        let fin_ID = `fin${fin.finID}`
        if (finID === fin_ID) return true
    })

    const finNav = selectedFinsArr.map(fin => {
        let prevFin;
        if (fin.finID <= 1 ) prevFin = fins.length
        else prevFin = fin.finID -1

        let nextFin;
        if (fin.finID >= fins.length) nextFin = 1
        else nextFin = fin.finID + 1

        return (
            <nav key={`finNav${fin.finID}`} id="product_page_nav">
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
                        <Link href="/shop/fins">FINS</Link>
                    </li>
                    <li>
                        <ion-icon name="arrow-forward-sharp"></ion-icon>
                    </li>
                    <li>
                        <p id="current_page_rep">{fin.name}</p>
                    </li>
                </ul>
                <ul id="to-and-fro_product_nav">
                    <li>
                        <Link href={`/shop/fins/fin${prevFin}`}>Prev</Link>
                    </li>
                    <li>
                        <p>|</p>
                    </li>
                    <li>
                        <Link href={`/shop/fins/fin${nextFin}`}>Next</Link>
                    </li>
                </ul>
            </nav>
        )
    })

    const finInfo = selectedFinsArr.map(fin => {
        return (
            <div key={`finContent${fin.id}`} id="product_info_container">
                <div id="product_img_container">
                    <Image
                        src={fin.imgSrc}
                        width={fin.imgW/2}
                        height={fin.imgH/2}
                        alt="product"
                    />
                </div>
                <div id="product_specs_container">
                        <h1>{fin.name}</h1>
                        <p id="price">{`$${fin.price} USD`}</p>
                        <div className="cart_button_container" id="add_product_one">
                        <button onClick={() => dispatch(addToCart(
                                {
                                id: fin.id,
                                name: fin.name,
                                quantity: fin.quantity,
                                price: fin.price,
                                shaper: fin.shaper,
                                imgSrc: fin.imgSrc,
                                imgW: fin.imgW,
                                imgH: fin.imgH,
                                }
                                ))}>ADD TO CART</button>
                            <p>{JSON.stringify(cartItems)}</p>
                            <p>{totalQuantity}</p>
                            <p>{JSON.stringify(totalPrice)}</p>
                        </div>
                        <p>Shaper: {fin.shaper}</p>
                        <p>Dimensions - {fin.dimensions}</p>
                        <p>{fin.description}</p>
                        <p id="disclaimer">*サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン</p>
                </div>
            </div>
        )
    })

    return (
        <main>
            <Nav />
            {/* <div>{id}</div> */}
            {finNav}
            {finInfo}
            <Footer />
        </main>
    )
}