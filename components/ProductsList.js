import products from '@/public/productData.js'
import Link from 'next/link'
import Image from 'next/image'



export default function ProductsList () {

    const prodList = products.map(prod => {
        return (
            <div className={prod.clss}>
                <Link href={`/shop/all/product${prod.id}`}>
                    <Image
                        src={prod.imgSrc}
                        className="product_items_img_div_img"
                        alt=""
                        width={prod.imgW}
                        height={prod.imgH}
                    />
                </Link>
                <p>JOSH HALL PISEAS</p>
            </div>
        )
        
    })

    return (
        <div className="product_items_img_container">
            {prodList}
        </div>
    )
}