import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import VerifyOTPInput from "@/lib/VerifyOTPInput";
import { Dialog } from "@/components/ui/dialog";

export type StateType = {
  email: string;
  phoneNumber: string;
};

interface VerifyOtpProps {
  onSubmit: (value: string, state: StateType) => Promise<void>;
  onErrorPath: string;
}

function VerifyOtp({ onSubmit, onErrorPath }: VerifyOtpProps) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  const isValidState = (state: unknown): state is StateType =>
    typeof state === "object" &&
    state !== null &&
    "email" in state &&
    "phoneNumber" in state;

  useEffect(() => {
    if (!isValidState(state)) {
      console.error("Missing email or phone number in state:", state);
      navigate(onErrorPath, { replace: true });
    }
  }, [state, navigate, onErrorPath]);

  const handleVerifyOtp = async () => {
    if (state && isValidState(state)) {
      await onSubmit(otp, state);
    }
  };

  return (
    <section className="flex flex-1 items-center justify-center p-4 md:p-10">
      <Dialog>
        <VerifyOTPInput
          setValue={setOtp}
          verifyOtp={handleVerifyOtp}
          value={otp}
        />
      </Dialog>
    </section>
  );
}

export default VerifyOtp;
