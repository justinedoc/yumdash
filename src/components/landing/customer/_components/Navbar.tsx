import { Button } from "@/components/ui/button";
import Logo from "../ui/Logo";
import RoleSelector from "./RoleSelector";

type NavLink = {
  label?: string;
  href?: string;
  element?: React.ReactNode;
};

const navLinks: NavLink[] = [
  {
    label: "About us",
    href: "/about",
  },
  {
    element: <RoleSelector key={"role selector"} />,
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function Navbar() {
  return (
    <nav className="rounded-b-4xl bg-[#F5E6BD] py-4 px-15 md:py-6 w-[95%] absolute top-0 left-1/2 transform -translate-x-1/2  flex justify-between items-center">
      <Logo className="w-28" />

      <ul className="flex items-center gap-3">
        {navLinks.map((link, index) =>
          link?.href ? (
            <li key={index}>
              <a href={link.href} className="text-black hover:text-gray-600">
                {link.label}
              </a>
            </li>
          ) : (
            link.element
          )
        )}
      </ul>

      <Button className="px-7 py-5 font-semibold rounded-full bg-white text-primary shadow-none">
        Resturants
      </Button>
    </nav>
  );
}

export default Navbar;
