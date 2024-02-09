import {
  getHeroImageCarouselData,
  getPackagesByCategory,
} from "../../sanity/sanity.query";
import { FeaturedSection, Footer, HeroImageCarousel } from "@/app/components";
export default async function Home() {
  const heroCarouselData = await getHeroImageCarouselData();
  const featuredPackagesData = await getPackagesByCategory("Featured");
  return (
    <main className="flex flex-col">
      <HeroImageCarousel
        heroImageCarouselJSON={JSON.stringify(heroCarouselData)}
      />
      <FeaturedSection
        featuredPackagesData={JSON.stringify(featuredPackagesData)}
      />
      <Footer />
    </main>
  );
}
