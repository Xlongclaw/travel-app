import { getHeroImageCarouselData } from "../../sanity/sanity.query";
import FeaturedSection from "./components/FeaturedSection";
import Footer from "./components/Footer";
import HeroImageCarousel from "./components/HeroImageCarousel";

export default async function Home() {
  const heroCarouselData = await getHeroImageCarouselData()
  return (
    <main className="flex flex-col">
      <HeroImageCarousel heroImageCarouselJSON={JSON.stringify(heroCarouselData)}/>
      <FeaturedSection/>
      <Footer/>
    </main>
  );
}
