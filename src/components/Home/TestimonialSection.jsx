import { TiMessages } from "react-icons/ti";
import TestimonialSlider from "./TestimonialSlider";
const TestimonialSection = () => {
    return (
        <div className='bg-pink-50 py-32'>
            <div className="max-w-7xl mx-auto p-6 lg:px-8">
                <div className="flex md:flex-row flex-col gap-10 items-center justify-between">
                    <div className="relative w-[50%]">
                        <div className="text-end flex justify-end">
                            <span className="text-orange-200 text-end"><TiMessages size={260} /></span>
                        </div>
                        <div className="absolute top-0 right-0">
                            <span className='text-sm font-bold text-orange-500'>Testimonials</span>
                            <h2 className='font-bold text-3xl my-2'>See What Our <br /><span className='text-orange-500'>Client</span> Says</h2>
                            <p className='text-slate-500'>Discover what our clients are saying about our digital marketing solutions. Read testimonials from satisfied customers and learn how WebDev has helped businesses like yours achieve their marketing goals.</p>
                        </div>
                    </div>
                    <TestimonialSlider />
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;