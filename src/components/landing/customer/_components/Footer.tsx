import { Button } from "@/components/ui/button";
import Logo from "../../ui/Logo";
import { footerNavs } from "../constants/footerNavs";
import { footerSocials } from "../constants/footerSocials";
import footerVector1 from "@/assets/images/footer-vector-1.png";
import footerVector2 from "@/assets/images/footer-vector-2.png";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="relative z-[3] bg-[#FCE3B0] px-5 pt-5 md:px-15 md:pt-15">
      {/* Footer Inner Container */}
      <div className="z-10 mx-auto rounded-t-4xl bg-[#191104] md:rounded-t-[4rem]">
        {/* Top Section: Logo & Intro */}
        <div className="flex flex-col gap-5 px-7 py-15 md:flex-row md:justify-between md:px-20 md:pt-20">
          <div className="flex w-full flex-col gap-5 md:max-w-[18rem]">
            <Logo className="w-28" />
            <p className="text-hero text-lg font-extralight text-white">
              Satisfy Your Cravings With Just A Tap!
            </p>

            <Link to="/restaurants">
              <Button className="bg-secondary w-32 rounded-full py-5 text-white">
                Order Now
              </Button>
            </Link>
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

        <div className="flex flex-col items-center justify-between gap-6 border-t p-7 text-sm md:flex-row md:gap-0">
          <p className="text-white">
            &copy; 2023 Yumdash. All rights reserved.
          </p>

          <ul className="flex gap-4">
            {footerSocials.map(({ name, href }, i) => (
              <li key={i} className="border-b p-2 text-white uppercase">
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
        src={footerVector1}
        alt="Decorative footer background"
        loading="lazy"
      />
      <img
        className="absolute bottom-0 left-0 -z-[2] w-[50%]"
        src={footerVector2}
        alt="Decorative footer background"
        loading="lazy"
      />
    </footer>
  );
}

export default Footer;
