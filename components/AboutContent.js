import Image from "next/image"
import aboutPageIMG from '/public/images/about_page_img.jpg'
import techLogo1 from '/public/images/logo1.png'
import techLogo2 from 'public/images/logo2.svg.png'

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
                <div class="about_script_flex_box">
                    <h1>ABOUT</h1>
                    <p>サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン
                    サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン
                    サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン
                    サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン＿サーフィン
                    </p>
                </div>
                <div class="about_script_flex_box" id="about_script_flex_box2">
                    <Image
                        src={techLogo1}
                        alt="JavaScript logo"
                    />
                    <Image
                        src={techLogo2}
                        alt="HTML and CSS logos"
                    />
                </div>
            </div>
        </div>
    )
}