import PortfolioCard from "@/components/Portfolio/PortfolioCard";

const PortfolioPage = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 lg:px-8">
            <p className="text-center text-3xl font-semibold mb-5">We Have Done Many Others Work <br /> Let’s See Our Works</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
            </div>
        </div>
    );
};

export default PortfolioPage;