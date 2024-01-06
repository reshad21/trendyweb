import ServicesSlider from "./ServicesSlider";

const DoforYouSection = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 lg:px-8">
            <div className="flex items-center gap-5 w-full">
                <div className="w-[50%]">
                    <h2 className="font-bold text-3xl mb-10">What We Can <br /> Do For <span className="text-orange-500">You?</span></h2>
                    <p className="text-slate-500">We are perfect in providing solution in certain areas of technology. We have a bunch of services that could speed up your entire business functioning.</p>
                </div>
                <ServicesSlider />
            </div>
        </div>
    );
};

export default DoforYouSection;