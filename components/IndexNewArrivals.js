import Image from 'next/image'
import Link from 'next/link'
import newArrivalIMG1 from '/public/images/new_arrival1.jpeg'
import newArrivalIMG2 from '/public/images/new_arrival2.jpeg'
import newArrivalIMG3 from '/public/images/new_arrival3.jpeg'
import newArrivalIMG4 from '/public/images/new_arrival4.jpeg'


export default function IndexNewArrivals () {
    return  (
        <div className="new_arrivals_main_container">

            <div className="new_arrivals_title">
                <h1>NEW ARRIVALS</h1>
            </div>

            <div className="new_arrivals_img_container">
                <div className="new_arrivals_img_div">
                    <Link href="/shop/all/product3">
                        <Image
                            className='new_arrivals_img_div_img'
                            src={newArrivalIMG1} 
                            alt="pink surfboard"
                        />
                    </Link>
                    <p>JOSH HALL BAT TAIL EGG</p>
                    {/* <Link href="/shop/all/product3">JOSH HALL BAT TAIL EGG</Link> */}
                </div>
                <div className="new_arrivals_img_div">
                    <Link href="/shop/all/product17">
                        <Image
                            className='new_arrivals_img_div_img'
                            src={newArrivalIMG2}
                            alt="white and blue longboard"
                        />
                    </Link>
                    <p>TYLER WARREN_9’7” PINTAIL NOSERIDER</p>
                </div>
                <div className="new_arrivals_img_div">
                    <Link href="/shop/all/product21">
                        <Image
                            className='new_arrivals_img_div_img'
                            src={newArrivalIMG3}
                            alt="quadfin set"
                        />
                    </Link>
                    <p>JOSH HALL QUADS</p>
                </div>
                <div className="new_arrivals_img_div">
                    <Link href="/shop/all/product25">
                        <Image
                            className='new_arrivals_img_div_img'
                            src={newArrivalIMG4}
                            alt="grey single fin"
                        />
                    </Link>
                    <p>ARENAL PIVOT SINGLE FIN</p>
                </div>
            </div>

        </div>
    )
}