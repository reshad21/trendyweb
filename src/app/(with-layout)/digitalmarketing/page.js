import BrandSection from '@/components/Home/BrandSection';
import ContactUsSection from '@/components/Home/ContactUsSection';
import QuickContactSection from '@/components/Home/QuickContactSection';
import RabbitTurtleSection from '@/components/Home/RabbitTurtleSection';
import PayPerClick from '@/components/PpcService/PayPerClick';
import MarketingCommonQuestion from '@/components/digitalmarketing/MarketingCommonQuestion';

const DigitalMarketingPage = () => {
    return (
        <>
            <PayPerClick />
            <BrandSection />
            <RabbitTurtleSection />
            <MarketingCommonQuestion/>
            <QuickContactSection/>
            <ContactUsSection />
        </>
    );
};

export default DigitalMarketingPage;