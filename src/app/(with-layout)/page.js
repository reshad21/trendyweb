import BrandSection from "@/components/Home/BrandSection";
import DoforYouSection from "@/components/Home/DoforYouSection";
import ExplorerSection from "@/components/Home/ExplorerSection";
import Hero from "@/components/Home/Hero";
import SeoServiceSection from "@/components/Home/SeoServiceSection";
export default function Home() {
  return (
    <main>
      <Hero/>
      <BrandSection/>
      <ExplorerSection/>
      <DoforYouSection/>
      <SeoServiceSection/>
    </main>
  )
}
