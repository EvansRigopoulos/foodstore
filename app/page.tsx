import AboutPage from "./about/page";
import Gallery from "./gallery/gallery";
import MenuSection from "./products/MenuSection";
import SmokeAnimation from "./components/SmokeAnimation";

function Home() {
  return (
    <div>
      <AboutPage />
      <MenuSection />
      <SmokeAnimation />
      <Gallery />
    </div>
  );
}

export default Home;
