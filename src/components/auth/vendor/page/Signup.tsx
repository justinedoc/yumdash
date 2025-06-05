import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthPromptBanner from "../../ui/AuthPromptBanner";
import SignupForm from "../_components/SignupForm";
import { sleep } from "../../utils/sleep";
import { useLoadingContext } from "../../hooks/useLoadingContext";
import { useNavigate } from "react-router";

const VendorSignupSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(11, "Please enter a valid phone number"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type TVendorSignup = z.infer<typeof VendorSignupSchema>;

function Signup() {
  const { handleLoading } = useLoadingContext();
  const navigate = useNavigate();
  const form = useForm<TVendorSignup>({
    resolver: zodResolver(VendorSignupSchema),
  });

  async function onSubmit(data: TVendorSignup) {
    try {
      handleLoading("start");
      await sleep(2000);
      console.log("Data:", data);
      navigate("verify-otp", {
        state: data,
      });
      // TODO: Add api call here
    } catch (error) {
      console.error("Error during submission:", error);
    } finally {
      handleLoading("end");
    }
  }

  return (
    <>
      <AuthPromptBanner to="vendor/login">Already on Yumdash?</AuthPromptBanner>
      <FormProvider {...form}>
        <SignupForm onSubmit={onSubmit} />
      </FormProvider>
    </>
  );
}

export default Signup;
