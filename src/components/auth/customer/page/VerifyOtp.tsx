import { useLocation, useNavigate } from "react-router";
import AuthContainer from "../_components/AuthContainer";
import lock from "/src/assets/images/lock-img.png";

import { Button } from "@/components/ui/button";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useEffect, useState } from "react";
import { sleep } from "../../utils/sleep";
import { useLoadingContext } from "../../hooks/useLoadingContext";

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
    <AuthContainer>
      <section className="flex flex-1 justify-center items-center p-4 md:p-10">
        <main className="max-w-[20rem] w-fit border border-[#0F5D8F29] p-5 md:p-6 rounded-md flex flex-col items-center gap-1">
          <img src={lock} alt="lock image" width={50} />
          <h1 className="text-xl font-semibold">Email verification</h1>
          <p className="text-xs text-[#535353] font-light text-center">
            Input 4 digit pin that was sent to your email
          </p>

          <InputOTP
            value={value}
            onChange={(value) => setValue(value)}
            maxLength={4}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            containerClassName="my-3"
          >
            <InputOTPGroup className="gap-1">
              <InputOTPSlot index={0} className="first:rounded-l-xs" />
              <InputOTPSlot index={1} className="" />
              <InputOTPSlot index={2} className="" />
              <InputOTPSlot index={3} className="last:rounded-r-xs" />
            </InputOTPGroup>
          </InputOTP>

          <Button
            disabled={value.length < 4}
            onClick={verifyOtp}
            className="disabled:bg-gray-500 secondary-grad-bg text-base md:py-5 py-6 w-full"
          >
            Confirm Pin
          </Button>
        </main>
      </section>
    </AuthContainer>
  );
}

export default VerifyOtp;
