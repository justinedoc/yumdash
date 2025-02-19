import React from "react";
import logo from "@/assets/images/auth-cover-logo.png";
import { Link } from "react-router";

type AuthContainerPropType = {
  children: React.ReactNode;
};

function AuthContainer({ children }: AuthContainerPropType) {
  return (
    <section className="h-screen py-2 md:p-10 bg-[url('/src/assets/images/auth-bg.png')] bg-no-repeat bg-cover">
      <main className="w-[94%] md:w-[80%] min-h-full mx-auto bg-white shadow rounded-lg flex border border-[#0F5D8F29] relative">
        <div className="secondary-grad-bg md:flex flex-col hidden w-[29%] px-3 py-6 rounded-lg rounded-r-4xl justify-between">
          <Link to="/">
            <img src={logo} alt="logo" className="w-38" />
          </Link>
          <Link to={"/contact"}>
            <img
              src="/src/assets/images/contact-us.png"
              alt="contact"
              className="w-24"
            />
          </Link>
        </div>
        {children}
      </main>
    </section>
  );
}

export default AuthContainer;
