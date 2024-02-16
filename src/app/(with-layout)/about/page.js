import ContactUsSection from "@/components/Home/ContactUsSection";
import HighlightSection from "@/components/Home/HighlightSection";
import AboutUsFeature from "@/components/about/AboutUsFeature";
import AboutUsIntro from "@/components/about/AboutUsIntro";

const AboutPage = () => {
    return (
        <div>
            <AboutUsIntro/>
            <AboutUsFeature/>
            <HighlightSection/>
            <ContactUsSection/>
        </div>
    );
};

export default AboutPage;