"use client"
import Image from "next/image"
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart, completeRemoval, clearState } from "@/app/globalRedux/features/cart/cartSlice"
import DecBtn from "./buttons/DecBtn"
import IncBtn from "./buttons/IncBtn"
import ClearBtn from "./buttons/ClearBtn"

export default function CartContent () {

    // const totalQuantity = useSelector(state => state.cart.totalQuantity)
    // REDUX
    const cartItems = useSelector(state => state.cartItems)
    const totalPrice = useSelector(state => state.totalPrice)
    const dispatch = useDispatch()


    let cartList = cartItems.map(i => {
        return (
            <div key={`cartItem${i.id}`} className="full_item_container">
                <div className="product_img_div">
                    <Image 
                        src={i.imgSrc}
                        width={i.imgW}
                        height={i.imgH}
                        alt="picture of item in cart"
                    />
                </div>
                <div className="product_name_div">
                    <span>{i.shaper}</span>
                    <span>-</span>
                    <span>{i.name}</span>
                </div>

                <div className="quantity_ORG">
                    <DecBtn
                        clickLogic={() => dispatch(removeFromCart(
                            {
                                id: i.id,
                                name: i.name,
                                quantity: i.quantity,
                                price: i.price,
                                shaper: i.shaper,
                                imgSrc: i.imgSrc,
                                imgW: i.imgW,
                                imgH: i.imgH,
                            }
                        ))}
                    />
                    <span className="product_quant">{i.quantity}</span>
                    <IncBtn
                        clickLogic={() => dispatch(addToCart(
                            {
                                id: i.id,
                                name: i.name,
                                quantity: i.quantity,
                                price: i.price,
                                shaper: i.shaper,
                                imgSrc: i.imgSrc,
                                imgW: i.imgW,
                                imgH: i.imgH,
                            }
                        ))}
                    />
                </div>
                <div className="total_ORG">
                    {`$${i.calculatedPrice}`}
                </div>

                <div className="remove_from_cart">
                    <ClearBtn
                        clickLogic={() => dispatch(completeRemoval(
                            {
                                id: i.id,
                                name: i.name,
                                quantity: i.quantity,
                                price: i.price,
                                shaper: i.shaper,
                                imgSrc: i.imgSrc,
                                imgW: i.imgW,
                                imgH: i.imgH, 
                            }
                        ))}
                    />
                </div>
            </div>
        )
    })

    return (
        <div className="products_ORG cart_main_container">
            
            <div className="shopping_cart_title_container">
                <h2>Shopping Cart</h2>
            </div>
            
            {cartList}
            
            <div className="sub_check_proper_flex">
                <div className="sub_and_checkout_container">
                    <div className="sum_container_ORG">
                        <h4 className="subtotal_title_ORG">
                            Subtotal
                        </h4>
                        <h4 className="numerical_rep_of_sum">
                            {`$${totalPrice}`}
                        </h4>
                    </div>
                    <div className="checkout_button_container">
                        <button
                            onClick={() => {
                                if (confirm("Mock checkout will clear the state of the cart. Do you wish to continue?")) {
                                    dispatch(clearState())
                                }
                            }}
                        >
                            CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}