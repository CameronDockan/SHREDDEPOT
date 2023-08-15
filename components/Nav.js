"use client"

import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function Nav () {

    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    return (
        <nav className="primary_nav" id="alternate_design_nav">
            <div className="logo"><Link href="/">SHRED DEPOT</Link></div>
            <ul className="nav_links_ul">
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
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                <p className="burger-cart-text">{totalQuantity > 0 && `(${totalQuantity})`}</p>
            </div>
        </nav>
    )
}