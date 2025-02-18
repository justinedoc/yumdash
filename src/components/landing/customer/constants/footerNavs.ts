import { type FooterNavCategory } from "@/types/footerTypes";

export const footerNavs: FooterNavCategory[] = [
  {
    category: "Company",
    items: [
      { text: "Blogs", href: "#blogs" },
      { text: "Rider", href: "#rider" },
      { text: "Restaurants", href: "#restaurants" },
      { text: "FAQs", href: "#faqs" },
      { text: "Delivery areas", href: "#delivery-areas" },
      { text: "Career", href: "#career" },
    ],
  },
  {
    category: "About Us",
    items: [
      { text: "Terms of service", href: "#terms-of-service" },
      { text: "Privacy policy", href: "#privacy-policy" },
      { text: "Cookies", href: "#cookies" },
      { text: "Legal", href: "#legal" },
    ],
  },
  {
    category: "Areas",
    items: [
      { text: "Abia", href: "#abia" },
      { text: "Anambra", href: "#anambra" },
      { text: "Ebonyi", href: "#ebonyi" },
      { text: "Imo", href: "#imo", badge: "Active" },
      { text: "Enugu", href: "#enugu" },
    ],
  },
  {
    category: "Need help",
    items: [
      { text: "Contact Us", href: "#contact-us" },
      { text: "Help center", href: "#help-center" },
    ],
  },
] as const;
