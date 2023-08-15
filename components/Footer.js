import Link from "next/link"

export default function Footer () {
    return (
        <footer id="main_footer">
            <ul id="footer_internal_links_ul">
                <li className="footer_nav_list_items">
                    <Link href="#main_footer">
                        CONTACT
                    </Link>
                </li>
                <li className="footer_nav_list_items">
                    <Link href="#main_footer">
                        ABOUT
                    </Link>
                </li>
                <li className="footer_nav_list_items">
                    <Link href="#main_footer">
                        SHIPPING
                    </Link>
                </li>
                <li className="footer_nav_list_items">
                    <Link href="#main_footer">
                        SHOP
                    </Link>
                </li>
            </ul>
            <ul id="footer_icons_ul">
                <li className="footer_icons_li">
                    <Link  href="#main_footer">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </Link>                
                </li>
                <li className="footer_icons_li">
                    <Link href="#main_footer">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </Link>
                </li>
                <li className="footer_icons_li">
                    <Link href="#main_footer">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </Link>
                </li>
                <li className="footer_icons_li">
                    <Link href="#main_footer">
                        <ion-icon name="logo-pinterest"></ion-icon>
                    </Link>
                </li>
                <li className="footer_icons_li">
                    <Link href="#main_footer">
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