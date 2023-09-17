import products from '@/public/productData.js'
import Link from 'next/link'
import Image from 'next/image'


export default function SurfboardsList () {
    const boards = products.filter(board => {
        if(board.surfboard === true) return true
    });

    const boardsList = boards.map(board => {
        return (
            <div className={board.clss}>
                <Link href={`/shop/surfboards/board${board.boardID}`}>
                    <Image
                        src={board.imgSrc}
                        className="product_items_img_div_img"
                        alt=""
                        width={board.imgW}
                        height={board.imgH}
                    />
                </Link>
                <p>{board.name}</p>
            </div>
        )
    })


    return (
        <div className="product_items_img_container">
            {boardsList}
        </div>
    )
}