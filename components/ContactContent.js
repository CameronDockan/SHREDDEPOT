import Image from "next/image"
import ContactIMG from 'public/images/contact_page_portugal.jpg'

export default function ContactContent () {
    return (
        <div id="contact_info_wrapper">
            {/* <img src="/images/contact_page_portugal.jpg" alt=""> */}
            <Image
                src={ContactIMG}
                alt="picture of a car with surfboards stacked on top of it on a cliff with a light blue sky as the backdrop"
            />
            <div id="text_wrapper">
                <div id="text_wrapper_inner_div">
                    <p>
                    CONTACT
                    </p>
                    <br />
                    <br />
                    <p>
                    CUSTOMER SERVICE
                    <br />
                    1-877-234-4968
                    <br />
                    Email Contact: 
                    <a href="mailto:info@shred_depot.com">info@shred_depot.com</a>
                    </p>
                    <br />
                    <p>
                    RETAIL SHOP
                    <br />
                    SHRED DEPOT
                    <br />
                    1562-2 CASTLE SQ, VENTURA, CA 93003
                    <br />
                    Phone: 805-694-2568
                    <br />
                    Fax: 805-664-2566
                    <br />
                    </p>
                </div>
            </div>
        </div>
    )
}