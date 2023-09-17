import products from '@/public/productData.js'
import Link from 'next/link'
import Image from 'next/image'

export default function LeashesList () {
    const fins = products.filter(prod => {
        if (prod.fins === true) return true
    })
    const finsList = fins.map(fin => {
        return (
            <div className={fin.clss}>
                <Link href={`/shop/fins/fin${fin.finID}`}>
                    <Image
                        src={fin.imgSrc}
                        className="product_items_img_div_img"
                        alt=""
                        width={fin.imgW}
                        height={fin.imgH}
                    />
                </Link>
                <p>{fin.name}</p>
            </div>
        )
    })
    return (
        <div className="product_items_img_container">
            {finsList}
        </div>
    )
}