import AuthContainerCover from "./AuthContainerCover";
import { Outlet } from "react-router";

function AuthContainer() {
  return (
    <section className="min-h-screen bg-[url('/src/assets/images/auth-bg.png')] bg-cover bg-no-repeat py-2 md:p-7">
      <main className="relative mx-auto flex min-h-[96vh] w-[94%] rounded-lg border border-[#0F5D8F29] bg-white shadow md:w-[90%] lg:w-[75%] 2xl:w-[50%]">
        <AuthContainerCover />

        <Outlet />
      </main>
    </section>
  );
}

export default AuthContainer;
