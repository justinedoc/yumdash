import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { sleep } from "../../utils/sleep";
import { useLoadingContext } from "../../hooks/useLoadingContext";
import VerifyOTPInput from "@/lib/VerifyOTPInput";

function VerifyOtp() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { handleLoading } = useLoadingContext();

  useEffect(() => {
    console.log(state);
    if (!state?.email || !state?.phoneNumber) {
      console.error("No email or phone number provided");
      navigate("/signup", { replace: true });
    }
  }, [state, navigate]);

  async function verifyOtp() {
    console.log(value);
    try {
      handleLoading("start");
      // Simulate API call to verify OTP
      await sleep(2000);
      navigate("/dashboard/home", { replace: true });
    } catch (err) {
      console.error("Failed to verify OTP", err);
    } finally {
      handleLoading("end");
    }
  }

  return (
    <section className="flex flex-1 items-center justify-center p-4 md:p-10">
      <VerifyOTPInput setValue={setValue} verifyOtp={verifyOtp} value={value} />
    </section>
  );
}

export default VerifyOtp;
