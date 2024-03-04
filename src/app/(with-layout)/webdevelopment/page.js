import ContactUsSection from "@/components/Home/ContactUsSection";
import QuickContactSection from "@/components/Home/QuickContactSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import WebDevFeature from "@/components/WebDevelopment/WebDevFeature";
import WebDevIntro from "@/components/WebDevelopment/WebDevIntro";
import WebDevLead from "@/components/WebDevelopment/WebDevLead";
import WebDevTimeLine from "@/components/WebDevelopment/WebDevTimeLine";

const WebDevelopmentPage = () => {
    return (
        <>
            <WebDevIntro/>
            <WebDevFeature/>
            <WebDevLead/>
            <WebDevTimeLine/>
            <TestimonialSection/>
            <ContactUsSection/>
            <QuickContactSection/>
        </>
    );
};

export default WebDevelopmentPage;