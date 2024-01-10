import ServicesSlider from "./ServicesSlider";

const DoforYouSection = () => {
    return (
        <div className="bg-green-50 py-32">
            <div className="max-w-7xl mx-auto md:p-6 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-10 w-full p-4 md:p-0">
                    <div className="w-full md:w-[50%]">
                        <h2 className="font-bold text-3xl mb-10">What We Can <br /> Do For <span className="text-orange-500">You?</span></h2>
                        <p className="text-slate-500">We are perfect in providing solution in certain areas of technology. We have a bunch of services that could speed up your entire business functioning.</p>
                    </div>
                    <ServicesSlider />
                </div>
            </div>
        </div>
    );
};

export default DoforYouSection;