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
                    {/* <img src="images/new_arrival1.jpeg" alt="pink surfboard"> */}
                    <Image
                        className='new_arrivals_img_div_img'
                        src={newArrivalIMG1} 
                        alt="pink surfboard"
                    />
                    {/* <a href="/product_pages/product3.html">JOSH HALL BAT TAIL EGG</a> */}
                    <Link href="/">JOSH HALL BAT TAIL EGG</Link>
                </div>
                <div className="new_arrivals_img_div">
                    {/* <img src="images/new_arrival2.jpeg" alt="white and blue longboard"> */}
                    <Image
                        className='new_arrivals_img_div_img'
                        src={newArrivalIMG2}
                        alt="white and blue longboard"
                    />
                    {/* <a href="/product_pages/product17.html">TYLER WARREN_9’7” PINTAIL NOSERIDER</a> */}
                    <Link href="/">TYLER WARREN_9’7” PINTAIL NOSERIDER</Link>
                </div>
                <div className="new_arrivals_img_div">
                    {/* <img src="images/new_arrival3.jpeg" alt="quadfin set"> */}
                    <Image
                        className='new_arrivals_img_div_img'
                        src={newArrivalIMG3}
                        alt="quadfin set"
                    />
                    {/* <a href="/product_pages/product21.html">JOSH HALL QUADS</a> */}
                    <Link href="/">JOSH HALL QUADS</Link>
                </div>
                <div className="new_arrivals_img_div">
                    {/* <img src="images/new_arrival4.jpeg" alt="grey single fin"> */}
                    <Image
                        className='new_arrivals_img_div_img'
                        src={newArrivalIMG4}
                        alt="grey single fin"
                    />
                    {/* <a href="/product_pages/product27.html">ARENAL PIVOT SINGLE FIN</a> */}
                    <Link href="/">ARENAL PIVOT SINGLE FIN</Link>
                </div>
            </div>

        </div>
    )
}