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
        </>
    );
};

export default WebDevelopmentPage;