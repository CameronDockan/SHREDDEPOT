"use client"

import Link from 'next/link'
import { useSelector } from 'react-redux'
import {useState, useEffect} from 'react'

export default function Nav () {

    const [burgerIsActive, setBIA] = useState(false);

    let totalQuantity = useSelector(state => state.totalQuantity)

    const handleClick = () => {
        setBIA(!burgerIsActive)
    }

    // resize
    const [belowThousand, setBT] = useState(false)

    console.log(belowThousand)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1000) setBT(true)
            else setBT(false)
        }

        window.addEventListener('resize', handleResize)
        window.addEventListener('load', handleResize)
    })

    return (
        <>
            <nav className={burgerIsActive ? "primary_nav active white" : "primary_nav inactive white"} id="alternate_design_nav">
                <div className="logo"><Link href="/">SHRED DEPOT</Link></div>
                <ul className={burgerIsActive ? "nav_links_ul nav_active" : "nav_links_ul nav_inactive"}>
                    <li className="nav_list_items"><Link href="/">HOME</Link></li>
                    <li className="nav_list_items" id="shop_nav_link"><Link href="/shop/all">SHOP</Link>
                        <ul className="shop_list_ul">
                            <li className="nav_list_items_drop"><Link href="/shop/surfboards">Surfboards</Link></li>
                            <li className="nav_list_items_drop"><Link href="/shop/fins">Fins</Link></li>
                            <li className="nav_list_items_drop"><Link href="/shop/leashes">Leashes</Link></li>
                        </ul>
                    </li>
                    <li className="nav_list_items"><Link href="/about">ABOUT</Link></li>
                    <li className="nav_list_items"><Link href="/contact">CONTACT</Link></li>
                    <li className="nav_list_items" id="cart"><Link href="/cart">{totalQuantity && totalQuantity > 0 ? `CART (${totalQuantity})` : `CART`}</Link></li>
                </ul>
                <div onClick={handleClick} className={burgerIsActive ? "burger active" : "burger inactive"}>
                    <div className={burgerIsActive ? "line1 active" : "line1 inactive"}></div>
                    <div className={burgerIsActive ? "line2 active" : "line2 inactive"}></div>
                    <div className={burgerIsActive ? "line3 active" : "line3 inactive"}></div>
                    
                    <div id={totalQuantity > 0 ? 'cart_quantity_container' : 'cart_quantity_container_invisible'}>
                        <p>
                            {totalQuantity > 0 && `(${totalQuantity})`}
                            
                        </p>
                    </div>
                </div>

                <ul className={burgerIsActive ? "mobile_ul active white" : "mobile_ul inactive white"}>
                    <li className="nav_list_items"><Link href="/">HOME</Link></li>
                    <li className="nav_list_items" id="shop_nav_link"><Link href="/shop/all">SHOP</Link>
                        {/* <ul className="shop_list_ul">
                            <li className="nav_list_items_drop"><Link href="/shop/surfboards">Surfboards</Link></li>
                            <li className="nav_list_items_drop"><Link href="/shop/fins">Fins</Link></li>
                            <li className="nav_list_items_drop"><Link href="/shop/leashes">Leashes</Link></li>
                        </ul> */}
                    </li>
                    <li className="nav_list_items"><Link href="/about">ABOUT</Link></li>
                    <li className="nav_list_items"><Link href="/contact">CONTACT</Link></li>
                    <li className="nav_list_items" id="cart"><Link href="/cart">{totalQuantity && totalQuantity > 0 ? `CART (${totalQuantity})` : `CART`}</Link></li>
                </ul>
            </nav>
            <div className={burgerIsActive ? "decoy active" : "decoy inactive"}></div>
        </>
    )
}