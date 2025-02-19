import React from "react";
import AuthContainerCover from "../../ui/AuthContainerCover";

type AuthContainerPropType = {
  children: React.ReactNode;
};

function AuthContainer({ children }: AuthContainerPropType) {
  return (
    <section className="h-screen py-2 md:p-10 bg-[url('/src/assets/images/auth-bg.png')] bg-no-repeat bg-cover">
      <main className="w-[94%] md:w-[90%] lg:w-[75%] xl:w-[73%] 2xl:w-[48%] min-h-[96vh] mx-auto bg-white shadow rounded-lg flex border border-[#0F5D8F29] relative">
        <AuthContainerCover />
        {children}
      </main>
    </section>
  );
}

export default AuthContainer;
