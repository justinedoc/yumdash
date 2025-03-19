
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
import DownloadApp from "./_components/WhyUseOurPlatform";
import EarnWithUs from "./_components/EarnWithUs";
import Faq from "./_components/Faqs";
import GettingStarted from "./_components/GettingStarted";



function Vendor() {
  return (
    <section className="w-full overflow-x-hidden">
      <Hero />
      <DownloadApp />
      <EarnWithUs />
      <GettingStarted/>
      {/* <Subscribe /> */}
      <Faq />
      <Footer />
    </section>
  );
}

export default Vendor;
