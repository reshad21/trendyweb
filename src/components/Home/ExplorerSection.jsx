import exploreImage from "@/assets/banner.webp";
import Image from 'next/image';
import Link from "next/link";

const imageStyle = {
    border: '1px solid #fff',
    height: "auto"
}

const ExplorerSection = () => {
    return (
        <div className="py-32">
            <div className='max-w-7xl mx-auto p-4 md:px-8'>
                <div className="flex md:flex-row flex-col gap-2 items-center">
                    <Image alt='explore section bg' src={exploreImage} style={imageStyle} className="w-full md:w-1/2 object-fill" />
                    <div className="">
                        <h1 className="font-bold text-3xl">We Are Digital <span className="text-orange-500">Explorers</span></h1>
                        <p className="text-slate-500 my-5 md:my-10">Everyone has gone digital with this era and so has gone the ways of promoting your work, business, and lifestyle. Digital Marketing is the boon we are talking about. WebDev Private Limited provides such convenience to you. Now that you know about digital marketing do you have the time and energy to make attractive slogans, digital posters, and attention-seeking layouts?</p>
                        <Link href="/" className="bg-gradient-to-r from-[#ee0979] from-10% via-[#ff6a00] via-70% to-[#ff6a00] to-90% shadow-lg px-8 py-3 text-white rounded-xl font-semibold rounded-e-full rounded-tl-full hover:bg-gradient-to-r hover:from-[#fff] hover:from-10% hover:via-[#fff] hover:via-70% hover:to-[#fff] hover:text-slate-800 hover:border-2 hover:border-orange-600">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExplorerSection;