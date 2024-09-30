import AboutPage from "./about/page";
import Gallery from "./gallery/gallery";
import MenuSection from "./products/MenuSection";

function Home() {
  return (
    <div>
      <AboutPage />
      <MenuSection />
      <Gallery />
    </div>
  );
}

export default Home;
