import exploreImage from "@/assets/banner.webp";
import Image from 'next/image';
import Link from "next/link";

const imageStyle = {
    // borderRadius: '50%',
    border: '1px solid #fff',
    width: "50%",
    height: "auto"
}

const ExplorerSection = () => {
    return (
        <div className='max-w-7xl mx-auto p-6 lg:px-8'>
            <div className="flex gap-2 items-center">
                <Image alt='explore section bg' src={exploreImage} style={imageStyle} />
                <div className="">
                    <h1 className="font-bold text-3xl">We Are Digital <span className="text-orange-500">Explorers</span></h1>
                    <p className="text-slate-500 my-10">Everyone has gone digital with this era and so has gone the ways of promoting your work, business, and lifestyle. Digital Marketing is the boon we are talking about. WebDev Private Limited provides such convenience to you. Now that you know about digital marketing do you have the time and energy to make attractive slogans, digital posters, and attention-seeking layouts?</p>
                    <Link href="/" className="bg-gradient-to-r from-[#ee0979] from-10% via-[#ff6a00] via-70% to-[#ee0979] to-90% shadow-lg px-8 py-3 text-white rounded-xl font-semibold rounded-e-full rounded-tl-full hover:text-slate-800 hover:bg-white hover:border-orange-600">Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default ExplorerSection;