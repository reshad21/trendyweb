import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
const HighlightSection = () => {
    return (
        <div className='py-32'>
            <div className="max-w-7xl mx-auto p-6 lg:px-8">
                <div className="bg-indigo-700 text-white flex flex-col items-center justify-center gap-10 rounded-3xl px-20 py-28">
                    <h1 className="text-center text-5xl font-bold">Digital Marketing SMO & SEO Solution!</h1>
                    <p className="text-center text-lg">Our digital marketing solutions encompass both SMO (Social Media Optimisation) and SEO (Search Engine Optimisation) strategies, designed to maximise online visibility and engagement for businesses.</p>

                    <div className="flex  gap-5 items-center">
                        <Link href="/" className="bg-gradient-to-r from-[#ee0979] from-10% via-[#ff6a00] via-70% to-[#ee0979] to-90% shadow-lg px-8 py-3 text-white rounded-xl rounded-e-full rounded-tl-full hover:text-slate-800 hover:bg-white hover:border-orange-600 text-sm font-semibold">Connect with us</Link>
                        <Link href="/">
                            <div className="flex gap-1 justify-center items-center text-sm font-bold">
                                <span>Know more</span>
                                <span><IoIosArrowRoundForward className="text-white" size={25} /></span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighlightSection;