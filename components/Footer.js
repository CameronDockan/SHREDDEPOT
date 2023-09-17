"use client"

import Link from "next/link"
import { useSelector } from "react-redux"

export default function Footer () {

    let totalQuantity = useSelector(state => state.totalQuantity)

    return (
        <footer id="main_footer">
            <ul id="footer_internal_links_ul">
                <li className="footer_nav_list_items">
                    <Link href="/contact">
                        CONTACT
                    </Link>
                </li>
                <li className="footer_nav_list_items">
                    <Link href="/about">
                        ABOUT
                    </Link>
                </li>
                <li className="footer_nav_list_items">
                    <Link href="/shop/all">
                        SHOP
                    </Link>
                </li>
                <li className="footer_nav_list_items">
                    <Link href="/cart">
                        {totalQuantity && totalQuantity > 0 ? `CART (${totalQuantity})` : `CART`}
                    </Link>
                </li>

            </ul>
            <ul id="footer_icons_ul">
                <li 
                    className="footer_icons_li"
                    id="fb_mock"
                    onClick={() => alert('mock Facebook link')}
                >
                    <Link href="#fb_mock">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </Link>                
                </li>
                <li 
                    className="footer_icons_li"
                    id="twitter_mock"
                    onClick={() => alert('mock Twitter link')}
                >
                    <Link href="#twitter_mock">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </Link>
                </li>
                <li 
                    className="footer_icons_li"
                    id="insta_mock"
                    onClick={() => alert('mock Instagram link')}
                >
                    <Link href="#insta_mock">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </Link>
                </li>
                <li 
                    className="footer_icons_li"
                    id="pinterest_mock"
                    onClick={() => alert('mock Pinterest link')}
                >
                    <Link href="#pinterest_mock">
                        <ion-icon name="logo-pinterest"></ion-icon>
                    </Link>
                </li>
                <li 
                    className="footer_icons_li"
                    id="tiktok_mock"
                    onClick={() => alert('mock tiktok link')}
                >
                    <Link href="#tiktok_mock">
                        <ion-icon name="logo-tiktok"></ion-icon>
                    </Link>
                </li>
            </ul>
            <div id="company_address">
                <p>1562-2 CASTLE SQ, VENTURA, CA 93003</p>
            </div>
            <div id="copyright_display">
                <p>&#169;  SHRED DEPOT 2022</p>
            </div>
        </footer>
    )
}