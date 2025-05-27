import lock from "/src/assets/images/lock-img.png";

import { Button } from "@/components/ui/button";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { X } from "lucide-react";
import { cn } from "./utils";
import { DialogTrigger } from "@/components/ui/dialog";

function VerifyOTPInput({
  value,
  setValue,
  verifyOtp,
  isModal = false,
}: {
  value: string;
  setValue: (value: string) => void;
  verifyOtp: () => Promise<void>;
  isModal?: boolean;
}) {
  return (
    <main className="relative flex w-fit max-w-[20rem] flex-col items-center gap-1 rounded-md border border-[#0F5D8F29] bg-white p-5 md:p-6">
      <DialogTrigger>
        <Button
          size={"icon"}
          className={cn(
            "outline-muted absolute top-1 right-1 bg-white text-black shadow-none outline hover:bg-white/80",
            { hidden: !isModal },
          )}
        >
          <X />
        </Button>
      </DialogTrigger>
      <img src={lock} alt="lock image" width={50} />
      <h1 className="text-xl font-semibold">Email verification</h1>
      <p className="text-center text-xs font-light text-[#535353]">
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
        className="secondary-grad-bg w-full py-6 text-base disabled:bg-gray-500 md:py-5"
      >
        Confirm Pin
      </Button>
    </main>
  );
}

export default VerifyOTPInput;
