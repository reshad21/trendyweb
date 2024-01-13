import heroBg from "@/assets/bannerbg.png";
import heroImage from "@/assets/heroimage.svg";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
    return (
        <div style={{
            backgroundImage: `url(${heroBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: '100%',
            height: '100%',
        }}>
            <div className="md:flex justify-between items-center z-2 relative mx-auto max-w-7xl p-6 lg:px-8 mt-[-2px]">
                <div className="">
                    <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 capitalize text-white">You Speak And We Help You Execute It In Your Own Way!! Welcome To WebSpider!</h1>
                    <p className="text-base mb-4 text-white">WebSpider have experts who are experienced and knows how and what specification of a company or a product are to be showcased.</p>
                    <div className="flex gap-2">
                        <Link href="/" className="bg-gradient-to-r from-[#ee0979] from-10% via-[#ff6a00] via-70% to-[#ff6a00] to-90% shadow-lg px-8 py-3 text-white rounded-xl font-semibold rounded-e-full rounded-tl-full hover:bg-gradient-to-r hover:from-[#fff] hover:from-10% hover:via-[#fff] hover:via-70% hover:to-[#fff] hover:text-slate-800">Get Started</Link>
                        <Link href="/" className="bg-gradient-to-r from-[#ee0979] from-10% via-[#ff6a00] via-70% to-[#ff6a00] to-90% shadow-lg px-8 py-3 text-white font-semibold rounded-e-full rounded-tl-full hover:bg-gradient-to-r hover:from-[#fff] hover:from-10% hover:via-[#fff] hover:via-70% hover:to-[#fff] hover:text-slate-800">Know More</Link>
                    </div>
                </div>
                <Image src={heroImage} alt="banner image" width={725} height={819} className="hidden md:inline-block" />
            </div>
        </div>
    );
};

export default Hero;