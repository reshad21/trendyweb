import heroImage from "@/assets/wb.webp";
import heroBg from "@/assets/webDevBg.png";
import Image from "next/image";
const WebDevIntro = () => {
    return (
        <div style={{
            backgroundImage: `url(${heroBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            width: '100%',
            height: '100%',
        }}>
            <div className="md:flex justify-between items-center z-2 relative mx-auto max-w-7xl p-6 lg:px-8 mt-[-2px]">
                <div className="">
                    <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 capitalize">We Love <span className="text-orange-500">Designing</span> Websites! <br />
                        We Love <span className="text-orange-500">Creating</span> Clients Brand</h1>
                    <p className="text-base mb-4">WebDev has experts who are experienced and know how and what specifications of a company or a product are to be showcased.</p>
                </div>
                <Image src={heroImage} alt="banner image" width={725} height={819} className="hidden md:inline-block" />
            </div>
        </div>
    );
};

export default WebDevIntro;