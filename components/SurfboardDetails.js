'use client'

import products from "@/public/productData"
import Link from "next/link"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/app/globalRedux/features/cart/cartSlice"


const SurfboardDetails = ({boardID}) => {

    const surfboards = products.filter (prod => {
        if (prod.surfboard === true) return true
    })

    // const cartItems = useSelector(state => state.cartItems)
    // const totalQuantity = useSelector(state => state.totalQuantity)
    // const totalPrice = useSelector(state => state.totalPrice)
    const dispatch = useDispatch()

    const selectedBoardArr = surfboards.filter(board => {
        let board_ID = `board${board.boardID}`
        if (boardID === board_ID) return true
    })

    const boardNav = selectedBoardArr.map(board => {
        let prevBoard;
        if (board.boardID <= 1 ) prevBoard = surfboards.length
        else prevBoard = board.boardID -1

        let nextBoard;
        if (board.boardID >= surfboards.length) nextBoard = 1
        else nextBoard = board.boardID + 1

        return (
            <nav key={`boardNav${board.boardID}`} id="product_page_nav">
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
                        <Link href="/shop/surfboards">SURFBOARDS</Link>
                    </li>
                    <li>
                        <ion-icon name="arrow-forward-sharp"></ion-icon>
                    </li>
                    <li>
                        <p id="current_page_rep">{board.name}</p>
                    </li>
                </ul>
                <ul id="to-and-fro_product_nav">
                    <li>
                        <Link href={`/shop/surfboards/board${prevBoard}`}>Prev</Link>
                    </li>
                    <li>
                        <p>|</p>
                    </li>
                    <li>
                        <Link href={`/shop/surfboards/board${nextBoard}`}>Next</Link>
                    </li>
                </ul>
            </nav>
        )
    })

    const boardInfo = selectedBoardArr.map(board => {
        return (
            <div key={`boardContent${board.id}`} id="product_info_container">
                <div id="product_img_container">
                    <Image
                        src={board.imgSrc}
                        width={board.imgW/2}
                        height={board.imgH/2}
                        alt="product"
                    />
                </div>
                <div id="product_specs_container">
                        <h1>{board.name}</h1>
                        <p id="price">{`$${board.price} USD`}</p>
                        <div className="cart_button_container" id="add_product_one">
                            <button onClick={() => dispatch(addToCart(
                                {
                                id: board.id,
                                name: board.name,
                                quantity: board.quantity,
                                price: board.price,
                                shaper: board.shaper,
                                imgSrc: board.imgSrc,
                                imgW: board.imgW,
                                imgH: board.imgH,
                                }
                                ))}>ADD TO CART
                            </button>
                            {/* REDUX DATA */}
                            {/* <p>{JSON.stringify(cartItems)}</p>
                            <p>{totalQuantity}</p>
                            <p>{JSON.stringify(totalPrice)}</p> */}
                        </div>
                        <p>Shaper: {board.shaper}</p>
                        <p>Dimensions - {board.dimensions}</p>
                        <p>{board.description}</p>
                        <p id="disclaimer">*サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン</p>
                </div>
            </div>
        )
    })

    return (
        <>
            {boardNav}
            {boardInfo}
        </>

    )

}

export default SurfboardDetails