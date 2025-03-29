import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
import DownloadApp from "./_components/WhyUseOurPlatform";
import Faq from "./_components/Faqs";
import GettingStarted from "./_components/GettingStarted";
import EarnWithUs from "../customer/_components/EarnWithUs";

function Vendor() {
  return (
    <section className="w-full overflow-x-hidden">
      <Hero />
      <DownloadApp />
      <EarnWithUs viewAs="rider" />
      <GettingStarted />
      {/* <Subscribe /> */}
      <Faq />
      <Footer />
    </section>
  );
}

export default Vendor;
