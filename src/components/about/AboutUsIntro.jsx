import exploreImage from "@/assets/about_intor.png";
import Image from 'next/image';
import Link from "next/link";

const imageStyle = {
    border: '1px solid #fff',
    height: "auto"
}

const AboutUsIntro = () => {
    return (
        <div className="py-32">
            <div className='max-w-7xl mx-auto p-4 md:px-8'>
                <div className="flex md:flex-row flex-col gap-2 items-center">
                    <Image alt='explore section bg' src={exploreImage} style={imageStyle} className="w-full md:w-1/2 object-fill" />
                    <div className="">
                        <h1 className="font-bold text-3xl">About <span className="text-orange-500">Us</span></h1>
                        <p className="text-slate-500 my-5 md:my-10">Our experts listen to all the ideas you have and then create new strategies with their innovative brains, and of course, the team shapes the ideas into reality. With 8 years of web and app development skills, we have worked on 100+ Internet development projects.
We are a part of BroLabs Innovation Pvt. Ltd., and we are 38 people working together as a team with just one goal: to take your business to a new level. We are the bridge between you and the customers. We create long-term relationships and love. We paint the roses in your picture. Here! At WebDev Private Limited Why don't you visit us and let's make a beautiful India together?</p>
                        <Link href="/" className="bg-gradient-to-r from-[#ee0979] from-10% via-[#ff6a00] via-70% to-[#ff6a00] to-90% shadow-lg px-8 py-3 text-white rounded-xl font-semibold rounded-e-full rounded-tl-full hover:bg-gradient-to-r hover:from-[#fff] hover:from-10% hover:via-[#fff] hover:via-70% hover:to-[#fff] hover:text-slate-800 hover:border-2 hover:border-orange-600">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsIntro;