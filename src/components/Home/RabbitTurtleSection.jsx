import bannerMan from "@/assets/banner-man.webp";
import Image from "next/image";

const imageStyle = {
    // borderRadius: '50%',
    width: "50%",
    height: "auto"
}
const RabbitTurtleSection = () => {
    return (
        <div className="py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto p-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-around items-center gap-10">
                    <Image src={bannerMan} style={imageStyle} />
                    <div className="">
                        <h1 className="font-bold text-3xl">Do You Remember The Story Of <span className="text-orange-500">The Rabbit And Turtle?</span></h1>
                        <p className="text-slate-500 my-10">Kids believe that the turtle was hardworking, but the truth is that if the rabbit had not  been distracted, the turtle would have lost the race. You alone, looking after investment and creativity along with your business, will make you the distracted rabbit. WebDev Private Limited comes into the story now, follows the rabbit through the race, and then reminds him of his self-worth and power. The rabbit stays the fastest and smartest in the jungle!</p>
                        <ul className="list-disc text-slate-500 pl-5">
                            <li className="pl-2">We have a team of graphic designers who create the best and most suitable templates and promotional videos for you. These won’t just attract customers; they will also make them pay a visit and buy something. Looks and presentation are our jobs.</li>
                            <li className="pl-2">We prepare the best for you so that when you represent yourself, you feel proud of who you are and have always been, and the same confidence may be seen by the customers.</li>
                            <li className="pl-2">Our graphic design experts use tools like Canva, Adobe Premium, and Lightroom Premium. All that is hot in the market is what we provide.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RabbitTurtleSection;