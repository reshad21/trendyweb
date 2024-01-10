import contentManagement from "@/assets/ContentMarketing.jpg";
import digitalMarketing from "@/assets/DigitalMarketing.jpg";
import webDevelopment from "@/assets/WebsiteDevelopment.jpg";
import Image from "next/image";

const BrandSection = ({ content = null }) => {

    return (
        <div className="max-w-7xl mx-auto p-6 lg:px-8">
            <p className="text-center font-bold text-2xl md:text-3xl px-2 md:px-60 mb-20">We Help You Increase Sales By Improving SEO / PPC / SMO Of <span className="text-orange-500">Your Brand</span>{content}</p>
            <div className="md:flex gap-10">
                <div className="flex flex-col gap-4 items-center shadow-2xl px-10 py-14">
                    <div className="w-[90px] h-[90px] flex justify-center items-center bg-red-400 border-2 p-5 rounded-md border-red-400 shadow-2xl">
                        <Image src={contentManagement} alt="Brand photo" width={50} height={50} className="inline-block" />
                    </div>
                    <h2 className="text-xl font-bold">Content Marketing</h2>
                    <p className="text-center">Content marketing 70% of consumers would learn about products through content medium rather than traditional advertising. It is not easy to get people to spend money on something they have not heard of ever before.</p>
                </div>

                <div className="flex flex-col gap-4 items-center shadow-2xl px-10 py-14">
                    <div className="w-[90px] h-[90px] flex justify-center items-center bg-red-400 border-2 p-5 rounded-md border-red-400 shadow-2xl">
                        <Image src={digitalMarketing} alt="Brand photo" width={50} height={50} className="inline-block" />
                    </div>
                    <h2 className="text-xl font-bold">Digital Marketing</h2>
                    <p className="text-center">Digital marketing is one of the best techniques used for product and business promotion. We use the above-mentioned ways to promote your product to help you succeed in converting your audience into sales.</p>
                </div>

                <div className="flex flex-col gap-4 items-center shadow-2xl px-10 py-14">
                    <div className="w-[90px] h-[90px] flex justify-center items-center bg-red-400 border-2 p-5 rounded-md border-red-400 shadow-2xl">
                        <Image src={webDevelopment} alt="Brand photo" width={50} height={50} className="inline-block" />
                    </div>
                    <h2 className="text-xl font-bold">Website Development</h2>
                    <p className="text-center">A website is the essence and the personality of the company and unlike humans this personality can change and can very profitably effect the people around the world.</p>
                </div>
            </div>
        </div>
    );
};

export default BrandSection;