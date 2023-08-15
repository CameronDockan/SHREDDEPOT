import Image from 'next/image'
import Link from 'next/link'
import prodIMG1 from '/public/images/home_product_img_1.jpeg'
import prodIMG2 from '/public/images/home_product_img_2.jpeg'
import prodIMG3 from '/public/images/home_product_img_3.jpeg'


export default function IndexProdLinks () {
    return (
        <div className="product_img_links_container">

            <div id="product_img_links_title">
                {/* <a href="shop.html">SHOP</a> */}
                <Link href="/shop/all">SHOP</Link>
            </div>

            <div id="product_img_links_div_container">
                <div className="product_img_links_div">
                    <Image
                        className='product_img_links_div-img'
                        src={prodIMG1}
                        alt="surfboards"
                    />
                    <Link 
                        className='product_img_links_div_a'
                        href="/shop/surfboards">Surfboards</Link>
                    
                </div>
                <div className="product_img_links_div">
                    <Image
                        className='product_img_links_div-img'
                        src={prodIMG2}
                        alt="surfboards"
                    />
                    <Link
                        className='product_img_links_div_a'
                        href="/shop/leashes">Leashes
                     </Link>
                </div>
                <div className="product_img_links_div">
                    <Image
                        src={prodIMG3}
                        alt="surfboards"
                        className='product_img_links_div-img'
                    />
                    <Link 
                        className='product_img_links_div_a'
                        href="/shop/fins">Fins
                    </Link>
                </div>
            </div>

        </div>
    )
}