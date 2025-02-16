import DownloadApp from "../_components/DownloadApp";
import EarnWithUs from "../_components/EarnWithUs";
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
    </section>
  );
}

export default Customer;
