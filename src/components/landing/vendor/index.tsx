
import Hero from "../customer/_components/Hero";
import Footer from "../customer/_components/Footer";
import HeroCallToAction from "../customer/_components/HeroCallToAction";
import DownloadApp from "../customer/_components/DownloadApp";
import EarnWithUs from "../customer/_components/EarnWithUs";
import Subscribe from "../customer/_components/Subscribe";
import Faq from "../customer/_components/Faq";
import NewsLetter from "../customer/_components/NewsLetter";



function Vendor() {
  return (
    <section className="w-full overflow-x-hidden">
      <Hero />
      <HeroCallToAction />
      <DownloadApp />
      <EarnWithUs />
      <Subscribe />
      <Faq />
      <NewsLetter />
      <Footer />
    </section>
  );
}

export default Vendor;
