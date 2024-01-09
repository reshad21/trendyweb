import BrandSection from "@/components/Home/BrandSection";
import CaseStudySection from "@/components/Home/CaseStudySection";
import ContactUsSection from "@/components/Home/ContactUsSection";
import DoforYouSection from "@/components/Home/DoforYouSection";
import ExplorerSection from "@/components/Home/ExplorerSection";
import Hero from "@/components/Home/Hero";
import HighlightSection from "@/components/Home/HighlightSection";
import RabbitTurtleSection from "@/components/Home/RabbitTurtleSection";
import SeoServiceSection from "@/components/Home/SeoServiceSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
export default function Home() {
  return (
    <main>
      <Hero/>
      <BrandSection/>
      <ExplorerSection/>
      <DoforYouSection/>
      <SeoServiceSection/>
      <HighlightSection/>
      <RabbitTurtleSection/>
      <CaseStudySection/>
      <TestimonialSection/>
      <ContactUsSection/>
    </main>
  )
}
