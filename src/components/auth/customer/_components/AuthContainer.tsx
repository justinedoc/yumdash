import AuthContainerCover from "../../ui/AuthContainerCover";
import Loading from "../../ui/Loading";
import { useLoadingContext } from "../../hooks/useLoadingContext";

type AuthContainerPropType = {
  children: React.ReactNode;
};

function AuthContainer({ children }: AuthContainerPropType) {
  const { isLoading } = useLoadingContext();

  return (
    <section className="min-h-screen py-2 md:p-7 bg-[url('/src/assets/images/auth-bg.png')] bg-no-repeat bg-cover">
      <main className="relative w-[94%] md:w-[90%] lg:w-[75%] 2xl:w-[50%] min-h-[96vh] mx-auto bg-white shadow rounded-lg flex border border-[#0F5D8F29]">
        <AuthContainerCover />

        {children}

        {isLoading && <Loading />}
      </main>
    </section>
  );
}

export default AuthContainer;
