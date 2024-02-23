import bannerMan from "@/assets/PPC-trend.webp";
import Image from "next/image";
const WebDevLead = () => {
    return (
        <div className="bg-slate-50">
            <div className="max-w-7xl mx-auto p-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-around items-center gap-10">
                    <Image src={bannerMan} className="w-full md:w-1/2 object-fill h-auto" />
                    <div className="">
                        <h1 className="font-bold text-3xl">50 Times More Business Leads: Make More In <span className="text-orange-500">2023!</span></h1>
                        <p className="text-slate-500 my-10">Kids believe that the turtle was hardworking, but the truth is that if the rabbit had not been distracted, the turtle would have lost the race. You alone, looking after investment and creativity along with your business, will make you the distracted rabbit. WebDev Private Limited comes into the story now, follows the rabbit through the race, and then reminds him of his self-worth and power. The rabbit stays the fastest and smartest in the jungle!</p>
                        <ul className="list-disc text-slate-500 pl-5">
                            <li className="pl-2">We have a team of graphic designers and web developers (all experienced) who create the best and most suitable designs and code them for you. These will not just attract customers but also make them pay a visit and buy something. Looks and presentation are our jobs. You get 50 times more potential business customers.</li>
                            <li className="pl-2">We are working on all the latest technologies available on the market today. You do not have to worry about this; through our conversation with you, you will get to know what is the best technology for you.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDevLead;