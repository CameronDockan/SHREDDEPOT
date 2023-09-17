import Image from "next/image"
import aboutPageIMG from '/public/images/about_page_img.jpg'
import techLogo1 from '/public/images/logos/html_logo.png'
import techLogo2 from 'public/images/logos/css_logo.png'
import techLogo3 from 'public/images/logos/react_logo1.png'
import techLogo4 from 'public/images/logos/redux_logo.png'
import techLogo5 from 'public/images/logos/nextjs_logo.png'

export default function AboutContent () {
    return (
        <div id="about_main_container">
            <div id="about_top_img_container">
                <Image
                    src={aboutPageIMG}
                    alt="ocean water aerial veiw"
                    className="about_top_img_container-img"
                />
                <h1>SHRED DEPOT</h1>
            </div>
            <div id="about_script_container">
                <div className="about_script_flex_box1">
                    <h1>ABOUT</h1>
                    <p>This is a mock ecommerce website I initially wrote in Vanilla JavaScript
                         and then later converted into a React, Redux, and NextJS project utilizing vanilla CSS.
                    </p>
                    <p>
                        Honestly, it would've been less of a headache if I had started from scratch. 
                        However, it was good practice working with an older code base and updating it.
                    </p>
                    

                </div>
                <div className="about_script_flex_box2">
                    <Image
                        src={techLogo1}
                        alt="html logo"
                    />
                    <Image
                        src={techLogo2}
                        alt="css logo"
                    />
                    <Image
                        src={techLogo3}
                        alt="react logo"
                    />
                    <Image
                        src={techLogo4}
                        alt="redux logo"
                    />
                    <Image
                        src={techLogo5}
                        alt="nextjs logo"
                    />
                </div>
            </div>
        </div>
    )
}