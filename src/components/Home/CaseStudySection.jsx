import CaseStudySlider from "./CaseStudySlider";

const CaseStudySection = () => {
    return (
        <div className="py-32">
            <div className="max-w-7xl mx-auto p-6 lg:px-8">
                <div className="flex md:flex-row flex-col items-center gap-5 w-full">
                    <div className="w-full md:w-[50%]">
                        <h2 className="font-bold text-3xl mb-0 md:mb-10 text-center">Any Doubt ? Just <br /> Check Out <span className="text-orange-500">Case Study.</span></h2>
                    </div>
                    <CaseStudySlider />
                </div>
            </div>
        </div>
    );
};

export default CaseStudySection;