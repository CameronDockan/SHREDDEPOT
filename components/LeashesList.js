import products from '@/public/productData.js'
import Link from 'next/link'
import Image from 'next/image'

export default function LeashesList () {
    const leashes = products.filter(prod => {
        if (prod.leash === true) return true
    })
    const leashesList = leashes.map(leash => {
        return (
            <div className={leash.clss}>
                <Link href={`/shop/leashes/leash${leash.leashID}`}>
                    <Image
                        src={leash.imgSrc}
                        className="product_items_img_div_img"
                        alt=""
                        width={leash.imgW}
                        height={leash.imgH}
                    />
                </Link>
                <p>{leash.name}</p>
            </div>
        )
    })
    return (
        <div className="product_items_img_container">
            {leashesList}
        </div>
    )
}