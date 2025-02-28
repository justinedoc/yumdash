import { Link } from "react-router";
import logo from "@/assets/images/auth-cover-logo.png";
import contact from "@/assets/images/contact-us.png";
function AuthContainerCover() {
  return (
    <div className="secondary-grad-bg md:flex flex-col hidden w-[33%] px-3 py-6 rounded-lg rounded-r-4xl justify-between relative z-[900]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-38" />
      </Link>
      <Link to={"/contact"}>
        <img src={contact} alt="contact" className="w-24" />
      </Link>
    </div>
  );
}

export default AuthContainerCover;
