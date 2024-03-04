import QuickContactCard from "./QuickContactCard";
// import { FaCode, FaRegPenToSquare } from "react-icons/fa6";
// import { IoIosPeople } from "react-icons/io";
// import { LuSquareCode } from "react-icons/lu";
const items = [
    {
        id: 1,
        // icon: <FaCode size={22} className="text-blue-800" />,
        title: "Website Optimization FREE",
        description: "To represent all the aspects of your product, you need to keep designing your website in different ways to meet the demands of time and customers. Customers do visit the website, but what makes them buy is how irresistible and relatable it is to them."
    },
    {
        id: 2,
        // icon: <FaRegPenToSquare size={22} className="text-blue-800" />,
        title: "Unique Content Included",
        description: "70% of consumers would learn about products through content mediums rather than traditional advertising. It is not easy to get people to spend money on something they haven’t heard of before. So, you will need content that will educate your audience about your product. Use infographics and maps to talk about your product."
    },
    {
        id: 2,
        // icon: <FaRegPenToSquare size={22} className="text-blue-800" />,
        title: "Unique Content Included",
        description: "70% of consumers would learn about products through content mediums rather than traditional advertising. It is not easy to get people to spend money on something they haven’t heard of before. So, you will need content that will educate your audience about your product. Use infographics and maps to talk about your product."
    },
]
const QuickContactSection = () => {
    return (
        <div className="bg-[#f8fafc] py-32">
            <div className="max-w-7xl mx-auto p-6 lg:px-8">
                <div className="flex flex-col text-center gap-5 mb-2 md:mb-10">
                    <h2 className="text-3xl font-bold">Contact Us For Any <span className="text-orange-500">help</span></h2>
                    <p className="text-slate-500 px-2 md:px-[280px]">How many days to promote for accurate response, How to manage the promotional budget and what to promote?</p>
                </div>
                <div className="flex flex-col md:flex-row item-center justify-between gap-4">
                    {
                        items.map((item) => <QuickContactCard item={item} key={item.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default QuickContactSection;