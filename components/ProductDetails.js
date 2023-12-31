"use client"

import products from "@/public/productData"
import Link from 'next/link'
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/app/globalRedux/features/cart/cartSlice"

const ProductDetails = ({pID}) => {

    // const cartItems = useSelector(state => state.cartItems)
    // const totalQuantity = useSelector(state => state.totalQuantity)
    // const totalPrice = useSelector(state => state.totalPrice)
    const dispatch = useDispatch()

    const selectedProdArr = products.filter(prod => {
        let prodID = `product${prod.id}`
        if (pID === prodID) return true
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
                        <div className="icon_centering_div">
                            <ion-icon name="arrow-forward-sharp"></ion-icon>
                        </div>
                    </li>
                    <li>
                        <Link href="/shop/all">SHOP</Link>
                    </li>
                    <li>
                        <div className="icon_centering_div">
                            <ion-icon name="arrow-forward-sharp"></ion-icon>
                        </div>
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
                                ))}>ADD TO CART
                            </button>
                            {/* REDUX DATA */}
                            {/* <p>{JSON.stringify(cartItems)}</p>
                            <p>{totalQuantity}</p>
                            <p>{JSON.stringify(totalPrice)}</p> */}
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
        <>
            {prodNav}
            {prodInfo}
            {pID}
        </>
    )
}

export default ProductDetails