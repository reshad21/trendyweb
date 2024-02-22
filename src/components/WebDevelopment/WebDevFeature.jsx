'use client'
import { FaCode, FaRegPenToSquare } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { LuSquareCode } from "react-icons/lu";
const data = [
    {
        id: 1,
        icon: <FaCode size={22} className="text-blue-800" />,
        title: "Website Optimization & Designing",
        description: "To represent all the aspects of your product, you need to keep designing your website in different ways to meet the demands of time and customers. Customers do visit the website, but what makes them buy is how irresistible and relatable it is to them."
    },
    {
        id: 2,
        icon: <FaRegPenToSquare size={22} className="text-blue-800" />,
        title: "Content Marketing",
        description: "70% of consumers would learn about products through content mediums rather than traditional advertising. It is not easy to get people to spend money on something they haven’t heard of before. So, you will need content that will educate your audience about your product. Use infographics and maps to talk about your product."
    },
    {
        id: 3,
        icon: <LuSquareCode size={22} className="text-blue-800" />,
        title: "Hire Your IT Experts / PR Experts",
        description: "From creating a relevant template to designing your whole website, we create everything you need. Customers are generally not patient enough to read through the link if the website looks boring. We make you look presentable and relatable to your product.."
    },
    {
        id: 4,
        icon: <IoIosPeople size={22} className="text-blue-800" />,
        title: "Targeted Audience",
        description: "We market you to not just your target audience but also your potential audience. Come join us on the journey to making you an influence."
    },
]
const WebDevFeature = () => {
    console.log(data);
    return (
        <div className='bg-slate-50 py-32'>
            <div className="max-w-7xl mx-auto p-6 lg:px-8 ">
                <div className="flex flex-col text-center gap-5 mb-2 md:mb-10">
                    <h2 className="text-3xl font-bold">We Make Your <span className="text-orange-500">Seo Service</span> Faster</h2>
                    <p className="text-slate-500 px-2 md:px-[280px]">For more expert opinions about better investments and cute promotional aspects, contact WebSpider Private Limited. Because,</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-2 md:p-20">
                    {
                        data.map((item) => (
                            <div className="relative pl-20" key={item.id}>
                                <div className="absolute top-0 left-0 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center">
                                    {/* {<item.icon size={22} className="text-blue-800" />} */}
                                    {item.icon}
                                </div>
                                <h2 className="text-xl font-bold">{item.title}</h2>
                                <p className="text-slate-500">{item.description}</p>
                            </div>
                        ))
                    }
                    {/* <div className="relative pl-20">
                        <div className="absolute top-0 left-0 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center">
                            <span><FaCode size={22} className="text-blue-800" /></span>
                        </div>
                        <h2 className="text-xl font-bold">Website Optimization & Designing</h2>
                        <p className="text-slate-500">To represent all the aspects of your product, you need to keep designing your website in different ways to meet the demands of time and customers. Customers do visit the website, but what makes them buy is how irresistible and relatable it is to them.</p>
                    </div>

                    <div className="relative pl-20">
                        <div className="absolute top-0 left-0 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center">
                            <span><FaRegPenToSquare size={22} className="text-blue-800" /></span>
                        </div>
                        <h2 className="text-xl font-bold">Content Marketing</h2>
                        <p className="text-slate-500">70% of consumers would learn about products through content mediums rather than traditional advertising. It is not easy to get people to spend money on something they haven’t heard of before. So, you will need content that will educate your audience about your product. Use infographics and maps to talk about your product.</p>
                    </div>

                    <div className="relative pl-20">
                        <div className="absolute top-0 left-0 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center">
                            <span><LuSquareCode size={22} className="text-blue-800" /></span>
                        </div>
                        <h2 className="text-xl font-bold">Hire Your IT Experts / PR Experts</h2>
                        <p className="text-slate-500">From creating a relevant template to designing your whole website, we create everything you need. Customers are generally not patient enough to read through the link if the website looks boring. We make you look presentable and relatable to your product..</p>
                    </div>

                    <div className="relative pl-20">
                        <div className="absolute top-0 left-0 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center">
                            <span><IoIosPeople size={22} className="text-blue-800" /></span>
                        </div>
                        <h2 className="text-xl font-bold">Targeted Audience</h2>
                        <p className="text-slate-500">We market you to not just your target audience but also your potential audience. Come join us on the journey to making you an influence.</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default WebDevFeature;