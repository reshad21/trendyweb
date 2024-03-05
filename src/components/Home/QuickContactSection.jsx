
import QuickContactCard from "./QuickContactCard";

const QuickContactSection = () => {
    return (
        <div className="bg-[#f8fafc] py-32">
            <div className="max-w-7xl mx-auto p-6 lg:px-8">
                <div className="flex flex-col text-center gap-5 mb-2 md:mb-10">
                    <h2 className="text-3xl font-bold">Contact Us For Any <span className="text-orange-500">help</span></h2>
                    <p className="text-slate-500 px-2 md:px-[280px]">How many days to promote for accurate response, How to manage the promotional budget and what to promote?</p>
                </div>
                <QuickContactCard />
            </div>
        </div>
    );
};

export default QuickContactSection;