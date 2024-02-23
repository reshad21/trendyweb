'use client'
import { FaCode, FaRegPenToSquare } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { LuSquareCode } from "react-icons/lu";
const data = [
    {
        id: 1,
        icon: <FaCode size={22} className="text-blue-800" />,
        title: "Website Optimization FREE",
        description: "To represent all the aspects of your product, you need to keep designing your website in different ways to meet the demands of time and customers. Customers do visit the website, but what makes them buy is how irresistible and relatable it is to them."
    },
    {
        id: 2,
        icon: <FaRegPenToSquare size={22} className="text-blue-800" />,
        title: "Unique Content Included",
        description: "70% of consumers would learn about products through content mediums rather than traditional advertising. It is not easy to get people to spend money on something they haven’t heard of before. So, you will need content that will educate your audience about your product. Use infographics and maps to talk about your product."
    },
    {
        id: 3,
        icon: <LuSquareCode size={22} className="text-blue-800" />,
        title: "Free Website Maintenance",
        description: "From creating a relatable template to designing your whole website, we create everything you need. We manage your website server and website architecture. It will be operational 24 hours a day, 365 days a year."
    },
    {
        id: 4,
        icon: <IoIosPeople size={22} className="text-blue-800" />,
        title: "Targeted Audience, SEO FREE",
        description: "We market you to not just your target audience but also your potential audience. Come join us on the journey to making you an influence. Our SEO team makes it possible."
    },
]
const WebDevFeature = () => {
    return (
        <div className='bg-slate-50 py-32'>
            <div className="max-w-7xl mx-auto p-6 lg:px-8 ">
                <div className="flex flex-col text-center gap-5 mb-2 md:mb-10">
                    <h2 className="text-3xl font-bold">Beautiful / Fast Loading Website <span className="text-orange-500">Development</span> Faster</h2>
                    <p className="text-slate-500 px-2 md:px-[280px]">We handle everything, from developing websites to content writing and SEO, for free! You get the following :-</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-2 md:p-20">
                    {
                        data.map((item) => (
                            <div className="relative pl-20" key={item.id}>
                                <div className="absolute top-0 left-0 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h2 className="text-xl font-bold">{item.title}</h2>
                                <p className="text-slate-500">{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default WebDevFeature;