import { FeaturedProjects } from "./components/pages/home/FeaturedProjects";
import { HeroSection } from "./components/pages/home/HeroSection";
import { KnownTechs } from "./components/pages/home/KnownTechs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <FeaturedProjects />
    </>
  )
}
