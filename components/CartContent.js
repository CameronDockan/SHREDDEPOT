"use client"
import Image from "next/image"
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart, completeRemoval } from "@/app/globalRedux/features/cart/cartSlice"

export default function CartContent () {

    // const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalPrice = useSelector(state => state.cart.totalPrice)
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
                    <span>{i.name}</span>
                </div>

                <div className="quantity_ORG">
                    <button
                        onClick={() => dispatch(removeFromCart(
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
                    >
                        <ion-icon name="remove-outline" className="decrement_btn"></ion-icon>
                    </button>
                    <span className="product_quant">{i.quantity}</span>
                    <button
                        onClick={() => dispatch(addToCart(
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
                    >
                    <ion-icon name="add-outline" className="increment_btn"></ion-icon>
                    </button>
                </div>
                <div className="total_ORG" id="total_ORIG1">
                    {`$${i.calculatedPrice}`}
                </div>

                <div className="remove_from_cart">
                    <button
                        onClick={() => dispatch(completeRemoval(
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
                    >
                        <ion-icon name="close-outline" className="remove_btn"></ion-icon>
                    </button>
                </div>
            </div>
        )
    })

    return (
        <div className="products_ORG cart_main_container">
            
            <div className="shopping_cart_title_container">
                <h2>Shopping Cart</h2>
            </div>

            {/* <div id="full_item_container">
                    <div className="product_img_div">
                            <img src="${product1.imgSrc}" alt="surfboard">
                        </div>
                        <div className="product_name_div">
                            <span>${product1.shaper}</span>
                            <span>${product1.name}</span>
                        </div>
                        <div className="quantity_ORG">
                            <ion-icon name="remove-outline" className="decrement_btn" id="decrement_btn1"></ion-icon>
                            <span className="product_quant" id="product_quantity1">${product1.quantity}</span>
                            <ion-icon name="add-outline" className="increment_btn" id="increment_btn1"></ion-icon>
                        </div>
                        <div className="total_ORG" id="total_ORIG1">$${product1.price}.00</div>
                        <div className="remove_from_cart" id="remove1">
                            <ion-icon name="close-outline" className="remove_btn" id="remove_btn1"></ion-icon>
                        </div>
                    </div>
                </div> */}
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
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}