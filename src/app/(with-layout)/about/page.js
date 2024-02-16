import ContactUsSection from "@/components/Home/ContactUsSection";
import HighlightSection from "@/components/Home/HighlightSection";
import AboutUsFeature from "@/components/about/AboutUsFeature";
import AboutUsIntro from "@/components/about/AboutUsIntro";

const spaceDecrease={
    paddingTop:"0px",
    paddingBottom:"0px"
}

const AboutPage = () => {
    return (
        <div>
            <AboutUsIntro/>
            <AboutUsFeature/>
            <HighlightSection/>
            <ContactUsSection spaceDecrease={spaceDecrease}/>
        </div>
    );
};

export default AboutPage;