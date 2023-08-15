import Image from 'next/image'
import TitleIMG from '/public/images/about_page_img.jpg'

export default function FinsTitle () {
    return (
        <div id="products_title_container">
            <div id="products_title">
                <Image 
                    src={TitleIMG}
                    alt="ocean aerial view"
                />
                <h1 id="main_products_title_h1">FINS</h1>
            </div>
         </div>
    )
}