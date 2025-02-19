import { Button } from "@/components/ui/button";
import Logo from "../../ui/Logo";
import { footerNavs } from "../constants/footerNavs";
import { footerSocials } from "../constants/footerSocials";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Footer() {
  return (
    <footer className="relative z-[3] bg-[#FCE3B0] pt-5 px-5 md:pt-15 md:px-15">
      {/* Footer Inner Container */}
      <div className="mx-auto z-10 rounded-t-4xl md:rounded-t-[4rem] bg-[#191104]">
        {/* Top Section: Logo & Intro */}
        <div className="flex flex-col gap-5 md:flex-row md:justify-between py-15 px-7 md:pt-20 md:px-20">
          <div className="w-full md:max-w-[18rem] flex flex-col gap-5">
            <Logo className="w-28" />
            <p className="text-lg text-hero font-extralight text-white">
              Satisfy Your Cravings With Just A Tap!
            </p>
            <Button className="w-32 rounded-full bg-secondary py-5 text-white">
              Order Now
            </Button>
          </div>

          {/* Navigation Section */}
          <nav className="mt-8 font-light text-[#7B7B7B] md:mt-0">
            <div className="flex flex-col gap-5 md:flex-row md:gap-16">
              {footerNavs.map(({ category, items }, index) => (
                <div key={index}>
                  <h3 className="pb-5 text-left font-semibold text-white">
                    {category}
                  </h3>
                  <ul className="flex flex-col gap-5">
                    {items.map((item) => (
                      <li key={item.text}>
                        <a href={item.href} className="flex items-center gap-2">
                          <span>{item.text}</span>
                          {item.badge && (
                            <span className="inline-block rounded-full bg-[#E6FEF81A] px-3 py-2 text-xs font-semibold text-[#43FDCB]">
                              {item.badge}
                            </span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center text-sm p-7 border-t gap-6 md:gap-0">
          <p className="text-white">
            &copy; 2023 Yumdash. All rights reserved.
          </p>

          <ul className="flex gap-4">
            {footerSocials.map(({ name, href }, i) => (
              <li key={i} className="p-2 border-b uppercase text-white">
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>

          <Select>
            <SelectTrigger className="w-[180px] rounded-full">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent className="bg-[#191104]">
              <SelectItem value="English">English</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Decorative Footer Overlays */}
      <img
        className="absolute top-0 right-0 -z-[2] w-[50%]"
        src="/src/assets/images/footer-vector-1.png"
        alt="Decorative footer background"
      />
      <img
        className="absolute bottom-0 left-0 -z-[2] w-[50%]"
        src="/src/assets/images/footer-vector-2.png"
        alt="Decorative footer background"
      />
    </footer>
  );
}

export default Footer;
