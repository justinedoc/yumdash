import { type FooterNavCategory } from "@/types/footerTypes";

export const footerNavs: FooterNavCategory[] = [
  {
    category: "Company",
    items: [
      { text: "Blogs", href: "#blogs" },
      { text: "Restaurants", href: "/restaurants" },
      { text: "FAQs", href: "#faqs" },
      { text: "Career", href: "#career" },
    ],
  },
  {
    category: "About Us",
    items: [
      { text: "Terms of service", href: "#terms-of-service" },
      { text: "Privacy policy", href: "#privacy-policy" },
      { text: "Cookies", href: "#cookies" },
    ],
  },
  {
    category: "Need help",
    items: [
      { text: "Contact Us", href: "#contact-us" },
      { text: "Help center", href: "#help-center" },
    ],
  },
];
