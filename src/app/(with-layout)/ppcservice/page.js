import BrandSection from "@/components/Home/BrandSection";
import ContactUsSection from "@/components/Home/ContactUsSection";
import RabbitTurtleSection from "@/components/Home/RabbitTurtleSection";
import PayPerClick from "@/components/PpcService/PayPerClick";

const PpcServicePage = () => {
    return (
        <>
            <PayPerClick/>
            <BrandSection/>
            <RabbitTurtleSection/>
            <ContactUsSection/>
        </>
    );
};

export default PpcServicePage;