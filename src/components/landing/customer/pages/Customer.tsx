import DownloadApp from "../_components/DownloadApp";
import EarnWithUs from "../_components/EarnWithUs";
import Faq from "../_components/Faq";
import Hero from "../_components/Hero";
import HeroCallToAction from "../_components/HeroCallToAction";
import Subscribe from "../_components/Subscribe";

function Customer() {
  return (
    <section>
      <Hero />
      <HeroCallToAction />
      <DownloadApp />
      <EarnWithUs />
      <Subscribe />
      <Faq />
    </section>
  );
}

export default Customer;
