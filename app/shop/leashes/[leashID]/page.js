"use client"

import products from "@/public/productData"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../../globalRedux/features/cart/cartSlice"


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
    // return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default function Page ({params}) {

    const cartItems = useSelector(state => state.cartItems)
    const totalQuantity = useSelector(state => state.totalQuantity)
    const totalPrice = useSelector(state => state.totalPrice)
    const dispatch = useDispatch()
    const {leashID} = params

    useEffect(() => {
        console.log(leashID)
    })

    const selectedLeashArr = leashes.filter(leash => {
        let leash_ID = `leash${leash.leashID}`
        if (leashID === leash_ID) return true
    })

    const leashNav = selectedLeashArr.map(leash => {
        let prevLeash;
        if (leash.leashID <= 1 ) prevLeash = leashes.length
        else prevLeash = leash.leashID -1

        let nextLeash;
        if (leash.leashID >= leashes.length) nextLeash = 1
        else nextLeash = leash.leashID + 1

        return (
            <nav key={`leashNav${leash.leashID}`} id="product_page_nav">
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
                        <Link href="/shop/leashes">LEASHES</Link>
                    </li>
                    <li>
                        <ion-icon name="arrow-forward-sharp"></ion-icon>
                    </li>
                    <li>
                        <p id="current_page_rep">{leash.name}</p>
                    </li>
                </ul>
                <ul id="to-and-fro_product_nav">
                    <li>
                        <Link href={`/shop/leashes/leash${prevLeash}`}>Prev</Link>
                    </li>
                    <li>
                        <p>|</p>
                    </li>
                    <li>
                        <Link href={`/shop/leashes/leash${nextLeash}`}>Next</Link>
                    </li>
                </ul>
            </nav>
        )
    })

    const leashInfo = selectedLeashArr.map(leash => {
        return (
            <div key={`leashContent${leash.id}`} id="product_info_container">
                <div id="product_img_container">
                    <Image
                        src={leash.imgSrc}
                        width={leash.imgW/2}
                        height={leash.imgH/2}
                        alt="product"
                    />
                </div>
                <div id="product_specs_container">
                        <h1>{leash.name}</h1>
                        <p id="price">{`$${leash.price} USD`}</p>
                        <div className="cart_button_container" id="add_product_one">
                            <button onClick={() => dispatch(addToCart(
                                {
                                id: leash.id,
                                name: leash.name,
                                quantity: leash.quantity,
                                price: leash.price,
                                shaper: leash.shaper,
                                imgSrc: leash.imgSrc,
                                imgW: leash.imgW,
                                imgH: leash.imgH,
                                }
                                ))}>ADD TO CART
                            </button>
                            {/* REDUX DATA */}
                            {/* <p>{JSON.stringify(cartItems)}</p>
                            <p>{totalQuantity}</p>
                            <p>{JSON.stringify(totalPrice)}</p> */}
                        </div>
                        <p>Shaper: {leash.shaper}</p>
                        <p>Dimensions - {leash.dimensions}</p>
                        <p>{leash.description}</p>
                        <p id="disclaimer">*サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン</p>
                </div>
            </div>
        )
    })

    return (
        <main>
            <Nav />
            {/* <div>{id}</div> */}
            {leashNav}
            {leashInfo}
            <Footer />
        </main>
    )
}