import DownloadApp from "./_components/DownloadApp";
import EarnWithUs from "./_components/EarnWithUs";
import Faq from "./_components/Faq";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import HeroCallToAction from "./_components/HeroCallToAction";
import NewsLetter from "./_components/NewsLetter";
import Subscribe from "./_components/Subscribe";

function Customer() {
  return (
    <section className="scroll-container h-screen w-full snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth">
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

export default Customer;
